import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Logo } from "../components/atoms/Logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useForm } from "../hooks/useForm001";

export const ValidateProvider = ({handle}) => {


  const initialValues = {
    validateProvider: ""
  }

  const ValidateProviderShema = Yup.object().shape({
    validateProvider: Yup.string()
    .required("EL campo código de verifiación es requerido.")
    .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
  });

  useEffect(() => {
    handle(false);
    return () => handle(true);
  }, [handle]);

  const history = useHistory();

  function handlePassword() {
    history.push("/create_password");
  }
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6"></div>

          <div className="content-box-internas mt-4">
            <Formik 
               initialValues={initialValues}
               validationSchema={ValidateProviderShema}
               onSubmit={(valores, { resetForm }) => {
                handlePassword();
                 resetForm();
               }}
            
            >
              {({ errors, values, handleSubmit, handleChange  }) => (
            <Form name="form" className="form-group" onSubmit={handleSubmit}>
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text">
                    Ingresar código de verificación
                  </span>
                  <Field
                    type="text"
                    aria-label="First name"
                    className="form-control"
                    name="validateProvider"
                    value={values.validateProvider}
                    onChange={handleChange}
                  />
                   <ErrorMessage
                          name="validateProvider"
                          component={() => (
                            <span className="text-danger">{errors.validateProvider}</span>
                          )}
                        />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="d-grid gap-2">
                    <button onClick={() => console.log('hizo click')}
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
                      type="button"
                      onClick={() => handlePassword()}
                      className="btn bg-button block subtitle"
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
    </>
  );
};
