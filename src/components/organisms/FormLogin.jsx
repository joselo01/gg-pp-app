import React from "react";
import { useForm } from "../../hooks/useForm";
export const FormLogin = () => {
  const [formValues, handleInputChange] = useForm({
    usuario: "",
    password: "",
    options: ""
  });

  const { usuario, password, options } = formValues;
  return (
    <>
      <form>
        <div className="form-group mb-2">
          <input
            className="form-control"
            type="text"
            name="usuario"
            placeholder="Usuario"
            autoComplete="off"
            value={usuario}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            name="password"
            autoComplete="off"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <select className="form-select" aria-label="Default select example"
            name="options"
            value={options}
            onChange={handleInputChange}
          >
            <option selected>Selecciona una opción</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            
          </select>
        </div>
        <div className="text-center mb-2">
          <a href="/#" className="text-decoration-none text-secondary forgot">
            Olvidé mi contraseña
          </a>
        </div>
        <div className="recaptcha"></div>
        <div className="d-grid gap-2">
          <button type="button" className="btn bg-button block subtitle">
            INGRESAR
          </button>
        </div>
      </form>
      <div className="text-center mt-2">
        <a href="/#" className="text-decoration questions">
          PREGUNTAS FRECUENTES
        </a>
      </div>
    </>
  );
};
