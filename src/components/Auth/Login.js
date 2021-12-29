import { child, get, ref, set } from "@firebase/database";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  setUser,
  setUserDetails,
  userSelector,
} from "../../features/userSlice";
import { auth, db, provider } from "../../firebase";
import {
  Container,
  Input,
  InputCover,
  Label,
  Button,
  Form,
  HR,
  ButtonCover,
  Mask,
  Img,
  Text,
  Heading,
  SubHeading,
  HomeButton,
} from "./Auth.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  if (user) {
    history.push("/dashboard");
  }
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setUser(res.user.uid));
        const dbRef = ref(db);
        get(child(dbRef, `/users/${res.user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              dispatch(setUserDetails(snapshot.val()));
            } else {
              dispatch(setUserDetails(null));
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => alert(err.message));
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(setUser(res.user.uid));
        set(ref(db, "users/" + res.user.uid), {
          name: res.user.displayName,
          username: "",
          email: res.user.email,
          city: "India",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Img src="/logo.png" alt="Logo" />

        <InputCover>
          <Label for="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputCover>
        <InputCover>
          <Label for="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputCover>
        <ButtonCover>
          <Button type="submit">Login</Button>
          <HR />
          <Button type="button" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </ButtonCover>
        <Text>
          Not registered yet?
          <HomeButton onClick={() => history.push("/auth/register")}>
            Click here
          </HomeButton>
        </Text>
        <HomeButton onClick={() => history.push("/")}>Home</HomeButton>
      </Form>
      <Mask>
        <Heading>Water Quality Monitoring</Heading>
        <SubHeading>A Tool to monitor drinking water quality.</SubHeading>
      </Mask>
    </Container>
  );
};

export default Login;
