import React from "react";
import { FormLogin } from "./FormLogin";

export const BoxLogin = () => {
  return (
    <>
      <div className="content-box-login">
        <div className="text-center">
          <div className="mb-1 title">ACCEDE AL PORTAL</div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn bg-button block subtitle mb-1 mt-1"            >
              Usuario Cliente Gloria
            </button>
            <div></div>
          </div>
          <div className="mb-3 subtitle">Ingrese su usuario y contraseña</div>
        </div>
        <FormLogin />
      </div>
    </>
  );
};
