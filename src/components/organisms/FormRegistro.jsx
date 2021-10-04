import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import { StepItem } from "../atoms/StepItem";
import { TabItem } from "../atoms/TabItem";
//import PreviewFile from "./PreviewFile";

export const FormRegistro = ({ handleValidated }) => {
  let idRol = localStorage.getItem("id_rol") ?? "";
  console.log(idRol);

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
    file: null,

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

    // administrador
    titulo: Yup.string().required("El campo titulo es requerido"),
    nombres: Yup.string().required("El campo nombre es requerido"),
    apellidos: Yup.string().required("El campo apellido es requerido"),
    email: Yup.string()
      .required("El campo email es requerido")
      .matches(/\S+@\S+\.\S+/, "Ingrese un email valido"),

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
    idRol === "1" || idRol === "" ? tabsProvider : tabsPurchaser
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
          console.log(valores);
        }}
      >
        {({ errors, valores, setFieldValue, handleSubmit }) => (
          <Form name="form" className="form-group" onSubmit={handleSubmit}>
            <div className="mt-2">
              <h5>Datos del registrador</h5>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">N° Id. Fiscal</span>
              </div>
              <Field
                className="form-control"
                type="text"
                name="idFiscal"
                autoComplete="off"
                readOnly
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">País</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Rubro</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Empresa a postular</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Comprador responsable</span>
              </div>
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Contacto o comentario</span>
              </div>
              <Field
                as="textarea"
                className="form-control"
                name="comentario"
                readOnly
              ></Field>
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
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mt-2 mb-2">
                        <h5>Datos del registrador</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Título</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="titulo"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="titulo"
                          component={() => (
                            <span className="text-danger">{errors.titulo}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Nombres</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="nombres"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="nombres"
                          component={() => (
                            <span className="text-danger">
                              {errors.nombres}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Apellidos</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="apellidos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="apellidos"
                          component={() => (
                            <span className="text-danger">
                              {errors.apellidos}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Email de usuario administrador:
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="email"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component={() => (
                            <span className="text-danger">{errors.email}</span>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ),
                1: (
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mt-2">
                        <h5>Nombre</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Tratamiento</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="tratamiento"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="tratamiento"
                          component={() => (
                            <span className="text-danger">
                              {errors.tratamiento}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Razon Social</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="razonSocial"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="razonSocial"
                          component={() => (
                            <span className="text-danger">
                              {errors.razonSocial}
                            </span>
                          )}
                        />
                      </div>
                      <div className="mt-2 mb-2">
                        <h5>Concepto de búsqueda</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Nombre Comercial
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="nombreComercial"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="nombreComercial"
                          component={() => (
                            <span className="text-danger">
                              {errors.nombreComercial}
                            </span>
                          )}
                        />
                      </div>
                      <div className="mt-2 mb-2">
                        <h5>Dirección de Calle</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Calle</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="calle"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="calle"
                          component={() => (
                            <span className="text-danger">{errors.calle}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Número</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="numero"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="numero"
                          component={() => (
                            <span className="text-danger">{errors.numero}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Distrito/Barrio/Urb/Zona
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="distrito"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="distrito"
                          component={() => (
                            <span className="text-danger">
                              {errors.distrito}
                            </span>
                          )}
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Provincia/Comarca/Condado
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="provincia"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="provincia"
                          component={() => (
                            <span className="text-danger">
                              {errors.provincia}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Código Postal
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="codigoPostal"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="codigoPostal"
                          component={() => (
                            <span className="text-danger">
                              {errors.codigoPostal}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">País</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="country"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="country"
                          component={() => (
                            <span className="text-danger">
                              {errors.country}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Región</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="region"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="region"
                          component={() => (
                            <span className="text-danger">{errors.region}</span>
                          )}
                        />
                      </div>

                      <div className="mt-2 mb-2">
                        <h5>Comunicación</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Idioma</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="idioma"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="idioma"
                          component={() => (
                            <span className="text-danger">{errors.idioma}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Teléfono 1</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="telefonoUno"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="telefonoUno"
                          component={() => (
                            <span className="text-danger">
                              {errors.telefonoUno}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Teléfono 2</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="telefonoDos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="telefonoDos"
                          component={() => (
                            <span className="text-danger">
                              {errors.telefonoDos}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Teléfono 3</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="telefonoTres"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="telefonoTres"
                          component={() => (
                            <span className="text-danger">
                              {errors.telefonoTres}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Teléfono 4</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="telefonoCuatro"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="telefonoCuatro"
                          component={() => (
                            <span className="text-danger">
                              {errors.telefonoCuatro}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Teléfono 5</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="telefonoCinco"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="telefonoCinco"
                          component={() => (
                            <span className="text-danger">
                              {errors.telefonoCinco}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Correo Electrónico 1
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="emailUno"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="emailUno"
                          component={() => (
                            <span className="text-danger">
                              {errors.emailUno}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Correo Electrónico 2
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="emailDos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="emailDos"
                          component={() => (
                            <span className="text-danger">
                              {errors.emailDos}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Correo Electrónico 3
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="emailTres"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="emailTres"
                          component={() => (
                            <span className="text-danger">
                              {errors.emailTres}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Correo Electrónico 4
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="emailCuatro"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="emailCuatro"
                          component={() => (
                            <span className="text-danger">
                              {errors.emailCuatro}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Correo Electrónico 5
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="emailCinco"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="emailCinco"
                          component={() => (
                            <span className="text-danger">
                              {errors.emailCinco}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rol 1</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="rolUno"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="rolUno"
                          component={() => (
                            <span className="text-danger">{errors.rolUno}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rol 2</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="rolDos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="rolDos"
                          component={() => (
                            <span className="text-danger">{errors.rolDos}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rol 3</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="rolTres"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="rolTres"
                          component={() => (
                            <span className="text-danger">
                              {errors.rolTres}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rol 4</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="rolCuatro"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="rolCuatro"
                          component={() => (
                            <span className="text-danger">
                              {errors.rolCuatro}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Rol 5</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="rolCinco"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="rolCinco"
                          component={() => (
                            <span className="text-danger">
                              {errors.rolCinco}
                            </span>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ),
                2: (
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mt-2 mb-2">
                        <h5>Información fiscal</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Documento de identificación fiscal
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="idFiscalDos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="idFiscalDos"
                          component={() => (
                            <span className="text-danger">
                              {errors.idFiscalDos}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Tipo de documento
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="tipoDocumento"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="tipoDocumento"
                          component={() => (
                            <span className="text-danger">
                              {errors.tipoDocumento}
                            </span>
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

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Nombre del vendedor principal
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="vendedorPrincipal"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="vendedorPrincipal"
                          component={() => (
                            <span className="text-danger">
                              {errors.vendedorPrincipal}
                            </span>
                          )}
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Teléfono del vendedor
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="telefonoVendedor"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="telefonoVendedor"
                          component={() => (
                            <span className="text-danger">
                              {errors.telefonoVendedor}
                            </span>
                          )}
                        />
                      </div>

                      <div className="mt-2 mb-2">
                        <h5>Condiciones</h5>
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Moneda de pedido
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="moneda"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="moneda"
                          component={() => (
                            <span className="text-danger">{errors.moneda}</span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Condiciones de pago
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="condicionPago"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="condicionPago"
                          component={() => (
                            <span className="text-danger">
                              {errors.condicionPago}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">INCOTERMS</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="incoterms"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="incoterms"
                          component={() => (
                            <span className="text-danger">
                              {errors.incoterms}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            INCOTERMS 2/Lugar de entrega
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="incotermsDos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="incotermsDos"
                          component={() => (
                            <span className="text-danger">
                              {errors.incotermsDos}
                            </span>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ),
                3: (
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="input-group">
                        {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 1
                                                            </span>
                                                        </div> */}
                        <Field
                          /* ref={fileRef}
                          hidden   */
                          className="form-control"
                          type="file"
                          name="file"
                          /*  onChange={(event) => {
                            setFieldValue('file', event.currentTarget.files[0]);
                          }} */
                        />
                        {/* {valores.file && <PreviewFile file={valores.file}/>}
                        <button onClick={() => {
                            fileRef.current.click();
                        }}>
                            Upload
                        </button> */}
                        <ErrorMessage
                          name="file"
                          component={() => (
                            <span className="text-danger">{errors.file}</span>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ),
                4: (
                  <div className="card mb-3">
                    <div className="card-body">
                      {/* <div className="mt-2 mb-2">
                                    <h5>Información fiscal</h5>
                                </div> */}
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Org. de Compras
                          </span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sociedad</span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Grupo de Tesoreria
                          </span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Responsable de gastos transferencia
                          </span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Modo de transporte frontera
                          </span>
                        </div>
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
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Condicion de pago compras
                          </span>
                        </div>
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
                ),
                5: (
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mt-2 mb-2">
                        <h5>Gestión de cuenta</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Acreedor</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="acreedor"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="acreedor"
                          component={() => (
                            <span className="text-danger">
                              {errors.acreedor}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Documentos de identificación fiscal
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="idFiscalTres"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="idFiscalTres"
                          component={() => (
                            <span className="text-danger">
                              {errors.idFiscalTres}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Grupo de cuentas
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="gpoCuentas"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="gpoCuentas"
                          component={() => (
                            <span className="text-danger">
                              {errors.gpoCuentas}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Cuenta asociada
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="cuentaAsociada"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="cuentaAsociada"
                          component={() => (
                            <span className="text-danger">
                              {errors.cuentaAsociada}
                            </span>
                          )}
                        />
                      </div>
                      <div className="mt-2 mb-2">
                        <h5>Gestión de cuenta</h5>
                      </div>
                      <div className="mt-2 mb-2">
                        <h5>Datos de pago</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Condición de pago
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="condicionPagoDos"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="condicionPagoDos"
                          component={() => (
                            <span className="text-danger">
                              {errors.condicionPagoDos}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Verificación de facturas dobles o abonos
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="verificacionFacturas"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="verificacionFacturas"
                          component={() => (
                            <span className="text-danger">
                              {errors.verificacionFacturas}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Vías de pago</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="viasPago"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="viasPago"
                          component={() => (
                            <span className="text-danger">
                              {errors.viasPago}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Banco propio</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="bancoPropio"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="bancoPropio"
                          component={() => (
                            <span className="text-danger">
                              {errors.bancoPropio}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Clave agrup.</span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="claveAgrup"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="claveAgrup"
                          component={() => (
                            <span className="text-danger">
                              {errors.claveAgrup}
                            </span>
                          )}
                        />
                      </div>
                      <div className="mt-2 mb-2">
                        <h5>Información sobre la retención</h5>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            País de retención
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="paisRetencion"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="paisRetencion"
                          component={() => (
                            <span className="text-danger">
                              {errors.paisRetencion}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Tp. retención
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="tpRetencion"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="tpRetencion"
                          component={() => (
                            <span className="text-danger">
                              {errors.tpRetencion}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Ind. retención
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          type="text"
                          name="indRetencion"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="indRetencion"
                          component={() => (
                            <span className="text-danger">
                              {errors.indRetencion}
                            </span>
                          )}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sujeto</span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Grupo esquema proveedor
                          </span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Verific.Fact.Base EM
                          </span>
                        </div>
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
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Verific.Fact.Rel.Serv
                          </span>
                        </div>
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
                ),
              }[tabIndex]
            }
            {idRol === "1" || idRol === "" ? (
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
                      type="submit"
                      className="btn btn-next block subtitle"
                      /* onClick={handleVerification} */
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
