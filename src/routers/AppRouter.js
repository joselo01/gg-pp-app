import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { OnboardRoutes } from "./OnboardRoutes";
import { startChecking } from "../redux/actions/auth";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

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
            isAuthenticated={!!uid}
          />
           <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={!!uid}
          />
        </Switch>
      </div>
    </Router>
  );
};
