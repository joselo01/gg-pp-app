import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { TabItem } from '../components/atoms/TabItem';
import { FormRegistro } from '../components/organisms/FormRegistro'
import { TableHistoric } from '../components/organisms/TableHistoric';

export const ProviderPreview = () => {
    const history = useHistory();

    function handleConfirmData() {
        history.push("/provider-requests");
    }

    const isLogged = localStorage.getItem("isLogged") === "true";

    const tabList = [
        {
            name: "Visión general",
        },
        {
            name: "Visión Histórica",
        }
    ];

    const [viewMode, setViewMode] = useState(0);


    const [isEditing, setIsEditing] = useState(false);


    const handleInputChange = () => {
        // setIsEditing(!isEditing);
    }
    const handleEditing = () => {
        setIsEditing(!isEditing);
    }

    const handleTabChange = (index) => {
        setViewMode(index);
    };

    return (
        <>
        {
              isLogged && <h3>Solicitudes de Creación</h3>
            }
            <ul className="nav nav-tabs nav-justified">
                {tabList.map((tab, index) => (
                    <TabItem
                        key={tab.name}
                        selectedTab={viewMode}
                        index={index}
                        item={tab}
                        handleTabChange={handleTabChange}
                    />
                ))}
            </ul>
            {
                viewMode === 0
                    ? <div>
                        <FormRegistro />
                        <div className="row justify-content-md-center mt-2">
                            <div className="col-12 col-md-3 mb-2">
                                <div className="d-grid gap-2">
                                    <button
                                        onClick={handleEditing}
                                        type="button"
                                        className={`btn ${isEditing ? 'btn-success' : 'btn-primary'} block subtitle`}
                                    >
                                        {
                                            !isEditing ? 'Modificar' : 'Guardar'
                                        }
                                    </button>
                                </div>
                            </div>
                            {
                                !isEditing
                                    ? <>
                                        <div className="col-12 col-md-3 mb-2">
                                            <div className="d-grid gap-2">
                                                <button
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#observModal"
                                                    type="button"
                                                    className="btn btn-warning block subtitle"
                                                >
                                                    Observar
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 mb-2">
                                            <div className="d-grid gap-2">
                                                <button
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#rejectModal"
                                                    type="button"
                                                    className="btn btn-danger block subtitle"
                                                >
                                                    Rechazar
                                                </button>
                                            </div>
                                        </div>
                                        {/* <div className="col-12 col-md-3">
                                            <div className="d-grid gap-2">
                                                <button
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#sendModal"
                                                    type="button"
                                                    className="btn btn-secondary block subtitle"
                                                >
                                                    Enviar
                                                </button>
                                            </div>
                                        </div> */}
                                        <div className="col-12 col-md-3">
                                            <div className="d-grid gap-2">
                                                <button
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#approveModal"
                                                    type="button"
                                                    className="btn btn-secondary block subtitle"
                                                >
                                                    Aprobar
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                    : <></>
                            }
                        </div>
                        <div
                            className="modal fade"
                            id="rejectModal"
                            aria-labelledby="rejectModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <form className="form-group">
                                            <span>¿Está seguro de rechazar esta solicitud?.</span>
                                            <div className=" mb-3">
                                                {/* <div className="input-group-prepend">
                                        <span className="input-group-text in-modal">Motivo:</span>
                                    </div> */}
                                                <textarea
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Ingrese un motivo"
                                                    // name="idFiscal"
                                                    autoComplete="off"
                                                    value="motivo de rechazo"
                                                    onChange={handleInputChange}
                                                />
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
                        <div
                            className="modal fade"
                            id="observModal"
                            aria-labelledby="observModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <form className="form-group">
                                            <span>¿Está seguro de observar esta solicitud?.</span>
                                            <div className=" mb-3">
                                                {/* <div className="input-group-prepend">
                                        <span className="input-group-text in-modal">Motivo:</span>
                                    </div> */}
                                                <textarea
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Ingrese un motivo"
                                                    // name="idFiscal"
                                                    autoComplete="off"
                                                    value="motivo de observación"
                                                    onChange={handleInputChange}
                                                />
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
                        <div
                            className="modal fade"
                            id="sendModal"
                            aria-labelledby="sendModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body row">
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
                        <div
                            className="modal fade"
                            id="approveModal"
                            aria-labelledby="approveModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <span>Solicitud aprobada con éxito.</span>
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
                    : <TableHistoric />
            }</>
    )
}
