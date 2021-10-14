import React, { useState } from "react";
import { Logo } from "../components/atoms/Logo";
import { useDispatch } from "react-redux";
import { startRegister } from "../redux/actions/auth";
import { useForm } from "../hooks/useForm";

export const CreatePassword = ({handle}) => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    password: "",
    passwordConfirmation: ""
   
  });

  const {nombre, email, password, passwordConfirmation} = formValues;

  const [errorUsuario, setErrorUsuario] = useState(null);
  const [errorPassword, setErrorPasword] = useState(null);

/*   useEffect(() => {
    handle(false);
    return () => handle(true);
  }, [handle]); */

  const handleSubmit = (e) => {
    e.preventDefault();

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

    if (password !== passwordConfirmation) {
      setErrorPasword('Las contraseñas deben ser iguales');
      return;
    }

    dispatch(startRegister(email, password, nombre));
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6"></div>

          <div className="content-box-internas mt-4 col-12">
          <form
                  name="form"
                  className="form-group"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">Email de usuario</span>
                      <input
                        type="email"
                        name="email"
                        aria-label="First name"
                        className="form-control"
                        value={email}
                        onChange={handleInputChange}
                      />
                       {errorUsuario ? (
                            <span className="text-danger">{errorUsuario}</span>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">Crear contraseña</span>
                      <input
                        type="password"
                        name="password"
                        aria-label="First name"
                        className="form-control"
                        value={password}
                        onChange={handleInputChange}
                      />
                       {errorPassword ? (
                            <span className="text-danger">{errorPassword}</span>
                          ) : null}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group mt-2">
                      <span className="input-group-text">
                        Confirmar contraseña
                      </span>
                      <input
                        type="password"
                        name="passwordConfirmation"
                        aria-label="First name"
                        className="form-control"
                        value={passwordConfirmation}
                        onChange={handleInputChange}
                      />
                       {errorPassword ? (
                            <span className="text-danger">{errorPassword}</span>
                          ) : null}
                      </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6">
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-prev block subtitle"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid gap-2">
                        <button
                          /* data-bs-toggle="modal"
                          data-bs-target="#exampleModal" */
                          type="submit"
                          className="btn btn-next block subtitle"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
          </div>
        </div>
      </div>

      {/* <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              Se ha creado su usuario de administrador, se activará cuando pase
              por las aprobaciones de las areas correspondientes Una vez creada
              su cuenta, podrá crear usuarios secundarios a través del protal
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
