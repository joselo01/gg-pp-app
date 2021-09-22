import React from "react";
import { Logo } from "../components/atoms/Logo";

export const CreatePassword = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6"></div>

          <div className="content-box-internas mt-4 col-12">
            <form>
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text">Crear contraseña</span>
                  <input
                    type="password"
                    aria-label="First name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mt-2">
                  <span className="input-group-text">Confirmar contraseña</span>
                  <input
                    type="password"
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
                      className="btn btn-prev block subtitle"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      type="button"
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
     

      <div
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
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
