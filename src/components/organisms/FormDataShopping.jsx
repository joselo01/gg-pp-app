import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataShopping = (errors) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        {/* <div className="mt-2 mb-2">
                                    <h5>Información fiscal</h5>
                                </div> */}

        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Org. de Compras</label>
          <Field
            className="form-control"
            type="text"
            name="orgCompras"
            autoComplete="off"
          />
          <ErrorMessage
            name="orgCompras"
            component={() => (
              <span className="text-danger">{errors.orgCompras}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Sociedad</label>
          <Field
            className="form-control"
            type="text"
            name="sociedad"
            autoComplete="off"
          />
          <ErrorMessage
            name="sociedad"
            component={() => (
              <span className="text-danger">{errors.sociedad}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Grupo de Tesoreria</label>
          <Field
            className="form-control"
            type="text"
            name="grpoTesoreria"
            autoComplete="off"
          />
          <ErrorMessage
            name="grpoTesoreria"
            component={() => (
              <span className="text-danger">{errors.gpoTesoreria}</span>
            )}
          />
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <label for="pais">Responsable de gastos transferencia</label>
          <Field
            className="form-control"
            type="text"
            name="respGastosTransferencia"
            autoComplete="off"
          />
          <ErrorMessage
            name="respGastosTransferencia"
            component={() => (
              <span className="text-danger">
                {errors.respGastosTransferencia}
              </span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Modo de transporte frontera</label>
          <Field
            className="form-control"
            type="text"
            name="transporteFrontera"
            autoComplete="off"
          />
          <ErrorMessage
            name="transporteFrontera"
            component={() => (
              <span className="text-danger">{errors.transporteFrontera}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Condicion de pago compras</label>
          <Field
            className="form-control"
            type="text"
            name="condicionPagoCompras"
            autoComplete="off"
          />
          <ErrorMessage
            name="condicionPagoCompras"
            component={() => (
              <span className="text-danger">{errors.condicionPagoCompras}</span>
            )}
          />
        </div>
      </div>
    </div>
  );
};
