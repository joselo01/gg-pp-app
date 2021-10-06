import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataMasterAdmin = ({ errors }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="mt-2 mb-2">
          <h5>Gestión de cuenta</h5>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <label for="pais">Acreedor</label>
          <Field
            className="form-control"
            type="text"
            name="acreedor"
            autoComplete="off"
          />
          <ErrorMessage
            name="acreedor"
            component={() => (
              <span className="text-danger">{errors.acreedor}</span>
            )}
          />
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <label for="pais">Documentos de identificación fiscal</label>
          <Field
            className="form-control"
            type="text"
            name="idFiscalTres"
            autoComplete="off"
          />
          <ErrorMessage
            name="idFiscalTres"
            component={() => (
              <span className="text-danger">{errors.idFiscalTres}</span>
            )}
          />
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <label for="pais">Grupo de cuentas</label>
          <Field
            className="form-control"
            type="text"
            name="gpoCuentas"
            autoComplete="off"
          />
          <ErrorMessage
            name="gpoCuentas"
            component={() => (
              <span className="text-danger">{errors.gpoCuentas}</span>
            )}
          />
        </div>

        <div className="form-group col-md-12 col-12 mb-3">
          <label for="pais"> Cuenta asociada</label>
          <Field
            className="form-control"
            type="text"
            name="cuentaAsociada"
            autoComplete="off"
          />
          <ErrorMessage
            name="cuentaAsociada"
            component={() => (
              <span className="text-danger">{errors.cuentaAsociada}</span>
            )}
          />
        </div>
        <div className="mt-2 mb-2">
          <h5>Pagos Cotab. Financ</h5>
        </div>
        <div className="mt-2 mb-2">
          <h5>Datos de pago</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Condición de pago</label>
          <Field
            className="form-control"
            type="text"
            name="condicionPagoDos"
            autoComplete="off"
          />
          <ErrorMessage
            name="condicionPagoDos"
            component={() => (
              <span className="text-danger">{errors.condicionPagoDos}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais"> Verificación de facturas dobles o abonos</label>
          <Field
            className="form-control"
            type="text"
            name="verificacionFacturas"
            autoComplete="off"
          />
          <ErrorMessage
            name="verificacionFacturas"
            component={() => (
              <span className="text-danger">{errors.verificacionFacturas}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Vías de pago</label>
          <Field
            className="form-control"
            type="text"
            name="viasPago"
            autoComplete="off"
          />
          <ErrorMessage
            name="viasPago"
            component={() => (
              <span className="text-danger">{errors.viasPago}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Banco Propio</label>
          <Field
            className="form-control"
            type="text"
            name="bancoPropio"
            autoComplete="off"
          />
          <ErrorMessage
            name="bancoPropio"
            component={() => (
              <span className="text-danger">{errors.bancoPropio}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 offset-md-6 col-12 mb-3">
          <label for="pais">Clave agrup.</label>
          <Field
            className="form-control"
            type="text"
            name="claveAgrup"
            autoComplete="off"
          />
          <ErrorMessage
            name="claveAgrup"
            component={() => (
              <span className="text-danger">{errors.claveAgrup}</span>
            )}
          />
        </div>
        <div className="mt-2 mb-2">
          <h5>Información sobre la retención</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">País de retención</label>
          <Field
            className="form-control"
            type="text"
            name="paisRetencion"
            autoComplete="off"
          />
          <ErrorMessage
            name="paisRetencion"
            component={() => (
              <span className="text-danger">{errors.paisRetencion}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Tp.retención</label>
          <Field
            className="form-control"
            type="text"
            name="tpRetencion"
            autoComplete="off"
          />
          <ErrorMessage
            name="tpRetencion"
            component={() => (
              <span className="text-danger">{errors.tpRetencion}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Ind.retención</label>
          <Field
            className="form-control"
            type="text"
            name="indRetencion"
            autoComplete="off"
          />
          <ErrorMessage
            name="indRetencion"
            component={() => (
              <span className="text-danger">{errors.indRetencion}</span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Sujeto</label>
          <Field
            className="form-control"
            type="text"
            name="sujeto"
            autoComplete="off"
          />
          <ErrorMessage
            name="sujeto"
            component={() => (
              <span className="text-danger">{errors.sujeto}</span>
            )}
          />
        </div>
        <div className="mt-2 mb-2">
          <h5>Condiciones</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Grupo esquema proveedor</label>
          <Field
            className="form-control"
            type="text"
            name="grupoEsquemaProveedor"
            autoComplete="off"
          />
          <ErrorMessage
            name="grupoEsquemaProveedor"
            component={() => (
              <span className="text-danger">
                {errors.grupoEsquemaProveedor}
              </span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Verific.Fact.Base EM</label>
          <Field
            className="form-control"
            type="text"
            name="verificacionFactruraBase"
            autoComplete="off"
          />
          <ErrorMessage
            name="verificacionFactruraBase"
            component={() => (
              <span className="text-danger">
                {errors.verificacionFactruraBase}
              </span>
            )}
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <label for="pais">Verific.Fact.Rel.Serv</label>
          <Field
            className="form-control"
            type="text"
            name="verificacionFactRelServ"
            autoComplete="off"
          />
          <ErrorMessage
            name="verificacionFactRelServ"
            component={() => (
              <span className="text-danger">
                {errors.verificacionFactRelServ}
              </span>
            )}
          />
        </div>
      </div>
    </div>
  );
};
