import React from 'react'
import { useHistory } from 'react-router-dom';
import { Logo } from '../components/atoms/Logo'

export const InitPage = () => {

    const history = useHistory();

    function goToPage(page) {
        console.log('REGISTRANDO');
        history.push(`/${page}`);
    }
    return (
        <div className="main-login">
            <div style={{ height: 180, padding: 20, backgroundColor: '#04003f' }}>
                <Logo />
            </div>
            <div className="container" style={{ height: "calc(100vh - 180px)", width: "100vh", alignItems: "center", display: "flex", justifyContent: "center" }}>
                <div className="row m-2 p-2 card">
                    <div className="col-12">
                        <h2>Bienvenido al portal de proveedores del Grupo Gloria</h2>
                        <p>Selecciona la casilla para iniciar con la solicitud</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-2 pb-2">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                                onClick={() => goToPage('provider-requests')}
                            >
                                Mi bandeja
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Comunicaciones
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Logística
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Finanzas
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Reportes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
