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
import { useSelector } from "react-redux";
import { InitPage } from "../pages/InitPage";

export const DashboardRoutes = () => {
  const [navFlag, setNavFlag] = React.useState(true);

  const { role } = useSelector((state) => state.auth);
  console.log(role);
  return (
    <Router>
      <div className="bg-image">
        <div className="main-login dashboard">
          <div className="child-login">
            <div className="fluid-container">
              <Switch>
                <>
                  <div className="container-fluid overflow-hidden">
                    <div className="row overflow-auto">
                      <div className={`col d-flex flex-column`}>
                        <main className="row overflow-auto">
                          <Navbar navFlag={navFlag} />

                          <Route
                            exact
                            path="/init"
                            render={(props) => {
                              return (
                                <InitPage {...props} handle={setNavFlag} />
                              );
                            }}
                          />
                          {navFlag && (
                            <>
                              <div className="col-sm-9 col-xs-12">
                                <div className="col d-flex flex-column p-3 card">
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
                                    exact
                                    path="/admin-profile"
                                    component={AdminProfile}
                                  />
                                  <Route
                                    exact
                                    path="/secondary-accounts"
                                    component={SecondaryAccounts}
                                  />
                                  <Route
                                    exact
                                    path="/reasign-accounts"
                                    component={ReasignAccounts}
                                  />
                                  <Route
                                    exact
                                    path="/company-profile"
                                    component={CompanyProfile}
                                  />
                                  <Route
                                    exact
                                    path="/change-requests"
                                    component={ChangeDataRequests}
                                  />
                                  <Route
                                    exact
                                    path="/supplier_verification"
                                    component={ValidateProvider}
                                  />
                                  <Route
                                    exact
                                    path="/create_password"
                                    component={CreatePassword}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </main>
                      </div>
                    </div>
                  </div>
                  {role === "ADMIN_ROLE" && <Redirect to="/init" />}
                  {role === "PROVE_ROLE" && <Redirect to="/init" />}
                  {role === "COMP_ROLE" && <Redirect to="/init" />}
                </>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
