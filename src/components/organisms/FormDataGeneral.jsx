import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataGeneral = ({ errors, values, handleChange }) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2">
          <h5>Nombre</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="tratamiento">Tratamiento</label>
          <Field
            className="form-control"
            type="text"
            name="tratamiento"
            autoComplete="off"
            value={values.tratamiento}
            onChange={handleChange}
          />
          <ErrorMessage
            name="tratamiento"
            component={() => (
              <span className="text-danger">{errors.tratamiento}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="razonSocial">Razon Social</label>
          <Field
            className="form-control"
            type="text"
            name="razonSocial"
            autoComplete="off"
            value={values.razonSocial}
            onChange={handleChange}
          />
          <ErrorMessage
            name="razonSocial"
            component={() => (
              <span className="text-danger">{errors.razonSocial}</span>
            )}
          />
        </div>
        <div className="mt-2 mb-2">
          <h5>Concepto de búsqueda</h5>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <label htmlFor="nombreComercial">Nombre Comercial</label>
          <Field
            className="form-control"
            type="text"
            name="nombreComercial"
            autoComplete="off"
            value={values.nombreComercial}
            onChange={handleChange}
          />
          <ErrorMessage
            name="nombreComercial"
            component={() => (
              <span className="text-danger">{errors.nombreComercial}</span>
            )}
          />
        </div>
        <div className="mt-2 mb-2">
          <h5>Dirección de Calle</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="calle">Calle</label>
          <Field
            className="form-control"
            type="text"
            name="calle"
            autoComplete="off"
            value={values.calle}
            onChange={handleChange}
          />
          <ErrorMessage
            name="calle"
            component={() => (
              <span className="text-danger">{errors.calle}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="numero">Número</label>
          <Field
            className="form-control"
            type="text"
            name="numero"
            autoComplete="off"
            value={values.numero}
            onChange={handleChange}
          />
          <ErrorMessage
            name="numero"
            component={() => (
              <span className="text-danger">{errors.numero}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="distrito">Distrito/Barrio/Urb/Zona</label>
          <Field
            className="form-control"
            type="text"
            name="distrito"
            autoComplete="off"
            value={values.distrito}
            onChange={handleChange}
          />
          <ErrorMessage
            name="distrito"
            component={() => (
              <span className="text-danger">{errors.distrito}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="provincia">Provincia/Comarca/Condado</label>
          <Field
            className="form-control"
            type="text"
            name="provincia"
            autoComplete="off"
            value={values.provincia}
            onChange={handleChange}
          />
          <ErrorMessage
            name="provincia"
            component={() => (
              <span className="text-danger">{errors.provincia}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="codigoPostal"> Código Postal</label>
          <Field
            className="form-control"
            type="text"
            name="codigoPostal"
            autoComplete="off"
            value={values.codigoPostal}
            onChange={handleChange}
          />
          <ErrorMessage
            name="codigoPostal"
            component={() => (
              <span className="text-danger">{errors.codigoPostal}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="country">País</label>
          <Field
            className="form-control"
            type="text"
            name="country"
            autoComplete="off"
            value={values.country}
            onChange={handleChange}
          />
          <ErrorMessage
            name="country"
            component={() => (
              <span className="text-danger">{errors.country}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="region">Región</label>
          <Field
            className="form-control"
            type="text"
            name="region"
            autoComplete="off"
            value={values.region}
            onChange={handleChange}
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
          <label htmlFor="idioma">Idioma</label>
          <Field
            className="form-control"
            type="text"
            name="idioma"
            autoComplete="off"
            value={values.idioma}
            onChange={handleChange}
          />
          <ErrorMessage
            name="idioma"
            component={() => (
              <span className="text-danger">{errors.idioma}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="telefonoUno">Teléfono 1</label>
          <Field
            className="form-control"
            type="text"
            name="telefonoUno"
            autoComplete="off"
            value={values.telefonoUno}
            onChange={handleChange}
          />
          <ErrorMessage
            name="telefonoUno"
            component={() => (
              <span className="text-danger">{errors.telefonoUno}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="telefonoDos">Teléfono 2</label>
          <Field
            className="form-control"
            type="text"
            name="telefonoDos"
            autoComplete="off"
            value={values.telefonoDos}
            onChange={handleChange}
          />
          <ErrorMessage
            name="telefonoDos"
            component={() => (
              <span className="text-danger">{errors.telefonoDos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="telefonoTres">Teléfono 3</label>
          <Field
            className="form-control"
            type="text"
            name="telefonoTres"
            autoComplete="off"
            value={values.telefonoTres}
            onChange={handleChange}
          />
          <ErrorMessage
            name="telefonoTres"
            component={() => (
              <span className="text-danger">{errors.telefonoTres}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="telefonoCuatro">Teléfono 4</label>
          <Field
            className="form-control"
            type="text"
            name="telefonoCuatro"
            autoComplete="off"
            value={values.telefonoCuatro}
            onChange={handleChange}
          />
          <ErrorMessage
            name="telefonoCuatro"
            component={() => (
              <span className="text-danger">{errors.telefonoCuatro}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="telefonoCinco">Teléfono 5</label>
          <Field
            className="form-control"
            type="text"
            name="telefonoCinco"
            autoComplete="off"
            value={values.telefonoCinco}
            onChange={handleChange}
          />
          <ErrorMessage
            name="telefonoCinco"
            component={() => (
              <span className="text-danger">{errors.telefonoCinco}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="emailUno">Correo Electrónico 1</label>
          <Field
            className="form-control"
            type="text"
            name="emailUno"
            autoComplete="off"
            value={values.emailUno}
            onChange={handleChange}
          />
          <ErrorMessage
            name="emailUno"
            component={() => (
              <span className="text-danger">{errors.emailUno}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="emailDos">Correo Electrónico 2</label>
          <Field
            className="form-control"
            type="text"
            name="emailDos"
            autoComplete="off"
            value={values.emailDos}
            onChange={handleChange}
          />
          <ErrorMessage
            name="emailDos"
            component={() => (
              <span className="text-danger">{errors.emailDos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="emailTres">Correo Electrónico 3</label>
          <Field
            className="form-control"
            type="text"
            name="emailTres"
            autoComplete="off"
            value={values.emailTres}
            onChange={handleChange}
          />
          <ErrorMessage
            name="emailTres"
            component={() => (
              <span className="text-danger">{errors.emailTres}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="emailCuatro">Correo Electrónico 4</label>
          <Field
            className="form-control"
            type="text"
            name="emailCuatro"
            autoComplete="off"
            value={values.emailCuatro}
            onChange={handleChange}
          />
          <ErrorMessage
            name="emailCuatro"
            component={() => (
              <span className="text-danger">{errors.emailCuatro}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="emailCinco">Correo Electrónico 5</label>
          <Field
            className="form-control"
            type="text"
            name="emailCinco"
            autoComplete="off"
            value={values.emailCinco}
            onChange={handleChange}
          />
          <ErrorMessage
            name="emailCinco"
            component={() => (
              <span className="text-danger">{errors.emailCinco}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="rolUno">Rol 1</label>
          <Field
            className="form-control"
            type="text"
            name="rolUno"
            autoComplete="off"
            value={values.rolUno}
            onChange={handleChange}
          />
          <ErrorMessage
            name="rolUno"
            component={() => (
              <span className="text-danger">{errors.rolUno}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="rolDos">Rol 2</label>
          <Field
            className="form-control"
            type="text"
            name="rolDos"
            autoComplete="off"
            value={values.rolDos}
            onChange={handleChange}
          />
          <ErrorMessage
            name="rolDos"
            component={() => (
              <span className="text-danger">{errors.rolDos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="rolTres">Rol 3</label>
          <Field
            className="form-control"
            type="text"
            name="rolTres"
            autoComplete="off"
            value={values.rolTres}
            onChange={handleChange}
          />
          <ErrorMessage
            name="rolTres"
            component={() => (
              <span className="text-danger">{errors.rolTres}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="rolCuatro">Rol 4</label>
          <Field
            className="form-control"
            type="text"
            name="rolCuatro"
            autoComplete="off"
            value={values.rolCuatro}
            onChange={handleChange}
          />
          <ErrorMessage
            name="rolCuatro"
            component={() => (
              <span className="text-danger">{errors.rolCuatro}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="rolCinco">Rol 5</label>
          <Field
            className="form-control"
            type="text"
            name="rolCinco"
            autoComplete="off"
            value={values.rolCinco}
            onChange={handleChange}
          />
          <ErrorMessage
            name="rolCinco"
            component={() => (
              <span className="text-danger">{errors.rolCinco}</span>
            )}
          />
        </div>
      </div>
    </div>
  );
};
