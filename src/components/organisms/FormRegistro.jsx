import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { StepItem } from "../atoms/StepItem";
import { TabItem } from "../atoms/TabItem";

export const FormRegistro = ({ handleValidated }) => {

    const history = useHistory();

    function handleVerification() {
        history.push("/supplier_verification");
    }

    const steps = [
        {
            name: "General",
            icon: "https://peopleshub.org/wp-content/uploads/2018/04/person-icon-white.png"
        },
        {
            name: "Especifico",
            icon: "https://flaticons.net/icon.php?slug_category=banking&slug_icon=money-bag"
        },
        {
            name: "Cuenta",
            icon: "https://www.9001simplified.com/images/about/icon-information.png"
        },
    ];

    const tabs = [
        {
            name: "Datos de Empresa",
        },
        {
            name: "Datos de Contacto",
        },
        {
            name: "Datos Financieros",
        },
        {
            name: "Otros",
        },
    ];

    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1",
        tipo: "1",
    });

    const { idFiscal, pais, tipo } = formValues;

    const [stepIndex, setStepIndex] = useState(0);

    const [tabIndex, setTabIndex] = useState(0);

    const handleStepChange = (index) => {
        setStepIndex(index);
    };

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    return (
        <>


            <div className="card card-timeline px-2 border-none">
                <ul className="bs4-order-tracking">
                    {steps.map((step, index) => (
                        <StepItem
                            key={step.name}
                            selectedTab={stepIndex}
                            index={index}
                            item={step}
                            handleStepChange={handleStepChange}
                        />
                    ))}
                </ul>
                {/* <ul className="bs4-order-tracking">
                    <li className="step active">
                        <div>
                            <img height="20" src="https://peopleshub.org/wp-content/uploads/2018/04/person-icon-white.png" alt="" />
                            </div> Order Placed
                    </li>
                    <li className="step active">
                        <div><img height="20" src="https://flaticons.net/icon.php?slug_category=banking&slug_icon=money-bag" alt="" /></div> Order Placed
                    </li>
                    <li className="step">
                        <div><img height="20" src="https://www.9001simplified.com/images/about/icon-information.png" alt="" /></div> Order Placed
                    </li>
                </ul> */}
            </div>
            <form className="form-group">
                {
                    {
                        0: (
                            <>
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
                                </div></>
                        ),
                        1: (
                            <>
                                <ul className="nav nav-tabs nav-justified">
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
                                        0: (
                                            <div className="card mb-3">
                                                <div className="card-body">
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
                                                            <span className="input-group-text">
                                                                Urbanización-Barrio
                                                            </span>
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
                                                    <div className="input-group">
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
                                                </div>
                                            </div>
                                        ),
                                        1: (
                                            <div className="card mb-3">
                                                <div className="card-body">
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
                                                            <span className="input-group-text">
                                                                Email Comercial del proveedor
                                                            </span>
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
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Email del encargado de cobranzas
                                                            </span>
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
                                            </div>
                                        ),
                                        2: (
                                            <div className="card mb-3">
                                                <div className="card-body">
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
                                                            <span className="input-group-text">
                                                                Número de Cuenta Bancaria 1
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Tipo de Cuenta Bancaria 1
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Código Interbancario (CCI)
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Número de Cuenta Bancaria 2
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Tipo de Cuenta Bancaria 2
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Código Interbancario (CCI)
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Detracciones (SPOT)
                                                            </span>
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
                                                            <span className="input-group-text">
                                                                Numero de Cuenta Bancaria Detrac.
                                                            </span>
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
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Banco Detraccion
                                                            </span>
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
                                            </div>
                                        ),
                                        3: (
                                            <div className="card mb-3">
                                                <div className="card-body">
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
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 1
                                                            </span>
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
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 21
                                                            </span>
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
                                            </div>
                                        ),
                                    }[tabIndex]
                                }
                            </>
                        ),
                        2: (
                            <>
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


                            </>
                        )
                    }[stepIndex]
                }

                <div className="row justify-content-md-center">
                    {
                        stepIndex > 0 ?
                            <div className="col-12 col-md-6 mb-3">
                                <div className="d-grid gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-prev block subtitle"
                                        onClick={() => handleStepChange(index => index - 1)}
                                    >
                                        Volver
                                    </button>
                                </div>
                            </div>
                            : <></>
                    }
                    <div className="col-12 col-md-6">
                        <div className="d-grid gap-2">
                            <button
                                type="button"
                                className="btn btn-next block subtitle"
                                onClick={ 
                                    stepIndex < steps.length -1
                                    ? () => handleStepChange(index => index + 1)
                                    : handleVerification}
                            >
                                {
                                    stepIndex < steps.length -1 ? 'Siguiente' : 'Enviar'
                                }
                            </button>
                        </div>
                    </div>
                </div>



            </form>
        </>
    );
};
