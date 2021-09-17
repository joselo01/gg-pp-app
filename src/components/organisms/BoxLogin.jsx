import React from "react";
import { FormLogin } from "./FormLogin";

export const BoxLogin = () => {
  return (
    <>
      <div className="content-box-login">
        <div className="text-center">
          <div className="mb-1 fw-bold">ACCEDE AL PORTAL</div>
          <div className="mb-3 fw-normal">Ingrese su usuario y contraseña</div>
        </div>
        <FormLogin />
      </div>
    </>
  );
};
