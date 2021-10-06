import React, { useEffect } from "react";
import { Logo } from "../components/atoms/Logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const CreatePassword = () => {
  const initialValues = {
    email: "emal@gmail.com",
    password: "",
    passwordConfirmation: "",
  };

  const ValidateCreatePasswordShema = Yup.object().shape({
    email: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
    password: Yup.string().required('Password es requerido').min(8,'minimo 8 caracteres'),
    passwordConfirmation: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
         .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/, 'Debe incluir números., utilice una combinación de letras mayúsculas y minúsculas., incluya caracteres especiales.'),
  });

 /*  useEffect(() => {
    handle(false);
    return () => handle(true);
  }, [handle]); */
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6"></div>

          <div className="content-box-internas mt-4 col-12">
            <Formik
              initialValues={initialValues}
              validationSchema={ValidateCreatePasswordShema}
              onSubmit={(valores, { resetForm }) => {
                resetForm();
              }}
            >
              {({ errors, handleSubmit }) => (
                <Form
                  name="form"
                  className="form-group"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">Email de usuario</span>
                      <Field
                        readOnly
                        type="email"
                        name="email"
                        aria-label="First name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <span className="text-danger">{errors.email}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">Crear contraseña</span>
                      <Field
                        type="password"
                        name="password"
                        aria-label="First name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <span className="text-danger">{errors.password}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group mt-2">
                      <span className="input-group-text">
                        Confirmar contraseña
                      </span>
                      <Field
                        type="password"
                        name="passwordConfirmation"
                        aria-label="First name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="passwordConfirmation"
                        component={() => (
                          <span className="text-danger">{errors.passwordConfirmation}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6">
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-prev block subtitle"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid gap-2">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          type="button"
                          className="btn btn-next block subtitle"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              Se ha creado su usuario de administrador, se activará cuando pase
              por las aprobaciones de las areas correspondientes Una vez creada
              su cuenta, podrá crear usuarios secundarios a través del protal
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
