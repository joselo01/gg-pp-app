import React from "react";
import { Carousel } from "../organisms/Carousel";


export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-box-top">
          <div className="container">
            <div className="text-center">
              Antes de registrarse, ingresar a "Requisitos para el registro del
              proveedor"
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-light">
                Crea tu cuenta
              </button>
              <button type="button" className="btn btn-light ms-2">
                Inicio de sesión
              </button>
            </div>
          </div>
        </div>
        <div className="footer-box-bottom">
          <div className="container">
            <Carousel/>
          </div>
        </div>
      </footer>
    </>
  );
};
