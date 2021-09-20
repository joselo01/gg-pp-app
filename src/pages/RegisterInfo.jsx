import React from 'react'
import { Accordion } from '../components/molecules/Accordion'
import { useHistory } from "react-router-dom";

export const RegisterInfo = () => {
    const history = useHistory();

    function handleRegister() {
        history.push("/register");
    };

    

    return (
        <>
            <div className="container content-box-register-info">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="welcome">Gloria da la bienvenida</h1>
                    </div>
                    <hr />
                    <div className="col-12">
                        <Accordion />
                    </div>
                    <hr />
                    <div className="d-grid col-6 ">
                        <button
                            onClick={handleRegister}
                            type="button"
                            className="btn bg-button block subtitle">
                            Completar Formulario
                        </button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}
