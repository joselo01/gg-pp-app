import { Label, Input } from "reactstrap";
import React from "react";

export const FormDataShopping = ({formik}) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        {/* <div className="mt-2 mb-2">
                                    <h5>Información fiscal</h5>
                                </div> */}

        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="orgCompras">Org. de Compras</Label>
          <Input
            className="form-control"
            type="text"
            name="orgCompras"
            value={formik.values.orgCompras}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.orgCompras}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="sociedad">Sociedad</Label>
          <Input
            className="form-control"
            type="text"
            name="sociedad"
            value={formik.values.sociedad}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.sociedad}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="grpoTesoreria">Grupo de Tesoreria</Label>
          <Input
            className="form-control"
            type="text"
            name="gpoTesoreria"
            value={formik.values.gpoTesoreria}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.gpoTesoreria}</span>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="respGastosTransferencia">Responsable de gastos transferencia</Label>
          <Input
            className="form-control"
            type="text"
            name="respGastosTransferencia"
            value={formik.values.respGastosTransferencia}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.respGastosTransferencia}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="transporteFrontera">Modo de transporte frontera</Label>
          <Input
            className="form-control"
            type="text"
            name="transporteFrontera"
            value={formik.values.transporteFrontera}
            onChange={formik.handleChange}
            autoComplete="off"
          />
         <span className="text-danger">{formik.errors.transporteFrontera}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="condicionPagoCompras">Condicion de pago compras</Label>
          <Input
            className="form-control"
            type="text"
            name="condicionPagoCompras"
            value={formik.values.condicionPagoCompras}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.condicionPagoCompras}</span>
        </div>
      </div>
    </div>
  );
};
