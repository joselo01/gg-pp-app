import React from "react";
import { Label, Input } from "reactstrap";

export const FormDataAdmin = ({formik}) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2 mb-2">
          <h5>Datos del registrador</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="titulo">Título</Label>
          <Input
            className="form-control"
            type="text"
            name="titulo"
            autoComplete="off"
            value={formik.values.titulo}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.titulo}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="nombres">Nombres</Label>
          <Input
            className="form-control"
            type="text"
            name="nombres"
            autoComplete="off"
            value={formik.values.nombres}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.nombres}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="apellidos">Apellidos</Label>
          <Input
            className="form-control"
            type="text"
            name="apellidos"
            autoComplete="off"
            value={formik.values.apellidos}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.apellidos}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="email"> Email de usuario administrador:</Label>
          <Input
            className="form-control"
            type="text"
            name="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.email}</span>
        </div>
      </div>
    </div>
  );
};
