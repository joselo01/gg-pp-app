import React from 'react'
import { useHistory } from 'react-router-dom';
import { FormRegistro } from '../components/organisms/FormRegistro'

export const ProviderPreview = () => {
    const history = useHistory();

    function handleConfirmData() {
        history.push("/comprador");
    }

    const handleInputChange = () =>{

    }

    return (
        <div>
            <FormRegistro />
            <div className="row justify-content-md-center pt-4">
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            type="button"
                            className="btn btn-danger block subtitle"
                        >
                            Rechazar
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            type="button"
                            className="btn btn-warning block subtitle"
                        >
                            Observar
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            type="button"
                            className="btn btn-primary block subtitle"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            type="button"
                            className="btn btn-secondary block subtitle"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text in-modal">Dirección de correo:</span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="email"
                                        // name="idFiscal"
                                        autoComplete="off"
                                        value="datamaster@gloria.com"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text in-modal">CC:</span>
                                    </div>
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
        </div>
    )
}
