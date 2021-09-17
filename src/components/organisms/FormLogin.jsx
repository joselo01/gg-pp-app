import React from "react";
import { Input } from "../atoms/Inputs/Input";
import { Password } from "../atoms/Inputs/Password";
import { Buttons } from "../atoms/Buttons/Buttons";

export const FormLogin = () => {
  return (
    <>
      <form>
        <div className="form-group mb-3">
          <Input />
        </div>
        <div className="form-group mb-3">
          <Password />
        </div>
        <div className="text-center mb-3">
          <a
            href="/#"
            className="text-decoration-none text-secondary fw-normal"
          >
            Olvidé mi contraseña
          </a>
        </div>
        <div className="recaptcha"></div>
        <Buttons />
        <div className="text-center mt-3">
          <a href="/#" className="text-decoration text-secondary fw-normal">
            PREGUNTAS FRECUENTES
          </a>
        </div>
      </form>
    </>
  );
};
