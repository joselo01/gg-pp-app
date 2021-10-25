import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Logo } from '../components/atoms/Logo'

export const InitPage = ({ handle }) => {

    const history = useHistory();


    function goToPage(page) {
        history.push(`/${page}`);
    }

    useEffect(() => {
        handle(false);
        return () => handle(true);
    }, [handle]);
    return (
        <>
            <div style={{ height: 110, padding: 20, backgroundColor: '#04003f' }}>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Logo />
                    </div>
                   
                </div>
            </div>
            <div style={{ height: "calc(100vh - 180px)"}}>
                <div className="m-2 p-2 card">
                    <h2>Bienvenido al portal de proveedores del Grupo Gloria</h2>
                    <p>Selecciona la casilla para iniciar con la solicitud</p>
                    <div className="row" style={{ justifyContent: "center", textAlign:"center" }}>
                        <div className="col-md-12 col-lg-2 pb-2 mr-1">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                                onClick={() => goToPage('provider-requests')}
                            >
                                Mi bandeja
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2 mx-1">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Comunicaciones
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2 mx-1">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Logística
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2 mx-1">
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                style={{ width: "100%", height: "60px", fontSize: 14 }}
                            >
                                Finanzas
                            </button>
                        </div>
                        <div className="col-md-12 col-lg-2 pb-2 mx-1">
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
        </>


    )
}
