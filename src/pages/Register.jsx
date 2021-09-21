import React, { useState } from "react";
import { Logo } from "../components/atoms/Logo";
import { FormPreRegistro } from "../components/organisms/FormPreRegistro";
import { FormRegistro } from "../components/organisms/FormRegistro";

export const Register = () => {
  const [isValidated, setIsValidated] = useState(false);

  const handleValidated = () => {
    setIsValidated(!isValidated);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Logo />
          </div>
          <div className="col-12 col-md-6"></div>
          <div className="content-box-register-info mt-4 col-12">
            {!isValidated ? (
              <div className="row">
                <div className="col-12 col-md-10 col-lg-6 mx-auto">
                  <FormPreRegistro handleValidated={handleValidated} />
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <FormRegistro handleValidated={handleValidated} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
