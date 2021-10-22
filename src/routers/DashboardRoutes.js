import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import { MainMenu } from "../components/molecules/MainMenu";
import { NavToogle } from "../components/atoms/NavToogle";

export const DashboardRoutes = () => {
  const [navFlag, setNavFlag] = React.useState(true);
  const { role } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="bg-image">
        <div className="main-login dashboard">
          <div className="child-login">
            <div className="fluid-container">
            <Route
                  exact
                  path="/init"
                  render={(props) => {
                    return <InitPage {...props} handle={setNavFlag} />;
                  }}
                />
              <div className="d-flex" id="wrapper">
                <MainMenu navFlag={navFlag} />
                
                {navFlag && (
                  <>
                    <div id="page-content-wrapper">
                      <NavToogle navFlag={navFlag} />
                      <div className="container-fluid">
                        <div className="col">
                          <div className="col d-flex flex-column p-3 card">
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
                              {role === "ADMIN_ROLE" && <Redirect to="/init" />}
                              {role === "PROVE_ROLE" && <Redirect to="/init" />}
                              {role === "COMP_ROLE" && (
                                <Redirect to="/comprador" />
                              )}
                            </Switch>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
