import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup";


export const FormDataAdmin = () => {
    const initialValues = {
        // administrador
        titulo: "",
        nombres: "",
        apellidos: "",
        email: "",
    }

    const RegisterShema = Yup.object().shape({
        // administrador
        titulo: Yup.string().required("El campo titulo es requerido"),
        nombres: Yup.string().required("El campo nombre es requerido"),
        apellidos: Yup.string().required("El campo apellido es requerido"),
        email: Yup.string()
            .required("El campo email es requerido")
            .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
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
                                <h5>Datos del registrador</h5>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Título</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="titulo"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="titulo"
                                    component={() => (
                                        <span className="text-danger">{errors.titulo}</span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Nombres</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="nombres"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="nombres"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.nombres}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Apellidos</span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="apellidos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="apellidos"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.apellidos}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Email de usuario administrador:
                                    </span>
                                </div>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="email"
                                    component={() => (
                                        <span className="text-danger">{errors.email}</span>
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
