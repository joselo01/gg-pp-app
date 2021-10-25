import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TabItem } from "../atoms/TabItem";
import { FormDataAdmin } from "./FormDataAdmin";
import { FormDataGeneral } from "./FormDataGeneral";
import { FormDataBank } from "./FormDataBank";
import { FormDataCompanyDocs } from "./FormDataCompanyDocs";
import { FormDataShopping } from "./FormDataShopping";
import { FormDataMasterAdmin } from "./FormDataMasterAdmin";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Label, Input } from "reactstrap";

export const FormRegistro = () => {
  const history = useHistory();

  const { nombre } = useSelector((state) => state.auth);

  const { idFiscal, pais, rubro, empresa, comprador, comentario } = useSelector(
    (state) => state.preRegistro
  );

  const isLogged = localStorage.getItem("isLogged") === "true";

  function handleVerification() {
    history.push("/supplier_verification");
  }

  const formik = useFormik({
    initialValues: {
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
    },

    validationSchema: Yup.object({
      // Datos del registrador
      /*  titulo: Yup.string().required("El campo titulo es requerido"),
      nombres: Yup.string().required("El campo nombre es requerido"),
      apellidos: Yup.string().required("El campo apellidos es requerido"),
      email: Yup.string()
        .email("Ingrese un email valido")
        .required("El campo email es requerido"), */
      //GeneralData
      /*  tratamiento: Yup.string().required("El campo tratamiento es requerido"),
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
        .matches(
          /^[a-z0-9]+$/i,
          "El campo solo debe contener números y letras"
        ),
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
      ), */
      //Companydocuments
      /*  file: Yup.mixed()
        .required("El campo adjunto es requerido"), */
      // OrgShopping
      /*  orgCompras: Yup.string().required(
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
        .matches(
          /^[a-z0-9]+$/i,
          "El campo solo debe contener números y letras"
        ),
      gpoCuentas: Yup.string().required(
        "El campo grupo de cuentas es requerido"
      ),
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
      ), */
    }),
    onSubmit: async (formData) => {
      const { titulo, nombres, apellidos, email } = formData;
      try {
        handleVerification();
      } catch (error) {
        console.log(console.error);
      }
    },
  });

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
    },
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
    },
  ];

  const [tabList] = useState(
    nombre == undefined
      ? tabsOnboard
      : nombre === "Comprador"
      ? tabsComprador
      : nombre === "Admin"
      ? tabsAdmin
      : tabsProveedor
  );

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Form
        name="form"
        className="form-group row"
        onSubmit={formik.handleSubmit}
      >
        <div className="mt-2">
          <h5>Datos del registrador</h5>
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="idFiscal">N° Id. Fiscal</Label>
          <Input
            className="form-control"
            type="text"
            name="idFiscal"
            autoComplete="off"
            value={idFiscal}
            readOnly
          />
        </div>
        <div className="form-group col-md-6 col-12 mb-3">
          <Label htmlFor="pais">Pais</Label>
          <Input
            type="text"
            className="form-control"
            name="pais"
            value={pais}
            readOnly
          ></Input>
        </div>

        <div className="col-md-6 col-12">
          <div className="form-group col-md-12 col-12 mb-3">
            <Label htmlFor="rubro">Rubros</Label>
            {rubro.map((r, i) => {
              return (
                <Input
                  key={i}
                  type="text"
                  className="form-control"
                  value={r.value}
                  readOnly
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group col-md-12 col-12 mb-3">
            <Label htmlFor="empresa">Empresa a postular</Label>
            <Input
              type="text"
              className="form-control"
              name="empresa"
              value={empresa}
              readOnly
            ></Input>
          </div>
          <div className="form-group col-md-12 col-12 mb-3">
            <Label htmlFor="comprador">Comprador responsable</Label>
            <Input
              type="text"
              className="form-control"
              name="comprador"
              readOnly
              value={comprador}
            ></Input>
          </div>
          <div className="form-group col-md-12 col-12 mb-3">
            <Label htmlFor="comentario">Contacto o comentario</Label>
            <Input
              type="textarea"
              className="form-control"
              name="comentario"
              value={comentario}
              readOnly
            ></Input>
          </div>
        </div>
        <div className="alert alert-success">
          Complete los datos solicitados en cada una de las siguientes pestañas
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
            0: <FormDataAdmin formik={formik} />,
            1: <FormDataGeneral formik={formik} />,
            2: <FormDataBank formik={formik} />,
            3: <FormDataCompanyDocs formik={formik} />,
            4: <FormDataShopping formik={formik} />,
            5: <FormDataMasterAdmin formik={formik} />,
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
              <Button type="submit" className="btn btn-next block subtitle">
                Enviar
              </Button>
            </div>
          </div>
        )}
      </Form>
    </>
  );
};
