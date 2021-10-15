import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataAdmin = ({ errors, values, handleChange }) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2 mb-2">
          <h5>Datos del registrador</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="titulo">Título</label>
          <Field
            className="form-control"
            type="text"
            name="titulo"
            autoComplete="off"
            value={values.titulo}
            onChange={handleChange}
          />
          <ErrorMessage
            name="titulo"
            component={() => (
              <span className="text-danger">{errors.titulo}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="nombres">Nombres</label>
          <Field
            className="form-control"
            type="text"
            name="nombres"
            autoComplete="off"
            value={values.nombres}
            onChange={handleChange}
          />
          <ErrorMessage
            name="nombres"
            component={() => (
              <span className="text-danger">{errors.nombres}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="apellidos">Apellidos</label>
          <Field
            className="form-control"
            type="text"
            name="apellidos"
            autoComplete="off"
            value={values.apellidos}
            onChange={handleChange}
          />
          <ErrorMessage
            name="apellidos"
            component={() => (
              <span className="text-danger">{errors.apellidos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="email"> Email de usuario administrador:</label>
          <Field
            className="form-control"
            type="text"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
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
