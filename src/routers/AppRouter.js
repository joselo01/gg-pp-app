import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebaseConfig";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreatePassword } from "../pages/CreatePassword";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { VerificacionProveedor } from "../pages/VerificacionProveedor";
import { RegisterInfo } from "../pages/RegisterInfo";
import { Register } from "../pages/Register";
import { Proveedores } from "../pages/Proveedores.jsx";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { Footer } from "../components/molecules/Footer";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

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
        <h5 className="mt-2">Eseper por favor...</h5>
      </div>
    );
  }

  return (
    <Router>
      <>
        <div className="bg-image">
          <div className="main-login">
            <div className="child-login">
              <div className="fluid-container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PublicRoute
                    exact
                    path="/login"
                    component={Login}
                    isAuthenticated={isLoggedIn}
                  />
                  <PrivateRoute
                    exact
                    path="/proveedor"
                    component={Proveedores}
                    isAuthenticated={isLoggedIn}
                  />
                  <Route
                    extac
                    path="/supplier_verification"
                    component={VerificacionProveedor}
                  />
                  <Route
                    extac
                    path="/create_password"
                    component={CreatePassword}
                  />
                  <Route exact path="/register-info" component={RegisterInfo} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    </Router>
  );
};
