import React, { useState } from "react";

export const FormUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {};
  const handleInputChange = () => {};

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };
  return (
    <>
      <form name="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-12 mb-3">
            <label>Título</label>
            <select
              className="form-select"
              name="pais"
              onChange={handleInputChange}
            >
              <option value="1">Sr.</option>
              <option value="2">Sra.</option>
            </select>
          </div>
          <div className="form-group col-12 mb-3">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="idFiscal"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-12 mb-3">
            <label>Apellidos</label>
            <input
              className="form-control"
              type="text"
              name="idFiscal"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6 col-12 mb-3">
            <label>Tipo de documento</label>
            <select
              className="form-select"
              name="pais"
              onChange={handleInputChange}
            >
              <option value="1">DNI.</option>
              <option value="2">RUC.</option>
            </select>
          </div>
          <div className="form-group col-md-6 col-12 mb-3">
            <label>Doc. Identidad</label>
            <input
              className="form-control"
              type="text"
              name="idFiscal"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6 col-12 mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="idFiscal"
              autoComplete="off"
              readOnly
              onChange={handleInputChange}
            />
          </div>
          <div className="row justify-content-md-center mt-2">
            {isEditing ? (
              <div className="col-12 col-md-3">
                <div className="d-grid gap-2">
                  <button
                    onClick={handleEditing}
                    type="button"
                    className="btn btn-danger block subtitle"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="col-12 col-md-3">
              <div className="d-grid gap-2">
                <button
                  onClick={handleEditing}
                  type="button"
                  className={`btn ${
                    isEditing ? "btn-success" : "btn-primary"
                  } block subtitle`}
                >
                  {!isEditing ? "Modificar" : "Guardar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
