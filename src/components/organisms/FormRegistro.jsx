import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
//import { StepItem } from "../atoms/StepItem";
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
            name: "Datos de usuario administrador",
        },
        {
            name: "Datos generales",
        },
        {
            name: "Datos bancarios/comerciales",
        },
        {
            name: "Documentos de su empresa",
        },
    ];

    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1",
        tipo: "1",
    });

    const { idFiscal, pais, tipo, rubro, empresa, comprador, comentario } = formValues;

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
            {/* <div className="card card-timeline px-2 border-none">
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
            </div> */}
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
                                        <span className="input-group-text">Rubro</span>
                                    </div>
                                    <select
                                        className="form-select"
                                        name="rubro"
                                        value={rubro}
                                        onChange={handleInputChange}

                                    >
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
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        name="comentario"
                                        autoComplete="off"
                                        value={comentario}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </>
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
                                            <>
                                                <div className="mt-2">
                                                    <h5>Datos del registrador</h5>
                                                </div>
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
                                                        className="form-select"
                                                        name="pais"
                                                        value={pais}
                                                        onChange={handleInputChange}

                                                    >
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
                                                        name="pais"
                                                        value={pais}
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
                                                        name="pais"
                                                        value={pais}
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
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="idFiscal"
                                                        autoComplete="off"
                                                        value={idFiscal}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </>
                                        ),
                                        1: (
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="mt-2">
                                                        <h5>Nombre</h5>
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
                                                    <div className="mt-2 mb-2">
                                                        <h5>Concepto de búsqueda</h5>
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
                                                    <div className="mt-2 mb-2">
                                                        <h5>Dirección de Calle</h5>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Calle</span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            type="text"
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
                                                            <span className="input-group-text">Distrito/Barrio/Urb/Zona</span>
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
                                                            <span className="input-group-text">Provincia/Comarca/Condado</span>
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
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Región
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

                                                    <div className="mt-2 mb-2">
                                                        <h5>Comunicación</h5>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Idioma
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
                                                            <span className="input-group-text">Teléfono 1</span>
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
                                                            <span className="input-group-text">Teléfono 2</span>
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
                                                            <span className="input-group-text">Teléfono 3</span>
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
                                                            <span className="input-group-text">Teléfono 4</span>
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
                                                            <span className="input-group-text">Teléfono 5</span>
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
                                                            <span className="input-group-text">Correo Electrónico 1</span>
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
                                                            <span className="input-group-text">Correo Electrónico 2</span>
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
                                                            <span className="input-group-text">Correo Electrónico 3</span>
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
                                                            <span className="input-group-text">Correo Electrónico 4</span>
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
                                                            <span className="input-group-text">Correo Electrónico 5</span>
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
                                                            <span className="input-group-text">Rol 1</span>
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
                                                            <span className="input-group-text">Rol 2</span>
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
                                                            <span className="input-group-text">Rol 3</span>
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
                                                            <span className="input-group-text">Rol 4</span>
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
                                                            <span className="input-group-text">Rol 5</span>
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
                                                    <div className="mt-2 mb-2">
                                                        <h5>Información fiscal</h5>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Documento de identificación fiscal</span>
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
                                                            <span className="input-group-text">Tipo de documento</span>
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
                                                    <div className="mt-2 mb-2">
                                                        <h5>Datos bancarios</h5>
                                                    </div>

                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">País</th>
                                                                <th scope="col">Banco</th>
                                                                <th scope="col">N° cuenta bancaria</th>
                                                                <th scope="col">Nombre de titular de la cuenta</th>
                                                                <th scope="col">CC</th>
                                                                <th scope="col">N° interbancario</th>
                                                                <th scope="col">Tipo de banco interlocutor</th>
                                                                <th scope="col">N° interbancario</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                [0, 1, 2, 3].map(item => (
                                                                    <tr>
                                                                        <th scope="row"></th>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>

                                                    <div className="mt-2 mb-2">
                                                        <h5>Datos de venta</h5>
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del vendedor principal
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
                                                                Teléfono del vendedor
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

                                                    <div className="mt-2 mb-2">
                                                        <h5>Condiciones</h5>
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Moneda de pedido</span>
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
                                                                Condiciones de pago
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
                                                            <span className="input-group-text">INCOTERMS</span>
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
                                                            <span className="input-group-text">INCOTERMS 2/Lugar de entrega</span>
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
                                                        {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 1
                                                            </span>
                                                        </div> */}
                                                        <input
                                                            className="form-control"
                                                            type="file"
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
                                    stepIndex < steps.length - 1
                                        ? () => handleStepChange(index => index + 1)
                                        : handleVerification}
                            >
                                {
                                    stepIndex < steps.length - 1 ? 'Siguiente' : 'Enviar'
                                }
                            </button>
                        </div>
                    </div>
                </div>



            </form>
        </>
    );
};
