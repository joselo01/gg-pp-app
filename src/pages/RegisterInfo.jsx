import React, { useEffect } from "react";
import { Accordion } from "../components/molecules/Accordion";
import { useHistory } from "react-router-dom";
import { Logo } from "../components/atoms/Logo";

export const RegisterInfo = ({ handle }) => {
  useEffect(() => {
    handle(false);
    return () => handle(true);
  }, [handle]);
  const history = useHistory();

  function handleRegister() {
    history.push("/register");
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Logo />
          </div>
          <div className="col-12 col-md-6"></div>

          <div className="content-box-register-info mt-4 col-12">
            <form>
              <div className="col-12">
                <div className="welcome">Gloria da la bienvenida</div>
              </div>
              <div className="col-12">
                <Accordion />
              </div>
            </form>

            <div className="d-grid gap-2 mt-3">
              <button
                onClick={handleRegister}
                type="button"
                className="btn bg-button block subtitle"
              >
                Completar formulario
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
