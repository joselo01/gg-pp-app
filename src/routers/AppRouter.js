import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebaseConfig";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { OnboardRoutes } from "./OnboardRoutes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div className="d-flex justify-content-center loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="mt-2">Espere por favor...</h5>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/home"
            component={OnboardRoutes}
            isAuthenticated={isLoggedIn} />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={isLoggedIn} />
        </Switch>
      </div>
    </Router>
  );
};
