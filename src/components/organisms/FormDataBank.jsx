import { Label, Input } from "reactstrap";
import React from "react";

export const FormDataBank = ({ formik }) => {
  return (
    <div className="card mb-3">
      <div className="card-body row">
        <div className="mt-2 mb-2">
          <h5>Información fiscal</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="idFiscalDos">
            Documento de identificación fiscal
          </Label>
          <Input
            className="form-control"
            type="text"
            name="idFiscalDos"
            autoComplete="off"
            value={formik.values.idFiscalDos}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.idFiscalDos}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="tipoDocumento">Tipo de documento</Label>
          <Input
            className="form-control"
            type="text"
            name="tipoDocumento"
            autoComplete="off"
            value={formik.values.tipoDocumento}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.tipoDocumento}</span>
        </div>
        <div className="mt-2 mb-2">
          <h5>Datos bancarios</h5>
        </div>
        <div className="table-responsive">
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
        </div>

        <div className="mt-2 mb-2">
          <h5>Datos de venta</h5>
        </div>

        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="vendedorPrincipal">
            Nombre del vendedor principal
          </Label>
          <Input
            className="form-control"
            type="text"
            name="vendedorPrincipal"
            autoComplete="off"
            value={formik.values.vendedorPrincipal}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.vendedorPrincipal}</span>
        </div>

        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="telefonoVendedor">Teléfono del vendedor</Label>
          <Input
            className="form-control"
            type="text"
            name="telefonoVendedor"
            autoComplete="off"
            value={formik.values.telefonoVendedor}
            onChange={formik.handleChange}
          />
         <span className="text-danger">{formik.errors.telefonoVendedor}</span>
        </div>

        <div className="mt-2 mb-2">
          <h5>Condiciones</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="moneda">Moneda de pedido</Label>
          <Input
            className="form-control"
            type="text"
            name="moneda"
            autoComplete="off"
            value={formik.values.moneda}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.moneda}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="condicionPago">Condiciones de pago</Label>
          <Input
            className="form-control"
            type="text"
            name="condicionPago"
            autoComplete="off"
            value={formik.values.condicionPago}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.condicionPago}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="incoterms">INCOTERMS</Label>
          <Input
            className="form-control"
            type="text"
            name="incoterms"
            autoComplete="off"
            value={formik.values.incoterms}
            onChange={formik.handleChange}
          />
           <span className="text-danger">{formik.errors.incoterms}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="incotermsDos">INCOTERMS 2/Lugar de entrega</Label>
          <Input
            className="form-control"
            type="text"
            name="incotermsDos"
            autoComplete="off"
            value={formik.values.incotermsDos}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.incotermsDos}</span>
        </div>
      </div>
    </div>
  );
};
