import React from "react";
import c1 from "../../images/logo_empresas/AgroAurora.jpg";
import c2 from "../../images/logo_empresas/AgroAurora.jpg";
import c3 from "../../images/logo_empresas/AgroAurora.jpg";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={c1} className="d-block w-100" alt="..." width="100" height="80" />
        </div>
        <div className="carousel-item">
          <img src={c2} className="d-block w-100" alt="..." width="100" height="80" />
        </div>
        <div className="carousel-item">
          <img src={c3} className="d-block w-100" alt="..." width="100" height="80" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
