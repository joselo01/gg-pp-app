import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword } from "../../redux/actions/auth";
export const FormLogin = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  let users = [
    { value: "1", label: "Usuario 1" },
    { value: "2", label: "Usuario 2" },
  ];

  users.unshift({
    value: "",
    label: "[ Seleccione una opción ]",
  });

  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [errorUsuario, setErrorUsuario] = useState(null);
  const [errorPassword, setErrorPasword] = useState(null);
  const [errorSelect, seterrorSelect] = useState("");

  const handleSelectChange = () => (e) => {
    let val = e.target.value;
    localStorage.setItem("id_rol", `${val}`);
  };

  const captcha = useRef(null);
  const onCaptcha = () => {
    if (captcha.current.getValue()) {
      cambiarCaptchaValido(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let optForm = document.forms["form"]["options"].selectedIndex;
    if (optForm === null || optForm === 0) {
      seterrorSelect("Debe seleccionar una opción en el campo");
      return false;
    }

    if (captcha.current.getValue()) {
      cambiarCaptchaValido(true);
    } else {
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

    setErrorUsuario(null);
    setErrorPasword(null);
    seterrorSelect(null);

    dispatch(startLoginEmailPassword(email, password));
  };

  return (
    <>
      <div>
        <form name="form" onSubmit={handleSubmit}>
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
              onChange={handleSelectChange()}
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
            <button
              type="submit"
              className="btn bg-button block subtitle"
              disabled={loading}
            >
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
