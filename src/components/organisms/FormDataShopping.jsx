import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup";


export const FormDataShopping = () => {
  const initialValues = {
    // OrgShopping
    orgCompras: "",
    sociedad: "",
    gpoTesoreria: "",
    respGastosTransferencia: "",
    transporteFrontera: "",
    condicionPagoCompras: "",
  }

  const RegisterShema = Yup.object().shape({
    // OrgShopping
    orgCompras: Yup.string().required(
      "El campo organización de compras es requerido"
    ),
    sociedad: Yup.string().required("El campo sociedad es requerido"),
    gpoTesoreria: Yup.string().required(
      "El campo grupo de tesoreria es requerido"
    ),
    respGastosTransferencia: Yup.string().required(
      "El campo responsable de gastos de transferencia es requerido"
    ),
    transporteFrontera: Yup.string().required(
      "El campo transporte de frontera es requerido"
    ),
    condicionPagoCompras: Yup.string().required(
      "El campo condiciones de pago es requerido"
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterShema}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        // handleVerification();
        console.log(valores);
      }}
    >
      {({ errors, valores, setFieldValue, handleSubmit }) => (
        <Form name="form" className="form-group" onSubmit={handleSubmit}>
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
                    <span className="text-danger">
                      {errors.orgCompras}
                    </span>
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
                    <span className="text-danger">
                      {errors.sociedad}
                    </span>
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
                    <span className="text-danger">
                      {errors.gpoTesoreria}
                    </span>
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
                    <span className="text-danger">
                      {errors.transporteFrontera}
                    </span>
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
                    <span className="text-danger">
                      {errors.condicionPagoCompras}
                    </span>
                  )}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
