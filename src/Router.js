import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Login from "./components/Auth/Login";
import Team from "./components/Team";
import About from "./components/About";
import Register from "./components/Auth/Register";
import { useDispatch } from "react-redux";
import { removeUser, setUser, setUserDetails } from "./features/userSlice";
import { child, get, ref } from "firebase/database";
import { db } from "./firebase";

const Router = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.uid));
      const dbRef = ref(db);
      get(child(dbRef, `/users/${user.uid}`))
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
    } else {
      dispatch(removeUser());
    }
  });
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
