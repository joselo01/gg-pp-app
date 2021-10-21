import React from "react";
import OwlCaousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import c1 from "../../images/logo_empresas/01.jpg";
import c2 from "../../images/logo_empresas/02.jpg";
import c3 from "../../images/logo_empresas/03.jpg";
import c4 from "../../images/logo_empresas/04.jpg";
import c5 from "../../images/logo_empresas/05.jpg";
import c6 from "../../images/logo_empresas/06.jpg";
import c7 from "../../images/logo_empresas/07.jpg";
import c8 from "../../images/logo_empresas/08.jpg";
import c9 from "../../images/logo_empresas/09.jpg";
import c10 from "../../images/logo_empresas/10.jpg";
import c11 from "../../images/logo_empresas/11.jpg";
import c12 from "../../images/logo_empresas/12.jpg";
import c13 from "../../images/logo_empresas/13.jpg";
import c14 from "../../images/logo_empresas/14.jpg";
import c15 from "../../images/logo_empresas/15.jpg";
import c16 from "../../images/logo_empresas/16.jpg";
import c17 from "../../images/logo_empresas/17.jpg";
import c18 from "../../images/logo_empresas/18.jpg";
import c19 from "../../images/logo_empresas/19.jpg";
import c20 from "../../images/logo_empresas/20.jpg";
import c21 from "../../images/logo_empresas/21.jpg";
import c22 from "../../images/logo_empresas/22.jpg";
import c23 from "../../images/logo_empresas/23.jpg";

export default function OwlCarousel() {

  return (
    <OwlCaousel className="owl-theme" items="10" autoPlay={true} nav={true} dots={false} loop={true} margin={5}>
      <div className="item">
        <img src={c1} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c2} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c3} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c4} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c5} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c6} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c7} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c8} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c9} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c10} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c11} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c12} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c13} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c14} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c15} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c16} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c17} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c18} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c19} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c20} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c21} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c22} alt="placeholder" />
      </div>
      <div className="item">
        <img src={c23} alt="placeholder" />
      </div>
    </OwlCaousel>
  );
}
