import React from "react";
import { useHistory } from "react-router-dom";
import OwlCarousel from "../organisms/OwlCarousel";


export const Footer = ({footerFlag}) => {
  const history = useHistory();
  function handleLogin() {
    history.push("/login");
  }

  function handleRegister() {
    history.push("/register-info");
  }

  return (
    <>
      {
        (footerFlag) ? <footer>
        <div className="footer-box-top">
          <div className="container">
            <div className="text-center subtitle">
            Si no estas registrado como proveedor, selecciona en "Crea tu cuenta", si ya tienes una cuenta slecciona "Inicio de sesión
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
           <OwlCarousel/>
          </div>
        </div>
      </footer> : null
      } 
    </>
  );
};