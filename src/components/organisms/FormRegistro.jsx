import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
//import { StepItem } from "../atoms/StepItem";
import { TabItem } from "../atoms/TabItem";

export const FormRegistro = ({ handleValidated }) => {

    let idRol = localStorage.getItem("id_rol") ?? '';
    console.log(idRol);

    const history = useHistory();

    function handleVerification() {
        history.push("/supplier_verification");
    }

    const tabsProvider = [
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
        }
    ];

    const tabsPurchaser = [
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
        {
            name: "Datos de Compras"
        },
        // PERFIL DATA MASTER
        {
            name: "Administrador de datos maestros"
        },
    ];

    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1",
        tipo: "1",
        rubro: "",
        empresa: "",
        comprador: "",
        comentario: ""
    });

    const { idFiscal, pais, rubro, empresa, comprador, comentario } = formValues;

    const [tabList] = useState(idRol === "1" || idRol === '' ? tabsProvider : tabsPurchaser);

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    return (
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
                <textarea
                    className="form-control"
                    name="comentario"
                    value={comentario}
                    onChange={handleInputChange}
                >

                </textarea>
            </div>
            <ul className="nav nav-tabs nav-justified">
                {tabList.map((tab, index) => (
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
                                <div className="mt-2 mb-2">
                                    <h5>Datos del registrador</h5>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Título</span>
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
                                        <span className="input-group-text">Email de usuario administrador:</span>
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
                                                <tr key={item}>
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
                                <div className="input-group">
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


                                <div className="input-group">
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
                    4: (
                        <div className="card mb-3">
                            <div className="card-body">
                                {/* <div className="mt-2 mb-2">
                                    <h5>Información fiscal</h5>
                                </div> */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Org. de Compras</span>
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
                                        <span className="input-group-text">Sociedad</span>
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
                                        <span className="input-group-text">Grupo de Tesoreria</span>
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
                                        <span className="input-group-text">Responsable de gastos transferencia</span>
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
                                        <span className="input-group-text">Modo de transporte frontera</span>
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
                                        <span className="input-group-text">Condicion de pago compras</span>
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
                    5: (
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mt-2 mb-2">
                                    <h5>Gestión de cuenta</h5>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Acreedor</span>
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
                                        <span className="input-group-text">Documentos de identificación fiscal</span>
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
                                        <span className="input-group-text">Grupo de cuentas</span>
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
                                        <span className="input-group-text">Cuenta asociada</span>
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
                                    <h5>Gestión de cuenta</h5>
                                </div>
                                <div className="mt-2 mb-2">
                                    <h5>Datos de pago</h5>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Condición de pago</span>
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
                                        <span className="input-group-text">Verificación de facturas dobles o abonos</span>
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
                                        <span className="input-group-text">Vías de pago</span>
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
                                        <span className="input-group-text">Banco propio</span>
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
                                        <span className="input-group-text">Clave agrup.</span>
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
                                    <h5>Información sobre la retención</h5>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">País de retención</span>
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
                                        <span className="input-group-text">Tp. retención</span>
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
                                        <span className="input-group-text">Ind. retención</span>
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
                                        <span className="input-group-text">Sujeto</span>
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
                                        <span className="input-group-text">Grupo esquema proveedor</span>
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
                                        <span className="input-group-text">Verific.Fact.Base EM</span>
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
                                        <span className="input-group-text">Verific.Fact.Rel.Serv</span>
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
                    )
                }[tabIndex]
            }
            {
                idRol === "1" || idRol === ''
                    ?
                    <div className="row justify-content-md-center">
                        {/* {
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
                    } */}
                        <div className="col-12 col-md-6">
                            <div className="d-grid gap-2">
                                <button
                                    type="button"
                                    className="btn btn-next block subtitle"
                                    onClick={handleVerification}
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </>

    );
};
