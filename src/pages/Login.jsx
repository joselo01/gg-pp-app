import React, { useEffect } from "react";
import { BoxLogin } from "../components/organisms/BoxLogin";
import { Logo } from "../components/atoms/Logo";

export const Login = ({ handle }) => {
  useEffect(() => {
    handle(false);
    return () => handle(true);
  }, [handle]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <Logo />
          </div>
          <div className="col-12 col-md-5">
            <BoxLogin />
          </div>
        </div>
      </div>
    </>
  );
};
