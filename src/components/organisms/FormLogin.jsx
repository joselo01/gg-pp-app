import React, { useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import ReCAPTCHA from "react-google-recaptcha";
export const FormLogin = () => {
  const [formValues, handleInputChange] = useForm({
    usuario: "",
    password: "",
    options: "",
  });

  const { usuario, password, options } = formValues;

  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);

  const captcha = useRef(null);
  const onCaptcha = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robbot");
      cambiarCaptchaValido(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      console.log('Por favor acepta el captcha');
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }
  }
   return (
    <>
      {!usuarioValido &&
        <div>
          <form onSubmit={submit}>
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
              <select
                className="form-select"
                aria-label="Default select example"
                name="options"
                value={options}
                onChange={handleInputChange}
              >
                <option defaultValue>Selecciona una opción</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
            </div>
            <div className="text-center mb-2">
              <a
                href="/#"
                className="text-decoration-none text-secondary forgot"
              >
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
            {captchaValido === false && <div className="text-danger">Por favor acepta el captcha</div>}
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
      }
      {usuarioValido &&
        console.log('Redirect o cambia vista')
      }
    </>
  );
};
