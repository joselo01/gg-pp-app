import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { preRegisterAddNew } from "../../redux/actions/PreRegister";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, Label, Input } from "reactstrap";

export const FormPreRegistro = ({ handleValidated }) => {
  
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      idFiscal: "",
      pais: "",
      rubrosFilter: [],
      empresa: "",
      comprador: "",
      comentario: "",
    },
    validationSchema: Yup.object({
      idFiscal: Yup.string().required("El campo idFiscal es requerido"),
      pais: Yup.string().required("El campo Pais es requerido"),
      rubrosFilter: Yup.array().required("At least one checkbox is required"),
      empresa: Yup.string().required("El campo Empresa es requerido"),
      comprador: Yup.string().required("El campo Comprador es requerido"),
      comentario: Yup.string().required("El campo Comentario es requerido"),
    }),
    onSubmit: async (formData) => {
      const rubrosFilter = isChecked.filter((item) => item.select === true);
      console.log("rubrosFilter", rubrosFilter);
      const {idFiscal, pais, empresa, comprador, comentario} = formData;
      try { 
        const resultAction = await dispatch(preRegisterAddNew(
            idFiscal,
            pais,
            rubrosFilter,
            empresa,
            comprador,
            comentario
          ));
        console.log(resultAction);
      } catch (error) {
        console.log(console.error);
      }
    },
  });

  let paises = [
    { value: "", label: "[Seleccione Pais]" },
    { value: "1", label: "Perú" },
    { value: "2", label: "Chile" },
    { value: "3", label: "Argentina" },
    { value: "4", label: "Brasil" },
    { value: "5", label: "México" },
  ];

  let empresas = [
    { value: "", label: "[Seleccione Empresa]" },
    { value: "1", label: "Empresa 1" },
    { value: "2", label: "Empresa 2" },
    { value: "3", label: "Empresa 3" },
    { value: "4", label: "Empresa 4" },
    { value: "5", label: "Empresa 5" },
  ];

  let compradores = [
    { value: "", label: "[Seleccione Comprador]" },
    { value: "1", label: "Comprador 1" },
    { value: "2", label: "Comprador 2" },
    { value: "3", label: "Comprador 3" },
    { value: "4", label: "Comprador 4" },
    { value: "5", label: "Comprador 5" },
  ];

  const [disabled, setDisabled] = useState(false);
  const [isChecked, setisChecked] = useState([]);

  useEffect(() => {
    let isChecked = [
      { id: 1, value: "Rubro 1" },
      { id: 2, value: "Rubro 2" },
      { id: 3, value: "Rubro 3" },
      { id: 4, value: "Rubro 4" },
    ];

    setisChecked(
      isChecked.map((d) => {
        return {
          select: false,
          id: d.id,
          value: d.value,
        };
      })
    );
  }, []);
  return (
    <Form name="form" className="form-group" onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="form-group col-12 mb-3">
          <Label htmlFor="idFiscal">N° Id. Fiscal</Label>
          <Input
            className="form-control"
            type="text"
            name="idFiscal"
            autoComplete="off"
            value={formik.values.idFiscal}
            onChange={formik.handleChange}
          />
          
          <span className="text-danger">{formik.errors.idFiscal}</span>
          
        </div>
        <div className="form-group col-12 mb-3">
          <Label htmlFor="pais">País</Label>
          <Input
            type="select"
            className="form-select"
            name="pais"
            value={formik.values.pais}
            onChange={formik.handleChange}
          >
            {paises.map((item) => {
              return (
                <option name="pais" key={item.value} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </Input>

          <span className="text-danger">{formik.errors.pais}</span>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <Label htmlFor="rubro">Seleccione Rubro</Label>
          <div className="multiselect">
            <div className="selectBox"></div>
            <div className="checkboxes overflow-auto">
              {isChecked.map((d) => (
                <div key={d.id}>
                  <span>
                    <Input
                      onChange={formik.handleChange, (event) => {
                        let checked = event.target.checked;
                        setisChecked(
                          isChecked.map((data) => {
                            if (d.id === data.id) {
                              data.select = checked;
                            }

                            return data;
                          })
                        );
                      }}
                      type="checkbox"
                      name={'rubrosFilter[]'}
                      value={formik.values.rubrosFilter}
                      checked={d.select}
                    />
                  </span>
                  <span>{d.value}</span>
                  
                </div>
              ))}
            </div>
            <span className="text-danger">{formik.errors.rubrosFilter}</span>
            
          </div>
        </div>
        <div className="form-group col-12 mb-3">
          <Label htmlFor="empresa">Empresa a postular</Label>
          <Input
            type="select"
            className="form-select"
            name="empresa"
            value={formik.values.empresa}
            onChange={formik.handleChange}
          >
            {empresas.map((item) => {
              return (
                <option name="empresa" key={item.value} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </Input>
          <span className="text-danger" >{formik.errors.empresa}</span>

          
        </div>
        <div className="form-group col-12 mb-3">
          <Label htmlFor="comprador">Comprador responsable</Label>
          <Input
            type="select"
            className="form-select"
            name="comprador"
            value={formik.values.comprador}
            onChange={formik.handleChange}
          >
            {compradores.map((item) => {
              return (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </Input>

          <span className="text-danger" >{formik.errors.comprador}</span>
        </div>
        <div className="form-group col-12 mb-3">
          <Label htmlFor="comentario">Contacto y/o Comentario</Label>
          <Input
            type="textarea"
            className="form-control"
            name="comentario"
            disabled={disabled}
            value={formik.values.comentario}
            onChange={formik.handleChange}
          />
          
          <span className="text-danger" >{formik.errors.comentario}</span>
        </div>
        <div className="d-grid gap-2">
          <Button type="submit" className="btn bg-button block subtitle">
            Validar
          </Button>
        </div>
      </div>
    </Form>
  );
};
