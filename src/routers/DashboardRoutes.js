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
  console.log(item, "valor item");

  <Route exact path="/" render={() => (
    item === 1 ? (
      <Redirect to="/proveedor"/>
    ) : item === 2 (
        <Redirect to="/comprador"/>
    )
  )}/>

  return (
    <Router>
      <div className="bg-image">
        <div className="row overflow-auto">
          <Navbar />
          {/* ${isLoggedIn ? 'card' : ''}` */}
          <div className="col d-flex flex-column h-sm-100 card">
            <main className="row overflow-auto">
              <div className="col pt-0">
                <Switch>
                  <Route path="/comprador" component={Compradores} />

                  <Route path="/proveedor" component={Proveedores} />

                  <Route
                    exact
                    path="/provider-preview"
                    component={ProviderPreview}
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
                  <Redirect to="/comprador" />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};
