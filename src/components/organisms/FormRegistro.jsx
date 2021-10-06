import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import { StepItem } from "../atoms/StepItem";
import { TabItem } from "../atoms/TabItem";
import { FormDataAdmin } from "./FormDataAdmin";
import { FormDataGeneral } from "./FormDataGeneral";
import { FormDataBank } from "./FormDataBank";
import { FormDataCompanyDocs } from "./FormDataCompanyDocs";
import { FormDataShopping } from "./FormDataShopping";
import { FormDataMasterAdmin } from "./FormDataMasterAdmin";

//import PreviewFile from "./PreviewFile";

export const FormRegistro = () => {

  //const fileRef = useRef(null);

  const history = useHistory();

  function handleVerification() {
    history.push("/supplier_verification");
  }

  const tabsProvider = [
    {
      name: "Datos de usuario administrador",
    },
    {
      name: "Datos generales",
    },
    {
      name: "Datos bancarios/comerciales",
    },
    {
      name: "Documentos de su empresa",
    },
  ];

  const tabsPurchaser = [
    {
      name: "Datos de usuario administrador",
    },
    {
      name: "Datos generales",
    },
    {
      name: "Datos bancarios/comerciales",
    },
    {
      name: "Documentos de su empresa",
    },
    {
      name: "Datos de Compras",
    },
    // PERFIL DATA MASTER
    {
      name: "Administrador de datos maestros",
    },
  ];

  const initialValues = {
    idFiscal: "0000000000",
    pais: "Perú",
    tipo: "1",
    rubro: ["rubro", "rubro 2"],
    empresa: "empresa",
    comprador: "comprador",
    comentario: "comentarios",

    // administrador
    titulo: "",
    nombres: "",
    apellidos: "",
    email: "",

    //GeneralData
    tratamiento: "",
    razonSocial: "",
    nombreComercial: "",
    calle: "",
    numero: "",
    distrito: "",
    provincia: "",
    codigoPostal: "",
    country: "",
    region: "",
    idioma: "",
    telefonoUno: "",
    telefonoDos: "",
    telefonoTres: "",
    telefonoCuatro: "",
    telefonoCinco: "",
    emailUno: "",
    emailDos: "",
    emailTres: "",
    emailCuatro: "",
    emailCinco: "",
    rolUno: "",
    rolDos: "",
    rolTres: "",
    rolCuatro: "",
    rolCinco: "",

    // BankData
    idFiscalDos: "",
    tipoDocumento: "",
    vendedorPrincipal: "",
    telefonoVendedor: "",
    moneda: "",
    condicionPago: "",
    incoterms: "",
    incotermsDos: "",

    //Companydocuments
    //file: null,

    // OrgShopping
    orgCompras: "",
    sociedad: "",
    gpoTesoreria: "",
    respGastosTransferencia: "",
    transporteFrontera: "",
    condicionPagoCompras: "",

    //AccountManagement
    acreedor: "",
    idFiscalTres: "",
    gpoCuentas: "",
    cuentaAsociada: "",
    condicionPagoDos: "",
    verificacionFacturas: "",
    viasPago: "",
    bancoPropio: "",
    claveAgrup: "",
    paisRetencion: "",
    tpRetencion: "",
    indRetencion: "",
    sujeto: "",
    grupoEsquemaProveedor: "",
    verificacionFactruraBase: "",
    verificacionFactRelServ: "",
  };

  //const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const RegisterShema = Yup.object().shape({
    // initialValue
    idFiscal: Yup.string()
      .required("EL campo ID Fiscal es requerido.")
      .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
    pais: Yup.string().required("EL campo pais es requerido"),
    rubro: Yup.array()
      .min(1, "El campo rubro es requerido.")
      .required("El campo rubro es requerido.")
      .nullable(),
    empresa: Yup.string().required("EL campo empresa es requerido"),
    comprador: Yup.string().required("EL campo comprador es requerido"),
    comentario: Yup.string().required("EL campo comentario es requerido"),

    //GeneralData
    tratamiento: Yup.string().required("El campo tratamiento es requerido"),
    razonSocial: Yup.string().required("El campo razon social es requerido"),
    nombreComercial: Yup.string().required(
      "El campo nombre comercial es requerido"
    ),
    calle: Yup.string().required("El campo calle es requerido"),
    numero: Yup.string()
      .required("El campo número es requerido")
      .matches(/^[0-9]+$/, "el campo debe ser númerico"),
    distrito: Yup.string().required("El campo distrito es requerido"),
    provincia: Yup.string().required("El campo Provincia es requerido"),
    codigoPostal: Yup.string()
      .required("El campo código postal es requerido")
      .matches(
        /^[a-z0-9]+$/i,
        "El campo solo debe contener números y/o letras"
      ),
    country: Yup.string().required("El campo país es requerido"),
    region: Yup.string().required("El campo región es requerido"),
    idioma: Yup.string().required("El campo idioma es requerido"),
    telefonoUno: Yup.string()
      .required("El campo teléfono es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "El número de teléfono no es válido"
      ),
    telefonoDos: Yup.string()
      .required("El campo teléfono es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "El número de teléfono no es válido"
      ),
    telefonoTres: Yup.string()
      .required("El campo teléfono es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "El número de teléfono no es válido"
      ),
    telefonoCuatro: Yup.string()
      .required("El campo teléfono es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "El número de teléfono no es válido"
      ),
    telefonoCinco: Yup.string()
      .required("El campo teléfono es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "El número de teléfono no es válido"
      ),
    emailUno: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
    emailDos: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
    emailTres: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
    emailCuatro: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
    emailCinco: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),
    rolUno: Yup.string().required("El campo rol 1 es requerido"),
    rolDos: Yup.string().required("El campo rol 2 es requerido"),
    rolTres: Yup.string().required("El campo rol 3 es requerido"),
    rolCuatro: Yup.string().required("El campo rol 4 es requerido"),
    rolCinco: Yup.string().required("El campo rol 5 es requerido"),

    // BankData
    idFiscalDos: Yup.string()
      .required("EL campo ID Fiscal es requerido.")
      .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
    tipoDocumento: Yup.string()
      .required("El campo tipo de documento es requerido")
      .matches(
        /^[a-z0-9]+$/i,
        "El campo solo debe contener números y/o letras"
      ),
    vendedorPrincipal: Yup.string().required(
      "El campo vendedor principal es requerido"
    ),
    telefonoVendedor: Yup.string()
      .required("El campo teléfono vendedor es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "El número de teléfono no es válido"
      ),
    moneda: Yup.string().required("El campo mneda es requerido"),
    condicionPago: Yup.string().required(
      "El campo condición de pago es requerido"
    ),
    incoterms: Yup.string().required("El campo incoterms es requerido"),
    incotermsDos: Yup.string().required(
      "El campo incoterms (lugar de entrega) es requerido"
    ),
    //Companydocuments
    //file: Yup.mixed().required("El campo adjunto es requerido"),
    /* .test("FILE_SIZE", "Uploaded file is too big.", (value) => !value || (value && value.size <= 1024 * 1024))
    .test("FILE_FORMAT", "Uploaded file has unsupported format.", (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))), */

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

    //AccountManagement
    acreedor: Yup.string().required(
      "El campo organización de compras es requerido"
    ),
    idFiscalTres: Yup.string()
      .required("EL campo ID Fiscal es requerido.")
      .matches(/^[a-z0-9]+$/i, "El campo solo debe contener números y letras"),
    gpoCuentas: Yup.string().required("El campo grupo de cuentas es requerido"),
    cuentaAsociada: Yup.string()
      .required("El campo cuenta asociada es requerido")
      .matches(/^[0-9]+$/),
    condicionPagoDos: Yup.string().required(
      "El campo condición de pago es requerido"
    ),
    verificacionFacturas: Yup.string().required(
      "El campo verificacion de facturas es requerido"
    ),
    viasPago: Yup.string().required("El campo vias de pago es requerido"),
    bancoPropio: Yup.string().required("El campo banco propio es requerido"),
    claveAgrup: Yup.string().required(
      "El campo clave de agrupación es requerido"
    ),
    paisRetencion: Yup.string().required(
      "El campo país de rtencion es requerido"
    ),
    tpRetencion: Yup.string().required(
      "El campo tipo de retención es requerido"
    ),
    indRetencion: Yup.string().required(
      "El campo indicación de retención es requerido"
    ),
    sujeto: Yup.string().required("El campo sujeto es requerido"),
    grupoEsquemaProveedor: Yup.string().required(
      "El campo grupo esquema de proveedor es requerido"
    ),
    verificacionFactruraBase: Yup.string().required(
      "El campo verificación de facturas es requerido"
    ),
    verificacionFactRelServ: Yup.string().required(
      "El campo verificación de facturas relacionadas al servicio es requerido"
    ),
  });

  const [tabList] = useState(
    tabsProvider
  );

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterShema}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          handleVerification();
          //console.log(valores);
          console.log("envio de formulario");
        }}
      >
        {({ errors, handleSubmit }) => (
          <Form name="form" className="form-group row" onSubmit={handleSubmit}>
            <div className="mt-2">
              <h5>Datos del registrador</h5>
            </div>
            <div className="form-group col-md-6 col-12 mb-3">
              <label htmlFor="idFiscal">N° Id. Fiscal</label>
              <Field
                className="form-control"
                type="text"
                name="idFiscal"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="form-group col-md-6 col-12 mb-3">
              <label htmlFor="pais">Pais</label>
              <Field
                as="select"
                className="form-select"
                name="pais"
                disabled={true}
              >
                <option value="1">Perú</option>
                <option value="2">Chile</option>
              </Field>
            </div>

            <div className="col-md-6 col-12">
              <div className="form-group col-md-12 col-12 mb-3">
                <label for="pais">Rubro</label>
                <Field
                  component="select"
                  className="form-select height-multiple"
                  name="rubro"
                  multiple={true}
                  disabled={true}
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group col-md-12 col-12 mb-3">
                <label for="pais">Empresa a postular</label>
                <Field
                  as="select"
                  className="form-select"
                  name="empresa"
                  disabled={true}
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
              <div className="form-group col-md-12 col-12 mb-3">
                <label for="pais">Comprador responsable</label>
                <Field
                  as="select"
                  className="form-select"
                  name="comprador"
                  disabled={true}
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
              {/* <div className="form-group col-md-12 col-12 mb-3">
                <label for="pais">Contacto o comentario</label>
                <Field
                  as="textarea"
                  className="form-control"
                  name="comentario"
                  readOnly
                ></Field>
              </div> */}
            </div>

            <ul className="nav nav-tabs nav-justified">
              {tabList.map((tab, index) => (
                <TabItem
                  key={tab.name}
                  selectedTab={tabIndex}
                  index={index}
                  item={tab}
                  handleTabChange={handleTabChange}
                />
              ))}
            </ul>

            {
              {
                0: (
                  <FormDataAdmin
                    errors={errors}
                  />
                ),
                1: (
                  <FormDataGeneral
                    errors={errors}
                  />
                ),
                2: (
                  <FormDataBank
                    errors={errors}
                  />
                ),
                3: (
                  <FormDataCompanyDocs
                    errors={errors}
                  />
                ),
                4: (
                  <FormDataShopping
                    errors={errors}
                  />
                ),
                5: (
                  <FormDataMasterAdmin
                    errors={errors}
                  />
                ),
              }[tabIndex]
            }

            <div className="row justify-content-md-center">
              {/* {
                        stepIndex > 0 ?
                            <div className="col-12 col-md-6 mb-3">
                                <div className="d-grid gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-prev block subtitle"
                                        onClick={() => handleStepChange(index => index - 1)}
                                    >
                                        Volver
                                    </button>
                                </div>
                            </div>
                            : <></>
                    } */}
              <div className="col-12 col-md-6">
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-next block subtitle"
                    onClick={handleVerification}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
