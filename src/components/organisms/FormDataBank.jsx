import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataBank = ({ errors, values, handleChange }) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2 mb-2">
          <h5>Información fiscal</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="idFiscalDos">
            Documento de identificación fiscal
          </label>
          <Field
            className="form-control"
            type="text"
            name="idFiscalDos"
            autoComplete="off"
            value={values.idFiscalDos}
            onChange={handleChange}
          />
          <ErrorMessage
            name="idFiscalDos"
            component={() => (
              <span className="text-danger">{errors.idFiscalDos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="tipoDocumento">Tipo de documento</label>
          <Field
            className="form-control"
            type="text"
            name="tipoDocumento"
            autoComplete="off"
            value={values.tipoDocumento}
            onChange={handleChange}
          />
          <ErrorMessage
            name="tipoDocumento"
            component={() => (
              <span className="text-danger">{errors.tipoDocumento}</span>
            )}
          />
        </div>
        <div className="mt-2 mb-2">
          <h5>Datos bancarios</h5>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">País</th>
              <th scope="col">Banco</th>
              <th scope="col">N° cuenta bancaria</th>
              <th scope="col">Nombre de titular de la cuenta</th>
              <th scope="col">CC</th>
              <th scope="col">N° interbancario</th>
              <th scope="col">Tipo de banco interlocutor</th>
              <th scope="col">N° interbancario</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3].map((item) => (
              <tr key={item}>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-2 mb-2">
          <h5>Datos de venta</h5>
        </div>

        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="vendedorPrincipal">
            Nombre del vendedor principal
          </label>
          <Field
            className="form-control"
            type="text"
            name="vendedorPrincipal"
            autoComplete="off"
            value={values.vendedorPrincipal}
            onChange={handleChange}
          />
          <ErrorMessage
            name="vendedorPrincipal"
            component={() => (
              <span className="text-danger">{errors.vendedorPrincipal}</span>
            )}
          />
        </div>

        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="telefonoVendedor">Teléfono del vendedor</label>
          <Field
            className="form-control"
            type="text"
            name="telefonoVendedor"
            autoComplete="off"
            value={values.telefonoVendedor}
            onChange={handleChange}
          />
          <ErrorMessage
            name="telefonoVendedor"
            component={() => (
              <span className="text-danger">{errors.telefonoVendedor}</span>
            )}
          />
        </div>

        <div className="mt-2 mb-2">
          <h5>Condiciones</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="moneda">Moneda de pedido</label>
          <Field
            className="form-control"
            type="text"
            name="moneda"
            autoComplete="off"
            value={values.moneda}
            onChange={handleChange}
          />
          <ErrorMessage
            name="moneda"
            component={() => (
              <span className="text-danger">{errors.moneda}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="condicionPago">Condiciones de pago</label>
          <Field
            className="form-control"
            type="text"
            name="condicionPago"
            autoComplete="off"
            value={values.condicionPago}
            onChange={handleChange}
          />
          <ErrorMessage
            name="condicionPago"
            component={() => (
              <span className="text-danger">{errors.condicionPago}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="incoterms">INCOTERMS</label>
          <Field
            className="form-control"
            type="text"
            name="incoterms"
            autoComplete="off"
            value={values.incoterms}
            onChange={handleChange}
          />
          <ErrorMessage
            name="incoterms"
            component={() => (
              <span className="text-danger">{errors.incoterms}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label htmlFor="incotermsDos">INCOTERMS 2/Lugar de entrega</label>
          <Field
            className="form-control"
            type="text"
            name="incotermsDos"
            autoComplete="off"
            value={values.incotermsDos}
            onChange={handleChange}
          />
          <ErrorMessage
            name="incotermsDos"
            component={() => (
              <span className="text-danger">{errors.incotermsDos}</span>
            )}
          />
        </div>
      </div>
    </div>
  );
};
