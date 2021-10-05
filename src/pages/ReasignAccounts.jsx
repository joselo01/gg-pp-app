import React from 'react'
import { TableSecondaryAccounts } from '../components/organisms/TableSecondaryAccounts'

export const ReasignAccounts = () => {
    const handleInputChange = () => {

    }

    function handleConfirmData() {
        // history.push("/provider-requests");
    }
    return (
        <>
            <TableSecondaryAccounts />
            <div className="row justify-content-md-center mt-2">
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#reasignModal"
                            type="button"
                            className="btn btn-primary block subtitle"
                        >
                            Reasignar
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="reasignModal"
                aria-labelledby="reasignModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="form-group">
                                <span>¿Esta seguro de reasignar al usuario NOMBREUSER como administrador? Este usuario tendrá permisos de administrador.
                                </span>
                                <br />
                                <span>Escoja una opción para su usuario actual.
                                </span>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                                    <label className="btn btn-outline-primary">Eliminar</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                    <label className="btn btn-outline-primary">Reasignar Rol</label>

                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Rol:</span>
                                    </div>
                                    <select
                                        className="form-select"
                                        name="pais"
                                        onChange={handleInputChange}
                                    >
                                        <option value="1">Rol 1</option>
                                        <option value="2">Rol 2</option>
                                    </select>
                                </div>
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
    )
}
