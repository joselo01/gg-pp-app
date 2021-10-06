import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { ProviderRequests } from "../pages/ProviderRequests";
import { CreatePassword } from "../pages/CreatePassword";
import { Proveedores } from "../pages/Providers";
import { ProviderPreview } from "../pages/ProviderPreview";
import { ValidateProvider } from "../pages/ValidateProvider";
import { AdminProfile } from "../pages/AdminProfile";
import { useSelector } from "react-redux";

export const DashboardRoutes = () => {

  const { role } = useSelector((state) => state.auth);
  return (
    <Router>
      <div className="bg-image">
        <div className="main-login">
          <div className="child-login">
            <div className="fluid-container">
              <div className="container-fluid overflow-hidden">
                <div className="row overflow-auto">
                  <div className={`col d-flex flex-column h-sm-100`}>
                    <main className="row overflow-auto">
                      <Navbar />
                      <div className="col">
                        <div className="col d-flex flex-column pb-3 card">
                          <Switch>
                            <Route
                              exact
                              path="/provider-requests"
                              component={ProviderRequests}
                            />
                            <Route
                              exact
                              path="/provider-preview"
                              component={ProviderPreview}
                            />
                            <Route
                              exact
                              path="/providers"
                              component={Proveedores}
                            />
                            <Route
                              extac
                              path="/admin-profile"
                              component={AdminProfile}
                            />
                            <Route
                              extac
                              path="/supplier_verification"
                              component={ValidateProvider}
                            />
                            <Route
                              extac
                              path="/create_password"
                              component={CreatePassword}
                            />
                            {role === "ADMIN_ROLE" && (
                              <Redirect to="/comprador" />
                            )}
                            {role === "PROVE_ROLE" && (
                              <Redirect to="/providers" />
                            )}
                            {role === "COMP_ROLE" && (
                              <Redirect to="/provider-requests" />
                            )}
                          </Switch>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
