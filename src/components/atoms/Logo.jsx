import React from "react";
import { useHistory } from "react-router-dom";
import LogoProveedores from "../../images/logo_proveedores.png";

export const Logo = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <>
      <div className="logo">
        <img onClick={handleClick} src={LogoProveedores} alt="Logo Proveedores" />
      </div>
    </>
  );
};
