import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup";


export const FormDataGeneral = () => {
    const initialValues = {
        //GeneralData
        tratamiento: "",
        razonSocial: "",
        nombreComercial: "",
        calle: "",
        numero: "",
        distrito: "",
        provincia: "",
        codigoPostal: "",
        country: "",
        region: "",
        idioma: "",
        telefonoUno: "",
        telefonoDos: "",
        telefonoTres: "",
        telefonoCuatro: "",
        telefonoCinco: "",
        emailUno: "",
        emailDos: "",
        emailTres: "",
        emailCuatro: "",
        emailCinco: "",
        rolUno: "",
        rolDos: "",
        rolTres: "",
        rolCuatro: "",
        rolCinco: "",
    }

    const RegisterShema = Yup.object().shape({
        //GeneralData
        tratamiento: Yup.string().required("El campo tratamiento es requerido"),
        razonSocial: Yup.string().required("El campo razon social es requerido"),
        nombreComercial: Yup.string().required(
            "El campo nombre comercial es requerido"
        ),
        calle: Yup.string().required("El campo calle es requerido"),
        numero: Yup.string()
            .required("El campo número es requerido")
            .matches(/^[0-9]+$/, "el campo debe ser númerico"),
        distrito: Yup.string().required("El campo distrito es requerido"),
        provincia: Yup.string().required("El campo Provincia es requerido"),
        codigoPostal: Yup.string()
            .required("El campo código postal es requerido")
            .matches(
                /^[a-z0-9]+$/i,
                "El campo solo debe contener números y/o letras"
            ),
        country: Yup.string().required("El campo país es requerido"),
        region: Yup.string().required("El campo región es requerido"),
        idioma: Yup.string().required("El campo idioma es requerido"),
        telefonoUno: Yup.string()
            .required("El campo teléfono es requerido")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "El número de teléfono no es válido"
            ),
        telefonoDos: Yup.string()
            .required("El campo teléfono es requerido")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "El número de teléfono no es válido"
            ),
        telefonoTres: Yup.string()
            .required("El campo teléfono es requerido")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "El número de teléfono no es válido"
            ),
        telefonoCuatro: Yup.string()
            .required("El campo teléfono es requerido")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "El número de teléfono no es válido"
            ),
        telefonoCinco: Yup.string()
            .required("El campo teléfono es requerido")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "El número de teléfono no es válido"
            ),
        emailUno: Yup.string()
            .required("El campo email es requerido")
            .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
        emailDos: Yup.string()
            .required("El campo email es requerido")
            .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
        emailTres: Yup.string()
            .required("El campo email es requerido")
            .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
        emailCuatro: Yup.string()
            .required("El campo email es requerido")
            .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
        emailCinco: Yup.string()
            .required("El campo email es requerido")
            .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
        rolUno: Yup.string().required("El campo rol 1 es requerido"),
        rolDos: Yup.string().required("El campo rol 2 es requerido"),
        rolTres: Yup.string().required("El campo rol 3 es requerido"),
        rolCuatro: Yup.string().required("El campo rol 4 es requerido"),
        rolCinco: Yup.string().required("El campo rol 5 es requerido"),

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
                            <div className="mt-2">
                                <h5>Nombre</h5>
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Tratamiento</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="tratamiento"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="tratamiento"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.tratamiento}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Razon Social</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="razonSocial"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="razonSocial"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.razonSocial}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="mt-2 mb-2">
                                <h5>Concepto de búsqueda</h5>
                            </div>
                            <div className="form-group col-md-12 col-12 mb-3">
                                <label for="pais">Nombre Comercial</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="nombreComercial"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="nombreComercial"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.nombreComercial}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="mt-2 mb-2">
                                <h5>Dirección de Calle</h5>
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Calle</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="calle"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="calle"
                                    component={() => (
                                        <span className="text-danger">{errors.calle}</span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Número</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="numero"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="numero"
                                    component={() => (
                                        <span className="text-danger">{errors.numero}</span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Distrito/Barrio/Urb/Zona</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="distrito"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="distrito"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.distrito}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Provincia/Comarca/Condado</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="provincia"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="provincia"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.provincia}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais"> Código Postal</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="codigoPostal"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="codigoPostal"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.codigoPostal}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">País</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="country"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="country"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.country}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Región</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="region"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="region"
                                    component={() => (
                                        <span className="text-danger">{errors.region}</span>
                                    )}
                                />
                            </div>

                            <div className="mt-2 mb-2">
                                <h5>Comunicación</h5>
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Idioma</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="idioma"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="idioma"
                                    component={() => (
                                        <span className="text-danger">{errors.idioma}</span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Teléfono 1</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="telefonoUno"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="telefonoUno"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.telefonoUno}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Teléfono 2</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="telefonoDos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="telefonoDos"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.telefonoDos}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Teléfono 3</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="telefonoTres"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="telefonoTres"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.telefonoTres}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Teléfono 4</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="telefonoCuatro"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="telefonoCuatro"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.telefonoCuatro}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Teléfono 5</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="telefonoCinco"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="telefonoCinco"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.telefonoCinco}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Correo Electrónico 1</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="emailUno"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="emailUno"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.emailUno}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Correo Electrónico 2</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="emailDos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="emailDos"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.emailDos}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Correo Electrónico 3</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="emailTres"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="emailTres"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.emailTres}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Correo Electrónico 4</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="emailCuatro"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="emailCuatro"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.emailCuatro}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Correo Electrónico 5</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="emailCinco"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="emailCinco"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.emailCinco}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Rol 1</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="rolUno"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="rolUno"
                                    component={() => (
                                        <span className="text-danger">{errors.rolUno}</span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Rol 2</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="rolDos"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="rolDos"
                                    component={() => (
                                        <span className="text-danger">{errors.rolDos}</span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Rol 3</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="rolTres"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="rolTres"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.rolTres}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Rol 4</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="rolCuatro"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="rolCuatro"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.rolCuatro}
                                        </span>
                                    )}
                                />
                            </div>
                            <div className="form-group col-md-6 col-12 mb-3">
                                <label for="pais">Rol 5</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="rolCinco"
                                    autoComplete="off"
                                />
                                <ErrorMessage
                                    name="rolCinco"
                                    component={() => (
                                        <span className="text-danger">
                                            {errors.rolCinco}
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
