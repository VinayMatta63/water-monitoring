import React, { Suspense, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { colors } from "../utils/colors.js";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Water from "./Water";

function Landing() {
  const history = useHistory();
  const [hover, setHover] = useState(false);
  return (
    <Container
      initial={{ y: 1000 }}
      animate={{ y: 0, delay: 0.2 }}
      exit={{ y: -1000 }}
    >
      <Mask>
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
            height="25px"
          />
        </Button>
      </Mask>
      <Canvas
        style={{ height: "100%", width: "100%" }}
        camera={{ fov: 30, near: 1, far: 10000, position: [20, 10, 20] }}
      >
        <Suspense fallback={<h1>Loading...</h1>}>
          <Water />
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default Landing;

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background-size: cover;
`;

export const Mask = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50vh;
  position: absolute;
  z-index: 1;
`;
export const Header = styled.div`
  font-size: 45px;
  font-weight: 600;
  z-index: 2;
  margin-bottom: 20px;
  color: ${colors.primary};
`;
export const Subheader = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  z-index: 2;
  color: ${colors.primary};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding: 5px 15px;
  z-index: 2;
  cursor: pointer;
  margin-top: 25px;
  transition: all 0.3s;
  border: none;
  font-weight: 500;
  outline: none;
  background: ${colors.secondaryAccent};
  border-radius: 15px;
  color: ${colors.secondary};
  :hover {
    transform: scale(1.1);
  }
`;
