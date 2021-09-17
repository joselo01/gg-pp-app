import React from "react";
import { BoxLogin } from "../components/organisms/BoxLogin";
import { Logo } from "../components/atoms/Logo";

export const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <Logo />
        </div>
        <div className="col-5">
          <BoxLogin />
        </div>
      </div>
    </>
  );
};
