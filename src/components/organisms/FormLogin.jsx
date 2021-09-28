import React, { useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
//import { setError, removeError } from "../../redux/actions/ui";
export const FormLogin = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui)

  //const { msgError } = useSelector((state) => state.ui);
  //console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    email: "user@gmail.com",
    password: "Lima@2021",
    options: "",
  });
  const { email, password, options } = formValues;

  let users = [
    { value: "1", label: "Usuario 1" },
    { value: "2", label: "Usuario 2" },
  ];

  users.unshift({
    value: "",
    label: "[ Seleccione una opicón ]",
  });

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
    dispatch(startLoginEmailPassword(email, password));
    if (captcha.current.getValue()) {
      //cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      //cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }

    if (!email.trim()) {
      setErrorUsuario("El campo usuario (email) es requerido");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
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

    if (options === "") {
      seterrorSelect("Debe seleccionar una opción");
      return;
    }
    setErrorUsuario(null);
    setErrorPasword(null);
    seterrorSelect("");

    /* if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    } */
  };

 /*  const isFormValid = () => {
    if (email.trim()) {
      dispatch(setError("Corrreo incorrecto"));
      return;
    }

    if (password.trim()) {
      dispatch(setError("Password incorrecto"));
      return;
    }
    dispatch(removeError());
    return true;
  }; */

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {/* {msgError && <span className="text-danger">{msgError}</span>} */}
          <div className="form-group mb-2">
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
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
              placeholder="Password"
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
              name="options"
              onChange={handleInputChange}
              value={options}
              onBlur={() => seterrorSelect("")}
            >
              {users.map((item) => {
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
            <Link to="/#" className="text-decoration-none text-secondary forgot">
              Olvidé mi contraseña
            </Link>
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
            <button type="submit" className="btn bg-button block subtitle" disabled={loading}>
              INGRESAR
            </button>
          </div>
        </form>

        <div className="text-center mt-2">
          <Link to="/#" className="text-decoration questions">
            PREGUNTAS FRECUENTES
          </Link>
        </div>
      </div>
    </>
  );
};
