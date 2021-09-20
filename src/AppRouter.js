import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterInfo } from "./pages/RegisterInfo";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register-info" component={ RegisterInfo } />
            <Route exact path="/register" component={ Register } />

        </Switch>
      </>
    </Router>
  );
};
