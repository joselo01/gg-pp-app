import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TabItem } from "../atoms/TabItem";
import { FormDataAdmin } from "./FormDataAdmin";
import { FormDataGeneral } from "./FormDataGeneral";
import { FormDataBank } from "./FormDataBank";
import { FormDataCompanyDocs } from "./FormDataCompanyDocs";
import { FormDataShopping } from "./FormDataShopping";
import { FormDataMasterAdmin } from "./FormDataMasterAdmin";
import { useSelector } from "react-redux";

export const FormRegistro = () => {
  const history = useHistory();

  const isLogged = localStorage.getItem("isLogged") === "true";
  const { nombre } = useSelector((state) => state.auth);

  console.log(nombre);

  function handleVerification() {
    history.push("/supplier_verification");
  }

  const tabsOnboard = [
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

  const tabsComprador = [
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
    }
  ];

  const tabsAdmin = [
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
    {
      name: "Administrador de datos maestros",
    },
  ];

  const tabsProveedor = [
    {
      name: "Datos generales",
    },
    {
      name: "Datos bancarios/comerciales",
    },
    {
      name: "Documentos de su empresa",
    }
  ];

  const initialValues = {
    idFiscal: "",
    pais: "",
    rubro: [],
    empresa: "",
    comprador: "",
    comentario: "",

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
  };

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

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

    // Datos del registrador

    titulo: Yup.string().required("El campo titulo es requerido"),
    nombres: Yup.string().required("El campo nombre es requerido"),
    apellidos: Yup.string().required("El campo apellidos es requerido"),
    email: Yup.string()
      .email("Ingrese un email valido")
      .required("El campo email es requerido"),

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
    moneda: Yup.string().required("El campo moneda es requerido"),
    condicionPago: Yup.string().required(
      "El campo condición de pago es requerido"
    ),
    incoterms: Yup.string().required("El campo incoterms es requerido"),
    incotermsDos: Yup.string().required(
      "El campo incoterms (lugar de entrega) es requerido"
    ),

    //Companydocuments
    file: Yup.mixed()
      .required("El campo adjunto es requerido")
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
  });

  const [tabList] = useState(
    nombre == undefined
      ? tabsOnboard : nombre === "Comprador"
        ? tabsComprador : nombre === "Admin"
          ? tabsAdmin : tabsProveedor);

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>

      <Formik
        initialValues={initialValues}
        /* validationSchema={RegisterShema} */
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          handleVerification();
          console.log(valores);
          console.log('enviar formulario')
        }}
      >
        {({ errors, values, setFieldValue, handleSubmit, handleChange }) => (
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
                value={values.idFiscal}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="form-group col-md-6 col-12 mb-3">
              <label htmlFor="pais">Pais</label>
              <Field
                as="select"
                className="form-select"
                name="pais"
                value={values.pais}
                onChange={handleChange}
                disabled={true}
              >
                <option value="1">Perú</option>
                <option value="2">Chile</option>
              </Field>
            </div>

            <div className="col-md-6 col-12">
              <div className="form-group col-md-12 col-12 mb-3">
                <label htmlFor="rubro">Rubro</label>
                <Field
                  as="select"
                  className="form-select height-multiple"
                  name="rubro"
                  value={values.rubro}
                  multiple={true}
                  onChange={handleChange}
                  disabled={true}
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group col-md-12 col-12 mb-3">
                <label htmlFor="empresa">Empresa a postular</label>
                <Field
                  as="select"
                  className="form-select"
                  name="empresa"
                  value={values.empresa}
                  onChange={handleChange}
                  disabled={true}
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
              <div className="form-group col-md-12 col-12 mb-3">
                <label htmlFor="comprador">Comprador responsable</label>
                <Field
                  as="select"
                  className="form-select"
                  name="comprador"
                  value={values.comprador}
                  onChange={handleChange}
                  disabled={true}
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                </Field>
              </div>
              <div className="form-group col-md-12 col-12 mb-3">
                <label htmlFor="comentario">Contacto o comentario</label>
                <Field
                  as="textarea"
                  className="form-control"
                  name="comentario"
                  value={values.comentario}
                  onChange={handleChange}
                  readOnly
                ></Field>
              </div>
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
                    values={values}
                    handleChange={handleChange}
                  />
                ),
                1: (
                  <FormDataGeneral
                    errors={errors}
                    values={values}
                    handleChange={handleChange}
                  />
                ),
                2: (
                  <FormDataBank
                    errors={errors}
                    values={values}
                    handleChange={handleChange}
                  />
                ),
                3: (
                  <FormDataCompanyDocs
                    errors={errors}
                    setFieldValue={setFieldValue}
                    values={values}

                  />
                ),
                4: (<FormDataShopping />),
                5: <FormDataMasterAdmin />
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
            </div>

            {!isLogged && (
              <div className="col-12">
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-next block subtitle">
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
