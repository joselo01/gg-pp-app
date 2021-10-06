import React from "react";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { Logo } from "../components/atoms/Logo";
import { TableProviders } from "../components/organisms/TableProveedores";
// import { startLogout } from "../redux/actions/auth";

export const ProviderRequests = () => {
    const history = useHistory();

    const handleInputChange = () => {

    }

    function handleConfirmData() {
        history.push("/provider-requests");
    }

    return (
        <>
            <TableProviders />
            <div className="row justify-content-md-center mt-2">
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#sendModal"
                            type="button"
                            className="btn btn-secondary block subtitle"
                        >
                            Asignar
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="sendModal"
                aria-labelledby="sendModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="form-group">
                                <div className="form-group col-12 mb-3">
                                    <label>Dirección de correo:</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        // name="idFiscal"
                                        autoComplete="off"
                                        value="datamaster@gloria.com"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-12 mb-3">
                                    <label>CC:</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        // name="idFiscal"
                                        autoComplete="off"
                                        value="jefatura@gloria.com"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <span>Antes de enviar, por favor valide que la información consignada es correcta.</span>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleConfirmData}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
