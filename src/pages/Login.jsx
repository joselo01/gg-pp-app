import React, { useEffect } from "react";
import { BoxLogin } from "../components/organisms/BoxLogin";
import { Logo } from "../components/atoms/Logo";
import { useHistory } from "react-router";

export const Login = ({ handle }) => {
  useEffect(() => {
    handle(false);
    return () => handle(true);
  }, [handle]);

  const history = useHistory();
  function handleHome() {
    history.push("/home");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <Logo />
            
            <button onClick={handleHome} className="btn btn-secondary mt-4"><i className="bi bi-chevron-double-left"></i> Volver al home </button>
          </div>
          <div className="col-12 col-md-5">
            <BoxLogin />
          </div>
        </div>
      </div>
    </>
  );
};
