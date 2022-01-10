import React from "react";
import { colors } from "../utils/colors";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { userSelector } from "../features/userSlice";
import { useHistory } from "react-router";

const About = () => {
  const user = useSelector(userSelector);
  const history = useHistory();
  if (!user) {
    history.push("/auth/login");
  }
  return (
    <Container>
      <TextCover>
        <p>
          The ultimate goal of this project is to provide whether a sample of
          water is drinkable or not. This is the bigger goal which we want to
          achieve. Therefore, we have divided the process into intermediate
          steps, which can be further sub-divided into the several domains.
        </p>
        <br />
        <ol>
          <li>
            To successfully acquire data from the sensors used into a
            microcontroller.
          </li>
          <li>
            To successfully make this microcontroller data available to a Cloud
            database using Networking technologies.
          </li>
          <li>
            To enable remote data visualization using a server on Web
            Application.
          </li>
          <li>
            To trigger alerts and notifications to the user based on this
            acquired data.
          </li>
          <li>
            To train a Classification model that can predict water potability of
            incoming data based on training dataset
          </li>
        </ol>
      </TextCover>
      <Img src="/table.jpg" />
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.primaryDarker};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 300px;
  flex: 0.5;
  object-fit: contain;
  margin-right: 20px;
`;
const TextCover = styled.div`
  flex: 0.5;
  margin: 0 40px;
  text-align: justify;
  color: ${colors.primaryLight};
  font-size: 17px;
  margin-top: 50px;
`;
