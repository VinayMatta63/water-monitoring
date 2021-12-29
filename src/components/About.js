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
      <Img src="/table.png" />
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.primaryDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 300px;
`;
