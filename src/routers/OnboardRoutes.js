import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../components/molecules/Footer';
import { CreatePassword } from '../pages/CreatePassword';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { RegisterInfo } from '../pages/RegisterInfo';
import { ValidateProvider } from '../pages/ValidateProvider';

export const OnboardRoutes = () => {
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
                                            <div className="col">
                                                <Switch>
                                                    <Route
                                                        exact
                                                        path="/home"
                                                        component={Home} />
                                                    <Route
                                                        exact
                                                        path="/login"
                                                        component={Login}
                                                    />
                                                    <Route
                                                        exact
                                                        path="/register-info"
                                                        component={RegisterInfo} />
                                                    <Route
                                                        exact
                                                        path="/register"
                                                        component={Register} />
                                                    <Route
                                                        exact
                                                        path="/supplier_verification"
                                                        component={ValidateProvider} />
                                                    <Route
                                                        exact
                                                        path="/create_password"
                                                        component={CreatePassword} />
                                                </Switch>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>

    )
}
