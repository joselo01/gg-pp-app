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
import { SecondaryAccounts } from "../pages/SecondaryAccounts";
import { ReasignAccounts } from "../pages/ReasignAccounts";
import { CompanyProfile } from "../pages/CompanyProfile";
import { ChangeDataRequests } from "../pages/ChangeDataRequests";

export const DashboardRoutes = () => {
  let idRol = localStorage.getItem("id_rol") ?? '';
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
                              component={ProviderRequests} />
                            <Route
                              exact
                              path="/provider-preview"
                              component={ProviderPreview} />
                            <Route
                              exact
                              path="/providers"
                              component={Proveedores} />
                            <Route
                              exact
                              path="/admin-profile"
                              component={AdminProfile} />
                            <Route
                              exact
                              path="/secondary-accounts"
                              component={SecondaryAccounts} />
                            <Route
                              exact
                              path="/reasign-accounts"
                              component={ReasignAccounts} />
                            <Route
                              exact
                              path="/company-profile"
                              component={CompanyProfile} />
                            <Route
                              exact
                              path="/change-requests"
                              component={ChangeDataRequests} />
                            <Route
                              exact
                              path="/supplier_verification"
                              component={ValidateProvider} />
                            <Route
                              exact
                              path="/create_password"
                              component={CreatePassword} />
                            {/* <Redirect to="/comprador" /> */}
                            {idRol === "1" || idRol === '' ? (
                              <Redirect
                                to="/providers" />
                            ) : (
                              <Redirect
                                to="/provider-requests" />
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
