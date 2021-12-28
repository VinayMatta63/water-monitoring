import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { colors } from "../utils/colors";
import { useSelector } from "react-redux";
import { userSelector } from "../features/userSlice";
import { useHistory } from "react-router";

const Dashboard = () => {
  const [ph, setPh] = useState({
    name: "pH",
    data: [
      5.67, 7.71, 5.89, 4.83, 6.54, 5.97, 7.46, 6.6, 7.72, 7.77, 5.26, 4.99,
      7.78, 7.05, 4.56, 8.08, 6.56, 6.68, 6.93, 7.54, 7.92, 6.03, 4.84, 7.44,
      5.83, 7.86, 5.99, 7.81, 5.21,
    ],
  });
  const [turbidity, setTurbidity] = useState({
    name: "Turbidity",
    data: [
      0.7, 0.3, 0.75, 0.56, 0.69, 1.28, 0.69, 0.68, 0.64, 0.34, 0.5, 0.27, 0.73,
      0.5, 0.55, 0.72, 0.31, 0.82, 1.1, 0.48, 1.21, 0.25, 0.68, 0.15, 0.45,
      0.15, 0.41, 0.34, 0.51,
    ],
  });
  const [tds, setTds] = useState({
    name: "TDS",
    data: [
      280, 342, 464, 545, 468, 133, 446, 333, 333, 180, 512, 279, 242, 288, 303,
      385, 392, 313, 314, 370, 437, 577, 468, 315, 520, 188, 153, 165, 203,
    ],
  });
  const [temperature, setTemperature] = useState({
    name: "Temperature",
    data: [
      35, 20, 34, 40, 26, 31, 34, 21, 32, 36, 25, 41, 45, 42, 33, 27, 39, 26,
      44, 36, 35, 24, 22, 26, 42, 43, 38, 38, 25,
    ],
  });

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
      type: "datetime",
      categories: [
        "19-Oct-2021 15:24:38",
        "19-Oct-2021 15:25:38",
        "19-Oct-2021 15:26:38",
        "19-Oct-2021 15:27:38",
        "19-Oct-2021 15:28:38",
        "19-Oct-2021 15:29:38",
        "19-Oct-2021 15:30:38",
        "19-Oct-2021 15:31:38",
        "19-Oct-2021 15:32:38",
        "19-Oct-2021 15:33:38",
        "19-Oct-2021 15:34:38",
        "19-Oct-2021 15:35:38",
        "19-Oct-2021 15:36:38",
        "19-Oct-2021 15:37:38",
        "19-Oct-2021 15:38:38",
        "19-Oct-2021 15:39:38",
        "19-Oct-2021 15:40:38",
        "19-Oct-2021 15:41:38",
        "19-Oct-2021 15:42:38",
        "19-Oct-2021 15:43:38",
        "19-Oct-2021 15:44:38",
        "19-Oct-2021 15:45:38",
        "19-Oct-2021 15:46:38",
        "19-Oct-2021 15:47:38",
        "19-Oct-2021 15:48:38",
        "19-Oct-2021 15:49:38",
        "19-Oct-2021 15:50:38",
        "19-Oct-2021 15:51:38",
        "19-Oct-2021 15:52:38",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  const user = useSelector(userSelector);
  const history = useHistory();
  if (!user) {
    history.push("/auth/login");
  }
  return (
    <Container>
      <LeftPanel>
        <Header>Water is unhealthy!</Header>
      </LeftPanel>
      <Charts>
        <ChartHead>pH</ChartHead>
        <Chart
          options={{ ...options, colors: ["blue"] }}
          series={[ph]}
          type="area"
          height={350}
          width={700}
        />
        <ChartHead>Turbidity</ChartHead>
        <Chart
          options={{ ...options, colors: ["green"] }}
          series={[turbidity]}
          type="area"
          height={350}
          width={700}
        />
        <ChartHead>TDS</ChartHead>
        <Chart
          options={{ ...options, colors: ["orange"] }}
          series={[tds]}
          type="area"
          height={350}
          width={700}
        />
        <ChartHead>Temperature</ChartHead>
        <Chart
          options={{ ...options, colors: ["purple"] }}
          series={[temperature]}
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
