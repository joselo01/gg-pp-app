import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataAdmin = ({errors}) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2 mb-2">
          <h5>Datos del registrador</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="pais">Título</label>
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
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="pais">Nombres</label>
          <Field
            className="form-control"
            type="text"
            name="nombres"
            autoComplete="off"
          />
          <ErrorMessage
            name="nombres"
            component={() => (
              <span className="text-danger">{errors.nombres}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="pais">Apellidos</label>
          <Field
            className="form-control"
            type="text"
            name="apellidos"
            autoComplete="off"
          />
          <ErrorMessage
            name="apellidos"
            component={() => (
              <span className="text-danger">{errors.apellidos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="pais"> Email de usuario administrador:</label>
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
  );
};
