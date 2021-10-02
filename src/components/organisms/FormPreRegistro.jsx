import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormPreRegistro = ({ handleValidated }) => {

  const [disabled, setDisabled] = useState(false)
  let rubros = [
    { value: "1", label: "Rubro 1" },
    { value: "2", label: "Rubro 2" },
    { value: "3", label: "Rubro 3" },
  ];

  rubros.unshift({
    value: "",
    label: "[ Seleccione Rubro ]",
  });  

  return (
    <>
      <Formik
        initialValues={{
          idFiscal: "",
          pais: "",
          rubro: [],
          empresa: "",
          comprador: "",
          comentario:""
        }}
        validationSchema={Yup.object({
          rubro: Yup.array()
            .min(1, "El campo rubro es requerido.")
            .required("El campo rubro es requerido.")
            .nullable(),
            
        })}
        validate={(valores) => {
          let mistake = {};

          if (!valores.idFiscal) {
            mistake.idFiscal = "EL campo ID Fiscal es requerido";
          } else if (!/^[a-z0-9]+$/i.test(valores.idFiscal)) {
            mistake.idFiscal = "El campo solo debe contener números y letras";
          }

          if (!valores.pais) {
            mistake.pais = "EL campo pais es requerido";
          }

          if (!valores.empresa) {
            mistake.empresa = "EL campo empresa es requerido";
          }

         
          if (valores.comprador.length === 1) {
                setDisabled(true)
          }  else {
            setDisabled(false)
          }

          if (!valores.comprador) {
            mistake.comprador = "Debe seleccionar un comprador";
          } 
          if (!valores.comentario) {
            mistake.comentario = "EL campo comentario y/o contacto es requerido";
          }

          return mistake;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("datos enviados");
          handleValidated();
        }}
      >
        {({ errors, isValid, handleSubmit }) => (
          <Form name="form" className="form-group" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">N° Id. Fiscal</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">País</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Rubro</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Empresa a postular</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Comprador responsable</span>
              </div>
              <Field as="select" className="form-select" name="comprador">
                <option value="">[Seleccione un comprador]</option>
                <option value="1">A</option>
                <option value="2">B</option>
              </Field>
              
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Contacto</span>
              </div>
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
              {/* <ErrorMessage
                name="comprador"
                component={() => (
                  <span className="text-danger">{errors.comprador}</span>
                )}
              /> */}
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn bg-button block subtitle"
                /* onClick={handleValidated} */
              >
                Validar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
