import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { Compradores } from "../pages/Compradores";
import { CreatePassword } from "../pages/CreatePassword";
import { Proveedores } from "../pages/Proveedores";
import { ProviderPreview } from "../pages/ProviderPreview";
import { VerificacionProveedor } from "../pages/VerificacionProveedor";

export const DashboardRoutes = () => {
  let item = localStorage.getItem("item_id");
  return (
    <Router>
      <div className="bg-image">
        <div className="child-login">
          <div className="card">
            <div className="container-fluid overflow-hidden">
              <div className="row overflow-auto">
                <div className={`col d-flex flex-column h-sm-100`}>
                  <main className="row overflow-auto">
                    <Navbar />

                    <div className="col">
                      {/* ${isLoggedIn ? 'card' : ''}` */}
                      <div className="col d-flex flex-column pb-3 card">
                        <Switch>
                          <Route
                            exact
                            path="/comprador"
                            component={Compradores}
                          />
                          <Route
                            exact
                            path="/provider-preview"
                            component={ProviderPreview}
                          />
                          <Route
                            exact
                            path="/proveedor"
                            component={Proveedores}
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
                          {/* <Redirect to="/comprador" /> */}
                          {item === "1" ? (
                            <Redirect to="/proveedor" />
                          ) : (
                            <Redirect to="/comprador" />
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
    </Router>
  );
};
