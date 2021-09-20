import React from "react";
import { Logo } from "../components/atoms/Logo";
import { Footer } from "../components/molecules/Footer";

export const VerificacionProveedor = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6"></div>

          <div className="content-box-internas mt-5">
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
              <div className="row mt-5">
                <div className="col-6">
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      className="btn bg-button block subtitle"
                    >
                      CANCELAR
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2">
                    <button
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
      <Footer />
    </>
  );
};
