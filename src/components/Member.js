import React, { useState } from "react";
import styled from "styled-components";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Telegram from "@mui/icons-material/Telegram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { colors } from "../utils/colors";
const Member = ({ details }) => {
  const [active, setActive] = useState(true);

  return (
    <Person
      onMouseEnter={() => {
        setActive(false);
      }}
      onMouseLeave={() => {
        setActive(true);
      }}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <Image src={details.image} alt="" active={active} />
      <Icons active={active}>
        {details.whatsapp ? (
          <a href={details.whatsapp}>
            <WhatsApp
              style={{
                fontSize: "17px",
                color: "#4FCE5D",
                marginTop: "10px",
                marginRight: "10px",
              }}
            />
          </a>
        ) : details.telegram ? (
          <a href={details.telegram}>
            <Telegram
              style={{
                fontSize: "17px",
                color: "#0088CC",
                marginTop: "10px",
                marginRight: "10px",
              }}
            />
          </a>
        ) : (
          ""
        )}

        <a href={details.linkedin}>
          <LinkedIn
            style={{
              marginTop: "10px",
              fontSize: "17px",
              color: "#0075b3",
            }}
          />
        </a>
      </Icons>

      <Name active={active}>{details.name}</Name>
      <Work active={active}>{details.work}</Work>
    </Person>
  );
};

export default Member;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  padding: 15px 30px;
  margin: 30px 30px;
  transform: translateY(-10px);
`;

const Name = styled.h3`
  padding-top: 20px;
  font-weight: 600;
  transform: translateY(10px);
  transition-duration: 0.3s;
  opacity: 1;
  ${(props) => props.active && `opacity:0;`}
`;
const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.568);
  transition-duration: 0.3s;
  transform: translateY(-20px);
  z-index: 97;
  object-fit: cover;
  ${(props) =>
    props.active && `opacity:1; transform: scale(1.6) translateY(39px);`}
`;
const Work = styled.h4`
  padding-bottom: 15px;
  font-weight: 500;
  transform: translateY(10px);
  opacity: 1;
  transition-duration: 0.3s;
  ${(props) => props.active && `opacity:0;`}
`;

const Icons = styled.div`
  position: absolute;
  color: white;
  transform: scale(1.7) translateY(10px);
  z-index: 99;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 1;
  ${(props) => props.active && `display: none; opacity:0;`}
`;
