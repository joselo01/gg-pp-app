import React, { useState } from 'react'
import { FormCompany } from '../components/organisms/FormCompany';
import { FormDataAdmin } from '../components/organisms/FormDataAdmin';
import { FormUserProfile } from '../components/organisms/FormUserProfile';

export const CompanyProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleConfirmData = () => {
    }
    const handleInputChange = () => {
        // setIsEditing(!isEditing);
    }
    const handleEditing = () => {
        setIsEditing(!isEditing);
    }
    return (

        <>
            <FormUserProfile />
            <div className="row justify-content-md-center mt-2">
                {
                    isEditing
                        ? <>
                            <div className="col-12 col-md-3 mb-2">
                                <div className="d-grid gap-2">
                                    <button
                                        onClick={handleEditing}
                                        type="button"
                                        className="btn btn-secondary block subtitle"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="d-grid gap-2">
                                    <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#sendModal"
                                        type="button"
                                        className="btn btn-primary block subtitle"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </>
                        : <div className="col-12 col-md-3 mb-2">
                            <div className="d-grid gap-2">
                                <button
                                    onClick={handleEditing}
                                    type="button"
                                    className={`btn btn-primary block subtitle`}
                                >
                                    Modificar
                                </button>
                            </div>
                        </div>
                }
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
                            <span>¿Esta seguro de enviar esta información?</span>
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
