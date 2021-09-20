import React from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "../organisms/Carousel";
import c1 from "../../images/logo_empresas/AgroAurora.jpg";
import c2 from "../../images/logo_empresas/Agroazucar.jpg";
import c3 from "../../images/logo_empresas/Andina.jpg";

export const Footer = () => {
  const history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  function handleRegister() {
    history.push("/");
  }


  return (
    <>
      <footer>
        <div className="footer-box-top">
          <div className="container">
            <div className="text-center subtitle">
              Antes de registrarse, ingresar a "
              <a href="#/">Requisitos para el registro del proveedor</a>"
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleRegister}
                className="btn btn-light text-button"
              >
                Crea tu cuenta
              </button>
              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-light ms-2 text-button"
              >
                Inicio de sesión
              </button>
            </div>
          </div>
        </div>
        <div className="footer-box-bottom">
          <div className="container">
            <Carousel show={5}>
              <img src={c1} alt="placeholder" />
              <img src={c2} alt="placeholder" />
              <img src={c3} alt="placeholder" />
              <img src={c1} alt="placeholder" />
              <img src={c2} alt="placeholder" />
              <img src={c3} alt="placeholder" />
              <img src={c1} alt="placeholder" />
              <img src={c2} alt="placeholder" />
              <img src={c3} alt="placeholder" />
              <img src={c1} alt="placeholder" />
              <img src={c2} alt="placeholder" />
              <img src={c3} alt="placeholder" />
            </Carousel>
          </div>
        </div>
      </footer>
    </>
  );
};
