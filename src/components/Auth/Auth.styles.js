import styled from "styled-components";
import { colors } from "../../utils/colors";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1558169550-45825435a09b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: contain;
  background-repeat: no-repeat;
  color: ${colors.secondaryAccent};
`;

const Img = styled.img`
  height: 250px;
  width: 250px;
  align-self: center;
`;

const Mask = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  padding-left: 50px;
  flex-direction: column;
  justify-content: center;
`;
const InputCover = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
const Form = styled.form`
  position: absolute;
  height: 100vh;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  z-index: 3;
  justify-content: center;
  /* background-color: #ada57b; */
  background-color: ${colors.primary};
  padding: 0 20px;
`;
const Input = styled.input`
  font-size: 15px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 320px;
  align-self: center;
  padding: 10px 7px;
  /* margin-top: 20px; */
  border: none;
  outline: none;
  background: ${colors.secondaryAccent};
  color: rgba(255, 255, 255);
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  font-weight: 500;
`;
const HR = styled.hr`
  height: 1px;
  border: none;
  background: gray;
  margin: 10px 0;
  width: 85%;
  align-self: center;
`;
const ButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;
const Text = styled.span`
  font-size: 13px;
  margin-top: 20px;
  align-self: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 40px;
  color: ${colors.primary};
`;
const SubHeading = styled.h2`
  font-weight: 500;
  font-size: 30px;
  color: ${colors.primary};
`;
const HomeButton = styled.a`
  align-self: center;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  margin-top: 5px;
  font-size: 15px;
  color: ${colors.primaryAccent};
  font-weight: 500;
  text-decoration: none;
  margin-left: 10px;
`;
export {
  Container,
  Input,
  InputCover,
  Label,
  Button,
  Form,
  HR,
  ButtonCover,
  Mask,
  Text,
  Img,
  Heading,
  SubHeading,
  HomeButton,
};
