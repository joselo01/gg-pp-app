import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { TabItem } from "../atoms/TabItem";
export const FormRegistro = ({ handleValidated }) => {

    const tabs = [
        {
            name: 'Datos de Empresa'
        },
        {
            name: 'Datos de Contacto'
        },
        {
            name: 'Datos Financieros'
        },
        {
            name: 'Otros'
        }
    ];

    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1",
        tipo: "1",
    });


    const { idFiscal, pais, tipo } = formValues;

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

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
                        <span className="input-group-text">Tipo</span>
                    </div>
                    <select
                        className="form-select"
                        name="tipo"
                        value={tipo}
                        onChange={handleInputChange}

                    >
                        <option value="1">1</option>
                        <option value="2">2</option>

                    </select>
                </div>

                <ul className="nav nav-tabs mb-3">
                    {tabs.map((tab, index) => (
                        <TabItem

                            key={tab.name}
                            selectedTab={tabIndex}
                            index={index}
                            item={tab}
                            handleTabChange={handleTabChange}
                        />
                    ))}
                </ul>

                {
                    {
                        0: <div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Razon Social</span>
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
                                    <span className="input-group-text">Nombre Comercial</span>
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
                                    <span className="input-group-text">Tratamiento</span>
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
                                    <span className="input-group-text">RUC</span>
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
                                    <span className="input-group-text">Departamento</span>
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
                                    <span className="input-group-text">Provincia</span>
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
                                    <span className="input-group-text">Distrito</span>
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
                                    <span className="input-group-text">Urbanización-Barrio</span>
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
                                    <span className="input-group-text">Dirección Calle</span>
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
                                    <span className="input-group-text">Número</span>
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
                                    <span className="input-group-text">Código Postal</span>
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
                        </div>,
                        1: <div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Teléfono Fijo 1</span>
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
                                    <span className="input-group-text">Teléfono Fijo 2</span>
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
                                    <span className="input-group-text">Teléfono Móvil 1</span>
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
                                    <span className="input-group-text">Teléfono Móvil 2</span>
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
                                    <span className="input-group-text">Fax</span>
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
                                    <span className="input-group-text">Email Comercial del proveedor</span>
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
                                    <span className="input-group-text">Email del encargado de cobranzas</span>
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

                        </div>,
                        2: <div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Nombre del Banco 1</span>
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
                                    <span className="input-group-text">Número de Cuenta Bancaria 1</span>
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
                                    <span className="input-group-text">Tipo de Cuenta Bancaria 1</span>
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
                                    <span className="input-group-text">Moneda</span>
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
                                    <span className="input-group-text">Código Interbancario (CCI)</span>
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
                                    <span className="input-group-text">Titular de cuenta</span>
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
                                    <span className="input-group-text">Nombre del Banco 2</span>
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
                                    <span className="input-group-text">Número de Cuenta Bancaria 2</span>
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
                                    <span className="input-group-text">Tipo de Cuenta Bancaria 2</span>
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
                                    <span className="input-group-text">Moneda</span>
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
                                    <span className="input-group-text">Código Interbancario (CCI)</span>
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
                                    <span className="input-group-text">Titular de cuenta</span>
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
                                    <span className="input-group-text">Detracciones (SPOT)</span>
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
                                    <span className="input-group-text">Numero de Cuenta Bancaria Detrac.</span>
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
                                    <span className="input-group-text">Nombre del Banco Detraccion</span>
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
                        </div>,
                        3: <div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Condición de Pago</span>
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
                                    <span className="input-group-text">Moneda de Pedido</span>
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
                                    <span className="input-group-text">Nombre del Vendedor 1</span>
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
                                    <span className="input-group-text">Nombre del Vendedor 21</span>
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
                        </div>
                    }[tabIndex]
                }

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email Usuario</span>
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
                        <span className="input-group-text">Confirmar Email Usuario</span>
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
                        <span className="input-group-text">Datos del Registrado</span>
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
                        <span className="input-group-text">Titulo</span>
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
                        <span className="input-group-text">Nombres</span>
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
                        <span className="input-group-text">Apellidos</span>
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
                        <span className="input-group-text">Doc. Identidad</span>
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
                    <input
                        className="form-control"                        
                        type="file"
                        name="idFiscal"
                        autoComplete="off"
                        value={idFiscal}
                        onChange={handleInputChange}
                    />
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
