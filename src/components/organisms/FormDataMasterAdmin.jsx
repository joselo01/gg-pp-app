import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup";


export const FormDataMasterAdmin = () => {
    const initialValues = {
        //AccountManagement
        acreedor: "",
        idFiscalTres: "",
        gpoCuentas: "",
        cuentaAsociada: "",
        condicionPagoDos: "",
        verificacionFacturas: "",
        viasPago: "",
        bancoPropio: "",
        claveAgrup: "",
        paisRetencion: "",
        tpRetencion: "",
        indRetencion: "",
        sujeto: "",
        grupoEsquemaProveedor: "",
        verificacionFactruraBase: "",
        verificacionFactRelServ: ""
    };

    const RegisterShema = Yup.object().shape({
        //AccountManagement
        acreedor: Yup.string().required(
            "El campo organización de compras es requerido"
        ),
        idFiscalTres: Yup.string()
            .required("EL campo ID Fiscal es requerido.")
            .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
        gpoCuentas: Yup.string().required("El campo grupo de cuentas es requerido"),
        cuentaAsociada: Yup.string()
            .required("El campo cuenta asociada es requerido")
            .matches(/^[0-9]+$/),
        condicionPagoDos: Yup.string().required(
            "El campo condición de pago es requerido"
        ),
        verificacionFacturas: Yup.string().required(
            "El campo verificacion de facturas es requerido"
        ),
        viasPago: Yup.string().required("El campo vias de pago es requerido"),
        bancoPropio: Yup.string().required("El campo banco propio es requerido"),
        claveAgrup: Yup.string().required(
            "El campo clave de agrupación es requerido"
        ),
        paisRetencion: Yup.string().required(
            "El campo país de rtencion es requerido"
        ),
        tpRetencion: Yup.string().required(
            "El campo tipo de retención es requerido"
        ),
        indRetencion: Yup.string().required(
            "El campo indicación de retención es requerido"
        ),
        sujeto: Yup.string().required("El campo sujeto es requerido"),
        grupoEsquemaProveedor: Yup.string().required(
            "El campo grupo esquema de proveedor es requerido"
        ),
        verificacionFactruraBase: Yup.string().required(
            "El campo verificación de facturas es requerido"
        ),
        verificacionFactRelServ: Yup.string().required(
            "El campo verificación de facturas relacionadas al servicio es requerido"
        ),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterShema}
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                // handleVerification();
                console.log(valores);
            }}
        >
            {({ errors, valores, setFieldValue, handleSubmit }) => (
                <Form name="form" className="form-group" onSubmit={handleSubmit}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="mt-2 mb-2">
                                <h5>Gestión de cuenta</h5>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Acreedor</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="acreedor"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="acreedor"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.acreedor}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Documentos de identificación fiscal
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="idFiscalTres"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="idFiscalTres"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.idFiscalTres}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Grupo de cuentas
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="gpoCuentas"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="gpoCuentas"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.gpoCuentas}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Cuenta asociada
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="cuentaAsociada"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="cuentaAsociada"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.cuentaAsociada}
                                        </span>
                                    )}
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
                                    <span className="input-group-text">
                                        Condición de pago
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="condicionPagoDos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="condicionPagoDos"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.condicionPagoDos}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Verificación de facturas dobles o abonos
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="verificacionFacturas"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="verificacionFacturas"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.verificacionFacturas}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Vías de pago</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="viasPago"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="viasPago"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.viasPago}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Banco propio</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="bancoPropio"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="bancoPropio"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.bancoPropio}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Clave agrup.</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="claveAgrup"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="claveAgrup"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.claveAgrup}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="mt-2 mb-2">
                                <h5>Información sobre la retención</h5>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        País de retención
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="paisRetencion"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="paisRetencion"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.paisRetencion}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Tp. retención
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="tpRetencion"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="tpRetencion"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.tpRetencion}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Ind. retención
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="indRetencion"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="indRetencion"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.indRetencion}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Sujeto</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="sujeto"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="sujeto"
                                    component={() => (
                                        <span className="text-danger">{errors.sujeto}</span>
                                    )}
                                />
                            </div>
                            <div className="mt-2 mb-2">
                                <h5>Condiciones</h5>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Grupo esquema proveedor
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="grupoEsquemaProveedor"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="grupoEsquemaProveedor"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.grupoEsquemaProveedor}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Verific.Fact.Base EM
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="verificacionFactruraBase"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="verificacionFactruraBase"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.verificacionFactruraBase}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Verific.Fact.Rel.Serv
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="verificacionFactRelServ"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="verificacionFactRelServ"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.verificacionFactRelServ}
                                        </span>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
