import React from "react";
import { Label, Input } from "reactstrap";

export const FormDataMasterAdmin = ({ formik }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="mt-2 mb-2">
          <h5>Gestión de cuenta</h5>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="pais">Acreedor</Label>
          <Input
            className="form-control"
            type="text"
            name="acreedor"
            value={formik.values.acreedor}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.acreedor}</span>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="pais">Documentos de identificación fiscal</Label>
          <Input
            className="form-control"
            type="text"
            name="idFiscalTres"
            value={formik.values.idFiscalTres}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.idFiscalTres}</span>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="pais">Grupo de cuentas</Label>
          <Input
            className="form-control"
            type="text"
            name="gpoCuentas"
            value={formik.values.gpoCuentas}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.gpoCuentas}</span>
        </div>

        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="pais"> Cuenta asociada</Label>
          <Input
            className="form-control"
            type="text"
            name="cuentaAsociada"
            value={formik.values.cuentaAsociada}
            onChange={formik.handleChange}
            autoComplete="off"
          />
         <span className="text-danger">{formik.errors.cuentaAsociada}</span>
        </div>
        <div className="mt-2 mb-2">
          <h5>Pagos Cotab. Financ</h5>
        </div>
        <div className="mt-2 mb-2">
          <h5>Datos de pago</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Condición de pago</Label>
          <Input
            className="form-control"
            type="text"
            name="condicionPagoDos"
            value={formik.values.condicionPagoDos}
            onChange={formik.handleChange}
            autoComplete="off"
          />
         <span className="text-danger">{formik.errors.condicionPagoDos}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais"> Verificación de facturas dobles o abonos</Label>
          <Input
            className="form-control"
            type="text"
            name="verificacionFacturas"
            value={formik.values.verificacionFacturas}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.verificacionFacturas}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Vías de pago</Label>
          <Input
            className="form-control"
            type="text"
            name="viasPago"
            value={formik.values.viasPago}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.viasPago}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Banco Propio</Label>
          <Input
            className="form-control"
            type="text"
            name="bancoPropio"
            value={formik.values.bancoPropio}
            onChange={formik.handleChange}
            autoComplete="off"
          />
         <span className="text-danger">{formik.errors.bancoPropio}</span>
        </div>
        <div className="form-group col-md-6 offset-md-6 col-12 mb-3">
          <Label htmlFor="pais">Clave agrup.</Label>
          <Input
            className="form-control"
            type="text"
            name="claveAgrup"
            value={formik.values.claveAgrup}
            onChange={formik.handleChange}
            autoComplete="off"
          />
         <span className="text-danger">{formik.errors.claveAgrup}</span>
        </div>
        <div className="mt-2 mb-2">
          <h5>Información sobre la retención</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">País de retención</Label>
          <Input
            className="form-control"
            type="text"
            name="paisRetencion"
            value={formik.values.paisRetencion}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.paisRetencion}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Tp.retención</Label>
          <Input
            className="form-control"
            type="text"
            name="tpRetencion"
            value={formik.values.tpRetencion}
            onChange={formik.handleChange}
            autoComplete="off"
          />
           <span className="text-danger">{formik.errors.tpRetencion}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Ind.retención</Label>
          <Input
            className="form-control"
            type="text"
            name="indRetencion"
            value={formik.values.indRetencion}
            onChange={formik.handleChange}
            autoComplete="off"
          />
         <span className="text-danger">{formik.errors.indRetencion}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Sujeto</Label>
          <Input
            className="form-control"
            type="text"
            name="sujeto"
            value={formik.values.sujeto}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.sujeto}</span>
        </div>
        <div className="mt-2 mb-2">
          <h5>Condiciones</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Grupo esquema proveedor</Label>
          <Input
            className="form-control"
            type="text"
            name="grupoEsquemaProveedor"
            value={formik.values.grupoEsquemaProveedor}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.grupoEsquemaProveedor}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Verific.Fact.Base EM</Label>
          <Input
            className="form-control"
            type="text"
            name="verificacionFactruraBase"
            value={formik.values.verificacionFactruraBase}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.verificacionFactruraBase}</span>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Verific.Fact.Rel.Serv</Label>
          <Input
            className="form-control"
            type="text"
            name="verificacionFactRelServ"
            value={formik.values.verificacionFactRelServ}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          <span className="text-danger">{formik.errors.verificacionFactRelServ}</span>
        </div>
      </div>
    </div>
  );
};
