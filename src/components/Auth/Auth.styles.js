import styled from "styled-components";

const Container = styled.div``;
const InputCover = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: center;
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
  background: #fff;
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

export { Container, Input, InputCover, Label, Button, Form, HR, ButtonCover };
