import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import Member from "./Member";
const members = [
  {
    name: "Mr. Vikas Nehra",
    image: "/vikas.jpeg",
    work: "Assistant Professor, ECED",
  },
  {
    name: "Vinay Matta",
    image: "/upload.jpeg",
    work: "ECE 4th Year",
    telegram: "https://telegram.me/VinayMatta63",
    linkedin: "https://www.linkedin.com/in/vinay-matta-465578192/",
  },
  {
    name: "Yashwant Soni",
    image: "https://pub.iicdcrustm.com/images/yashwant.jfif",
    work: "ECE 4th Year",
    linkedin: "https://www.linkedin.com/in/yashwant-soni-5354ba169",
  },
  {
    name: "Devansh Atray",
    image:
      "https://res.cloudinary.com/dpnapmmwm/image/upload/v1620981141/Others/IMG-20210504-WA0003__01_zs6fyl.jpg",
    work: "ECE 4th Year",
    linkedin: "https://www.linkedin.com/in/devanshatray",
    whatsapp: "https://wa.me/917082349057",
  },
];
const Team = () => {
  return (
    <Container>
      <Member details={members[0]} />
      <List>
        <Member details={members[1]} />
        <Member details={members[2]} />
        <Member details={members[3]} />
      </List>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.primaryDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const List = styled.div`
  display: flex;
`;
