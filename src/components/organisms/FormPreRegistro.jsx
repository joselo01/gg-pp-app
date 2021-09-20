import React from "react";
import { useForm } from "../../hooks/useForm";
export const FormPreRegistro = ({ handleValidated }) => {
    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1"
    });

    const { idFiscal, pais } = formValues;

    return (
        <>
            <form className="form-group">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">N° Id. Fiscal</span>
                    </div>
                    <input
                        className="form-control"
                        type="number"
                        name="idFiscal"
                        autoComplete="off"
                        value={idFiscal}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">País</span>
                    </div>
                    <select
                        className="form-select"
                        name="pais"
                        value={pais}
                        onChange={handleInputChange}

                    >
                        <option value="1">Perú</option>
                        <option value="2">Chile</option>

                    </select>
                </div>
                <div className="d-grid gap-2">
                    <button
                        type="button"
                        className="btn bg-button block subtitle"
                        onClick={handleValidated}
                    >
                        Validar
                    </button>
                </div>
            </form>
        </>
    );
};
