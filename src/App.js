import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { colors } from "./utils/Colors";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import Wave from "./wave.svg";
function App() {
  const history = useHistory();
  const [hover, setHover] = useState(false);
  return (
    <Container
      initial={{ y: 1000 }}
      animate={{ y: 0, delay: 0.2 }}
      exit={{ y: -1000 }}
    >
      <Mask></Mask>
      <Header>Is Water around you Safe?</Header>
      <Subheader>
        Want to check the safety level of drinking water around you?
      </Subheader>
      <Subheader>We are here to help!</Subheader>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => history.push("/dashboard")}
      >
        <span>Go</span>
        <Icon
          style={{ marginLeft: "10px" }}
          icon={`akar-icons:chevron-${hover ? "down" : "right"}`}
        />
      </Button>
    </Container>
  );
}

export default App;

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background: url("https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
`;

export const Mask = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Header = styled.div`
  font-size: 45px;
  font-weight: 500;
  z-index: 2;
  margin-bottom: 20px;
  color: ${colors.primary};
`;
export const Subheader = styled.div`
  margin-bottom: 10px;
  z-index: 2;
  color: ${colors.primary};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 5px 15px;
  z-index: 2;
  cursor: pointer;
  margin-top: 25px;
  transition: all 0.3s;
  border: none;
  outline: none;
  background: none;
  color: ${colors.secondary};
  :hover {
    transform: scale(1.1);
  }
`;
