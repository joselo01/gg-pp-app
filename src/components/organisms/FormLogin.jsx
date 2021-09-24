import React, { useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import ReCAPTCHA from "react-google-recaptcha";
export const FormLogin = () => {
  const [formValues, handleInputChange] = useForm({
    usuario: "",
    password: "",
    user: "",
  });

  const user = [
    { value: "", label: "Seleccione una opcion" },
    { value: "1", label: "Usuario 1" },
    { value: "2", label: "Usuario 2" },
  ];

  const { usuario, password } = formValues;
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  //const [usuarioValido, cambiarUsuarioValido] = useState(false);
  const [errorUsuario, setErrorUsuario] = useState(null);
  const [errorPassword, setErrorPasword] = useState(null);
  const [errorSelect, seterrorSelect] = useState("");

  const captcha = useRef(null);
  const onCaptcha = () => {
    if (captcha.current.getValue()) {
      cambiarCaptchaValido(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      //cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      //cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }

    if (!usuario.trim()) {
      setErrorUsuario("El campo usuario es requerido");
      return;
    } else if (!/\S+@\S+\.\S+/.test(usuario)) {
      setErrorUsuario("Ingrese un email valido.");
      return;
    }

    if (!password.trim()) {
      setErrorPasword("El campo password es requerido");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
        password
      )
    ) {
      setErrorPasword("Ingrese un formato Valido");
      return;
    }

    if (!errorSelect.trim()) {
      seterrorSelect("Debe selecconar una opción");
      return;
    }

    setErrorUsuario(null);
    setErrorPasword(null);
    seterrorSelect("");

    console.log(formValues);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <input
              className="form-control"
              type="text"
              name="usuario"
              placeholder="Usuario"
              autoComplete="off"
              value={usuario}
              onChange={handleInputChange}
              onBlur={() => setErrorUsuario(null)}
            />
            {errorUsuario ? (
              <span className="text-danger">{errorUsuario}</span>
            ) : null}
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
              onBlur={() => setErrorPasword(null)}
            />
            {errorPassword ? (
              <span className="text-danger">{errorPassword}</span>
            ) : null}
          </div>
          <div className="form-group mb-2">
            <select
              className="form-select"
              name="user"
              onChange={handleInputChange}
            >
              {user.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            {errorSelect ? (
              <span className="text-danger">{errorSelect}</span>
            ) : null}
          </div>
          <div className="text-center mb-2">
            <a href="/#" className="text-decoration-none text-secondary forgot">
              Olvidé mi contraseña
            </a>
          </div>
          <div className="recaptcha">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LebBoUcAAAAAAQrF5ZeUIRn7vGecVJ5FEG5A5Ls"
              onChange={onCaptcha}
            />
          </div>
          {captchaValido === false && (
            <div className="text-danger">Por favor acepta el captcha</div>
          )}
          <div className="d-grid gap-2">
            <button type="submit" className="btn bg-button block subtitle">
              INGRESAR
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          <a href="/#" className="text-decoration questions">
            PREGUNTAS FRECUENTES
          </a>
        </div>
      </div>
      {/* {usuarioValido && console.log("Redirect o cambia vista")} */}
    </>
  );
};
