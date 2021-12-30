import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import emailjs, { init } from "@emailjs/browser";
import { colors } from "../utils/colors";
import { useSelector } from "react-redux";
import { userSelector } from "../features/userSlice";
import { useHistory } from "react-router";
import { onValue, ref } from "@firebase/database";
import { db } from "../firebase";

const Dashboard = () => {
  const [ph, setPh] = useState([]);
  const [turbidity, setTurbidity] = useState([]);
  const [tds, setTds] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [time, setTime] = useState([]);
  const [pred, setPred] = useState(0);
  const [loader, setLoader] = useState(true);
  init("user_17qVtiq6xe41za2gOtcZm");

  const user = useSelector(userSelector);
  const options = {
    chart: {
      height: 350,
      type: "area",
      stacked: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    xaxis: {
      type: "time",
      categories: time,
    },
  };
  const dbRef = ref(db, "Sensor");

  useEffect(() => {
    const phArray = [];
    const turbArray = [];
    const tdsArray = [];
    const tempArray = [];
    const timeArray = [];
    onValue(dbRef, (snapshot) => {
      let i = 0;
      snapshot.forEach(
        (childSnapshot) => {
          i += 1;
          // const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          phArray.push(childData.pH);
          turbArray.push(childData.Turbidity);
          tdsArray.push(childData.TDS);
          tempArray.push(childData.Temperature);
          const timeD = new Date(childData.timestamp).toLocaleTimeString(
            "en-US"
          );
          timeArray.push(timeD);
          setPred(childData.Prediction);
          if (i === snapshot.size) {
            let templateParams = {
              to_name: "Vinay Matta",
              from_name: "WQM System",
              message:
                childData.Prediction === 1
                  ? `
                  Water is Healthy!,\n
                  TDS: ${childData.TDS}, \n
                  Temperature: ${childData.Temperature},\n
                  Turbidity: ${childData.Turbidity},\n
                  PH:${childData.pH},\n
                  Time:${timeD}\n
                `
                  : `
                Water is Unhealthy!,\n
                TDS: ${childData.TDS},\n
                Temperature: ${childData.Temperature},\n
                Turbidity: ${childData.Turbidity},\n
                PH:${childData.pH},\n
                Time:${timeD}
              `,
            };
            emailjs
              .send(
                "service_hikdnjc",
                "template_1nkkug7",
                templateParams,
                "user_17qVtiq6xe41za2gOtcZm"
              )
              .then((res) => console.log(res))
              .catch((error) => {
                console.log(error.message);
              });
          }
        },
        {
          onlyOnce: true,
        }
      );
      setPh(phArray);
      setTds(tdsArray);
      setTemperature(tempArray);
      setTurbidity(turbArray);
      setTime(timeArray);
      setLoader(false);
    });
  }, []);
  const history = useHistory();
  if (!user) {
    history.push("/auth/login");
  }
  return (
    <Container>
      <LeftPanel>
        {loader ? (
          <Img src="/loader.gif" />
        ) : (
          <>
            <Img src={pred === 1 ? "/yo.gif" : "/no.gif"} />
            <Header>
              {pred === 1 ? "Water is healthy!" : "Water is unhealthy! "}
            </Header>
          </>
        )}
      </LeftPanel>
      <Charts>
        <ChartHead>pH</ChartHead>
        <Chart
          options={{ ...options, colors: ["blue"] }}
          series={[{ name: "pH", data: ph }]}
          type="area"
          height={350}
          width={700}
        />
        <ChartHead>Turbidity</ChartHead>
        <Chart
          options={{ ...options, colors: ["green"] }}
          series={[{ name: "Turbidity", data: turbidity }]}
          type="area"
          height={350}
          width={700}
        />
        <ChartHead>TDS</ChartHead>
        <Chart
          options={{ ...options, colors: ["orange"] }}
          series={[{ name: "TDS", data: tds }]}
          type="area"
          height={350}
          width={700}
        />
        <ChartHead>Temperature</ChartHead>
        <Chart
          options={{ ...options, colors: ["purple"] }}
          series={[{ name: "Tempertaure", data: temperature }]}
          type="area"
          height={350}
          width={700}
        />
      </Charts>
    </Container>
  );
};

export default Dashboard;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: -1;
`;
export const Charts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 0.6;
  margin-top: 20px;
`;
export const LeftPanel = styled.div`
  background-color: ${colors.primaryDarker};
  height: 100vh;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.h2`
  font-weight: 500;
  font-size: 28px;
`;

export const ChartHead = styled.h2`
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
  color: #062340;
`;
export const Img = styled.img``;
