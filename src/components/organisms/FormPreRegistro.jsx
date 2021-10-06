import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormPreRegistro = ({ handleValidated }) => {
  const [disabled, setDisabled] = useState(false);
  let rubros = [
    { value: "1", label: "Rubro 1" },
    { value: "2", label: "Rubro 2" },
    { value: "3", label: "Rubro 3" },
  ];
  rubros.unshift({
    value: "",
    label: "[ Seleccione Rubro ]",
  });

  const initialValues = {
    idFiscal: "",
    pais: "",
    rubro: [],
    empresa: "",
    comprador: "",
    comentario: "",
  };

  const PreRegistrationShema = Yup.object().shape({
    idFiscal: Yup.string()
      .required("EL campo ID Fiscal es requerido.")
      .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
    pais: Yup.string().required("EL campo pais es requerido"),
    rubro: Yup.array()
      .min(1, "El campo rubro es requerido.")
      .required("El campo rubro es requerido.")
      .nullable(),
    empresa: Yup.string().required("El campo empresa es requerido"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={PreRegistrationShema}
        validate={(valores) => {
          let mistake = {};
          if (valores.comprador.length === 1) {
            valores.comentario = "";
            setDisabled(true);
          } else if (!valores.comentario) {
            mistake.comentario =
              "EL campo comentario y/o contacto es requerido";
          } else if (valores.comentario === "") {
            mistake.comentario = "";
            setDisabled(true);
          }

          return mistake;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          //handleValidated();
        }}
      >
        {({ errors, handleSubmit }) => (
          <Form name="form" className="form-group" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-12 mb-3">
                <label for="pais">N° Id. Fiscal</label>
                <Field
                  className="form-control"
                  type="text"
                  name="idFiscal"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="idFiscal"
                  component={() => (
                    <span className="text-danger">{errors.idFiscal}</span>
                  )}
                />
              </div>
              <div className="form-group col-12 mb-3">
                <label for="pais">País</label>
                <Field as="select" className="form-select" name="pais">
                  <option value="">[Seleccione pais]</option>
                  <option value="1">Perú</option>
                  <option value="2">Chile</option>
                </Field>
                <ErrorMessage
                  name="pais"
                  component={() => (
                    <span className="text-danger">{errors.pais}</span>
                  )}
                />
              </div>
              <div className="form-group col-md-12 col-12 mb-3">
                <label htmlFor="rubro">Rubro</label>
                <Field
                  component="select"
                  className="form-select height-multiple"
                  name="rubro"
                  multiple={true}
                >
                  {rubros.map((item) => {
                    return (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="rubro"
                  component={() => (
                    <span className="text-danger">{errors.rubro}</span>
                  )}
                />
              </div>
              <div className="form-group col-12 mb-3">
                <label for="pais">Empresa a postular</label>
                <Field as="select" className="form-select" name="empresa">
                  <option value="">[Seleccione empresa]</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
                <ErrorMessage
                  name="empresa"
                  component={() => (
                    <span className="text-danger">{errors.empresa}</span>
                  )}
                />
              </div>
              <div className="form-group col-12 mb-3">
                <label for="pais">Comprador responsable</label>
                <Field as="select" className="form-select" name="comprador">
                  <option value="">[Seleccione un comprador]</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
              <div className="form-group col-12 mb-3">
                <label for="pais">Contacto</label>
                <Field
                  as="textarea"
                  className="form-control"
                  name="comentario"
                  disabled={disabled}
                ></Field>
                <ErrorMessage
                  name="comentario"
                  component={() => (
                    <span className="text-danger">{errors.comentario}</span>
                  )}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="button" onClick={() => handleValidated()} className="btn bg-button block subtitle">
                  Validar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
