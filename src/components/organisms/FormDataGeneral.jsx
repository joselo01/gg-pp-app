import { Label, Input } from "reactstrap";
import React from "react";

export const FormDataGeneral = ({ formik }) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2">
          <h5>Nombre</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="tratamiento">Tratamiento</Label>
          <Input
            className="form-control"
            type="text"
            name="tratamiento"
            autoComplete="off"
            value={formik.values.tratamiento}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.tratamiento}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="razonSocial">Razon Social</Label>
          <Input
            className="form-control"
            type="text"
            name="razonSocial"
            autoComplete="off"
            value={formik.values.razonSocial}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.razonSocial}</span>
        </div>
        <div className="mt-2 mb-2">
          <h5>Concepto de búsqueda</h5>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="nombreComercial">Nombre Comercial</Label>
          <Input
            className="form-control"
            type="text"
            name="nombreComercial"
            autoComplete="off"
            value={formik.values.nombreComercial}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.nombreComercial}</span>
        </div>
        <div className="mt-2 mb-2">
          <h5>Dirección de Calle</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="calle">Calle</Label>
          <Input
            className="form-control"
            type="text"
            name="calle"
            autoComplete="off"
            value={formik.values.calle}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.calle}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="numero">Número</Label>
          <Input
            className="form-control"
            type="text"
            name="numero"
            autoComplete="off"
            value={formik.values.numero}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.numero}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="distrito">Distrito/Barrio/Urb/Zona</Label>
          <Input
            className="form-control"
            type="text"
            name="distrito"
            autoComplete="off"
            value={formik.values.distrito}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.distrito}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="provincia">Provincia/Comarca/Condado</Label>
          <Input
            className="form-control"
            type="text"
            name="provincia"
            autoComplete="off"
            value={formik.values.provincia}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.provincia}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="codigoPostal"> Código Postal</Label>
          <Input
            className="form-control"
            type="text"
            name="codigoPostal"
            autoComplete="off"
            value={formik.values.codigoPostal}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.codigoPostal}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="country">País</Label>
          <Input
            className="form-control"
            type="text"
            name="country"
            autoComplete="off"
            value={formik.values.country}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.country}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="region">Región</Label>
          <Input
            className="form-control"
            type="text"
            name="region"
            autoComplete="off"
            value={formik.values.region}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.region}</span>
        </div>

        <div className="mt-2 mb-2">
          <h5>Comunicación</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="idioma">Idioma</Label>
          <Input
            className="form-control"
            type="text"
            name="idioma"
            autoComplete="off"
            value={formik.values.idioma}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.idioma}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="telefonoUno">Teléfono 1</Label>
          <Input
            className="form-control"
            type="text"
            name="telefonoUno"
            autoComplete="off"
            value={formik.values.telefonoUno}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.telefonoUno}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="telefonoDos">Teléfono 2</Label>
          <Input
            className="form-control"
            type="text"
            name="telefonoDos"
            autoComplete="off"
            value={formik.values.telefonoDos}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.telefonoDos}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="telefonoTres">Teléfono 3</Label>
          <Input
            className="form-control"
            type="text"
            name="telefonoTres"
            autoComplete="off"
            value={formik.values.telefonoTres}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.telefonoTres}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="telefonoCuatro">Teléfono 4</Label>
          <Input
            className="form-control"
            type="text"
            name="telefonoCuatro"
            autoComplete="off"
            value={formik.values.telefonoCuatro}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.telefonoCuatro}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="telefonoCinco">Teléfono 5</Label>
          <Input
            className="form-control"
            type="text"
            name="telefonoCinco"
            autoComplete="off"
            value={formik.values.telefonoCinco}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.telefonoCinco}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="emailUno">Correo Electrónico 1</Label>
          <Input
            className="form-control"
            type="text"
            name="emailUno"
            autoComplete="off"
            value={formik.values.emailUno}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.emailUno}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="emailDos">Correo Electrónico 2</Label>
          <Input
            className="form-control"
            type="text"
            name="emailDos"
            autoComplete="off"
            value={formik.values.emailDos}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.emailDos}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="emailTres">Correo Electrónico 3</Label>
          <Input
            className="form-control"
            type="text"
            name="emailTres"
            autoComplete="off"
            value={formik.values.emailTres}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.emailTres}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="emailCuatro">Correo Electrónico 4</Label>
          <Input
            className="form-control"
            type="text"
            name="emailCuatro"
            autoComplete="off"
            value={formik.values.emailCuatro}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.emailCuatro}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="emailCinco">Correo Electrónico 5</Label>
          <Input
            className="form-control"
            type="text"
            name="emailCinco"
            autoComplete="off"
            value={formik.values.emailCinco}
            onChange={formik.handleChange}
          />
           <span className="text-danger">{formik.errors.emailCinco}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="rolUno">Rol 1</Label>
          <Input
            className="form-control"
            type="text"
            name="rolUno"
            autoComplete="off"
            value={formik.values.rolUno}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.rolUno}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="rolDos">Rol 2</Label>
          <Input
            className="form-control"
            type="text"
            name="rolDos"
            autoComplete="off"
            value={formik.values.rolDos}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.rolDos}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="rolTres">Rol 3</Label>
          <Input
            className="form-control"
            type="text"
            name="rolTres"
            autoComplete="off"
            value={formik.values.rolTres}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.rolTres}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="rolCuatro">Rol 4</Label>
          <Input
            className="form-control"
            type="text"
            name="rolCuatro"
            autoComplete="off"
            value={formik.values.rolCuatro}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.rolCuatro}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="rolCinco">Rol 5</Label>
          <Input
            className="form-control"
            type="text"
            name="rolCinco"
            autoComplete="off"
            value={formik.values.rolCinco}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.rolCinco}</span>
        </div>
      </div>
    </div>
  );
};
