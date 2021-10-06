import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup";


export const FormDataBank = () => {
    const initialValues = {
        // BankData
        idFiscalDos: "",
        tipoDocumento: "",
        vendedorPrincipal: "",
        telefonoVendedor: "",
        moneda: "",
        condicionPago: "",
        incoterms: "",
        incotermsDos: "",
    }

    const RegisterShema = Yup.object().shape({
        // BankData
        idFiscalDos: Yup.string()
            .required("EL campo ID Fiscal es requerido.")
            .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
        tipoDocumento: Yup.string()
            .required("El campo tipo de documento es requerido")
            .matches(
                /^[a-z0-9]+$/i,
                "El campo solo debe contener números y/o letras"
            ),
        vendedorPrincipal: Yup.string().required(
            "El campo vendedor principal es requerido"
        ),
        telefonoVendedor: Yup.string()
            .required("El campo teléfono vendedor es requerido")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "El número de teléfono no es válido"
            ),
        moneda: Yup.string().required("El campo mneda es requerido"),
        condicionPago: Yup.string().required(
            "El campo condición de pago es requerido"
        ),
        incoterms: Yup.string().required("El campo incoterms es requerido"),
        incotermsDos: Yup.string().required(
            "El campo incoterms (lugar de entrega) es requerido"
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
                        <div className="card-body row">
                            <div className="mt-2 mb-2">
                                <h5>Información fiscal</h5>
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Documento de identificación fiscal</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="idFiscalDos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="idFiscalDos"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.idFiscalDos}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Tipo de documento</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="tipoDocumento"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="tipoDocumento"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.tipoDocumento}
                                        </span>
                                    )}
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
                                    {[0, 1, 2, 3].map((item) => (
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
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-2 mb-2">
                                <h5>Datos de venta</h5>
                            </div>

                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Nombre del vendedor principal</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="vendedorPrincipal"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="vendedorPrincipal"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.vendedorPrincipal}
                                        </span>
                                    )}
                                />
                            </div>

                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Teléfono del vendedor</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="telefonoVendedor"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="telefonoVendedor"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.telefonoVendedor}
                                        </span>
                                    )}
                                />
                            </div>

                            <div className="mt-2 mb-2">
                                <h5>Condiciones</h5>
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Moneda de pedido</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="moneda"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="moneda"
                                    component={() => (
                                        <span className="text-danger">{errors.moneda}</span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Condiciones de pago</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="condicionPago"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="condicionPago"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.condicionPago}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">INCOTERMS</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="incoterms"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="incoterms"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.incoterms}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">INCOTERMS 2/Lugar de entrega</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="incotermsDos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="incotermsDos"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.incotermsDos}
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
