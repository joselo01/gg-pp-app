import React from 'react'
import { FormUserProfile } from '../components/organisms/FormUserProfile'
import { TableSecondaryAccounts } from '../components/organisms/TableSecondaryAccounts'

export const SecondaryAccounts = () => {

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
                            data-bs-target="#deleteModal"
                            type="button"
                            className="btn btn-danger block subtitle"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                            type="button"
                            className="btn btn-warning block subtitle"
                        >
                            Modificar
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="d-grid gap-2">
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#createModal"
                            type="button"
                            className="btn btn-primary block subtitle"
                        >
                            Crear
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="deleteModal"
                aria-labelledby="deleteModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <span>¿Esta seguro de eliminar las cuentas seleccionadas?</span>
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
            <div
                className="modal fade"
                id="editModal"
                aria-labelledby="editModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <FormUserProfile/>
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
            <div
                className="modal fade"
                id="createModal"
                aria-labelledby="createModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <FormUserProfile/>
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
