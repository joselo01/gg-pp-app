import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreatePassword } from "./pages/CreatePassword.jsx";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { VerificacionProveedor } from "./pages/VerificacionProveedor";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/login" component={ Login } />
            <Route extac path="/supplier_verification" component={ VerificacionProveedor } />
            <Route extac path="/create_password" component={ CreatePassword } />
        </Switch>
      </>
    </Router>
  );
};
