import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
