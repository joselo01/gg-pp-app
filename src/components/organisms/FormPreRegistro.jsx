import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { preRegisterAddNew } from "../../redux/actions/PreRegister";
import { useForm } from "../../hooks/useForm";

export const FormPreRegistro = ({ handleValidated }) => {
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

  const [formValues, handleInputChange] = useForm({
    idFiscal: "",
    pais: "",
    empresa: "",
    comprador: "",
    comentario: "",
  });

  const dispatch = useDispatch();

  const { idFiscal, pais, empresa, comprador, comentario } = formValues;

  

  const handleSubmit = (e) => {
    const rubrosFilter = isChecked.filter((item) => item.select === true);
    console.log("rubrosFilter", rubrosFilter);
    e.preventDefault();
    dispatch(
      preRegisterAddNew(
        idFiscal,
        pais,
        rubrosFilter,
        empresa,
        comprador,
        comentario
      )
    );
    handleValidated();
  };

  return (
    <form name="form" className="form-group" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-12 mb-3">
          <label htmlFor="idFiscal">N° Id. Fiscal</label>
          <input
            className="form-control"
            type="text"
            name="idFiscal"
            autoComplete="off"
            value={idFiscal}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-12 mb-3">
          <label htmlFor="pais">País</label>
          <select
            className="form-select"
            name="pais"
            value={pais}
            onChange={handleInputChange}
          >
            {paises.map((item) => {
              return (
                <option name="pais" key={item.value} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group col-md-12 col-12 mb-3">
          <label htmlFor="rubro">Seleccione Rubro</label>
          <div className="multiselect">
            <div className="selectBox"></div>
            <div className="checkboxes overflow-auto">
              {isChecked.map((d) => (
                <div key={d.id}>
                  <span>
                    <input
                      onChange={(event) => {
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
                      checked={d.select}
                    ></input>
                  </span>
                  <span>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="form-group col-12 mb-3">
          <label htmlFor="empresa">Empresa a postular</label>
          <select
            className="form-select"
            name="empresa"
            value={empresa}
            onChange={handleInputChange}
          >
            {empresas.map((item) => {
              return (
                <option name="empresa" key={item.value} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group col-12 mb-3">
          <label htmlFor="comprador">Comprador responsable</label>
          <select
            className="form-select"
            name="comprador"
            value={comprador}
            onChange={handleInputChange}
          >
            {compradores.map((item) => {
              return (
                <option name="comprador" key={item.value} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group col-12 mb-3">
          <label htmlFor="comentario">Contacto</label>
          <textarea
            className="form-control"
            name="comentario"
            disabled={disabled}
            value={comentario}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn bg-button block subtitle">
            Validar
          </button>
        </div>
      </div>
    </form>
  );
};
