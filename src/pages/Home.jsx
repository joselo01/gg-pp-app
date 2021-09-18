import React from "react";
import { BoxLoginHome } from "../components/organisms/BoxLoginHome";
import { Logo } from "../components/atoms/Logo";
import { Footer } from "../components/molecules/Footer";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <Logo />
          </div>
          <div className="col-5 col-12 col-md-5">
            <BoxLoginHome />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
