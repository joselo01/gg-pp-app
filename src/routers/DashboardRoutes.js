import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/molecules/Navbar';
import { Compradores } from '../pages/Compradores';
import { CreatePassword } from '../pages/CreatePassword';
import { Proveedores } from '../pages/Proveedores';
import { ProviderPreview } from '../pages/ProviderPreview';
import { VerificacionProveedor } from '../pages/VerificacionProveedor';

export const DashboardRoutes = () => {
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
                                    <Redirect to="/comprador" />
                                </Switch>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </Router>
    )
}
