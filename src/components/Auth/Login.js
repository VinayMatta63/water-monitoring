import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userSelector } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import {
  Container,
  Input,
  InputCover,
  Label,
  Button,
  Form,
  HR,
  ButtonCover,
} from "./Auth.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(userSelector);
  const history = useHistory();
  if (user) {
    history.push("/dashboard");
  }
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => alert(err.message));
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <InputCover>
          <Label for="email">Email</Label>
          <Input name="email" id="email" type="email" placeholder="Email" />
        </InputCover>
        <InputCover>
          <Label for="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
        </InputCover>
        <ButtonCover>
          <Button type="submit">Login</Button>
          <HR />
          <Button type="button" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </ButtonCover>
      </Form>
    </Container>
  );
};

export default Login;
