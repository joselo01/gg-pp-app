import React from "react";
import { useForm } from "../../hooks/useForm";
export const FormPreRegistro = ({ handleValidated }) => {
    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1",
        rubro: "",
        empresa: "",
        comprador:"",
        comentario: ""
    });

    const { idFiscal, pais, rubro, empresa, comprador, comentario } = formValues;

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
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Rubro</span>
                    </div>
                    <select
                        className="form-select" multiple size="6" aria-label="size 6 multiple select example"
                        name="rubro"
                        value={rubro}
                        onChange={handleInputChange}

                    >
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="1">A</option>
                        <option value="2">B</option>

                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Empresa a postular</span>
                    </div>
                    <select
                        className="form-select"
                        name="empresa"
                        value={empresa}
                        onChange={handleInputChange}

                    >
                        <option value="1">A</option>
                        <option value="2">B</option>

                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Comprador responsable</span>
                    </div>
                    <select
                        className="form-select"
                        name="comprador"
                        value={comprador}
                        onChange={handleInputChange}

                    >
                        <option value="1">A</option>
                        <option value="2">B</option>

                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Contacto o comentario</span>
                    </div>
                    <textarea 
                    className="form-control" 
                    name="comentario"
                    value={comentario}
                    onChange={handleInputChange}
                    >

                </textarea>
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
