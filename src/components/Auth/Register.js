import React, { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

import {
  Container,
  Input,
  InputCover,
  Label,
  Button,
  Form,
  ButtonCover,
  HR,
  Text,
  Mask,
  Heading,
  SubHeading,
  HomeButton,
} from "./Auth.styles";
import { auth, db, provider } from "../../firebase";
import { ref, set, get, child } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setUserDetails,
  userSelector,
} from "../../features/userSlice";
import { useHistory } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const history = useHistory();

  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  if (user) {
    history.push("/dashboard");
  }
  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirm)
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const userId = res.user.uid;
          set(ref(db, "users/" + userId), {
            name: name,
            username: telegram,
            email: email,
            city: city,
          });
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
    else alert("Password and Confirm Password should match");
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
      <Form onSubmit={handleRegister}>
        <InputCover>
          <Label for="name">Full Name</Label>
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </InputCover>
        <InputCover>
          <Label for="city">City</Label>
          <Input
            name="city"
            id="city"
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </InputCover>
        <InputCover>
          <Label for="telegram">Telegram</Label>
          <Input
            name="telegram"
            id="telegram"
            placeholder="Telegram Username"
            onChange={(e) => setTelegram(e.target.value)}
          />
        </InputCover>
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
        <InputCover>
          <Label for="confirm-password">Confirm Password</Label>
          <Input
            name="confirm-password"
            id="confirm-password"
            type="confirm-password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
          />
        </InputCover>
        <ButtonCover>
          <Button type="submit">Register</Button>
          <HR />
          <Button type="button" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </ButtonCover>
        <Text>
          Already registered?
          <HomeButton href="/auth/login">Click here</HomeButton>
        </Text>
        <HomeButton href="/">Home</HomeButton>
      </Form>
      <Mask>
        <Heading>Water Quality Monitoring</Heading>
        <SubHeading>A Tool to monitor drinking water quality.</SubHeading>
      </Mask>
    </Container>
  );
};

export default Register;
