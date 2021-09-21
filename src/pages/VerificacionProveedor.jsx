import React from "react";
import { useHistory } from "react-router-dom";
import { Logo } from "../components/atoms/Logo";
import { Footer } from "../components/molecules/Footer";

export const VerificacionProveedor = () => {
  const history = useHistory();

  function handlePassword() {
    history.push("/create_password");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6"></div>

          <div className="content-box-internas mt-4">
            <form>
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text">
                    Ingresar código de verificación
                  </span>
                  <input
                    type="text"
                    aria-label="First name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="d-grid gap-2">
                    <button onClick={() => console.log('hizo click')}
                      type="button"
                      className="btn bg-button block subtitle"
                    >
                      CANCELAR
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2">
                    <button onClick={handlePassword}
                      type="button"
                      className="btn bg-button block subtitle"
                    >
                      ENVIAR
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
