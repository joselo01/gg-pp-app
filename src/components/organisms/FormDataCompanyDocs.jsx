import React from "react";
import { Link } from "react-router-dom";
import StyledDropzone from "./StyledDropzone";

export const FormDataCompanyDocs = () => {
  const isLogged = localStorage.getItem("isLogged") === "true";
  console.log(isLogged);

  return (
    <div className="card mb-3">
      <div class="alert alert-success">
        Adjuntar archivos según los requisitos de la Empresa a la que postula
      </div>
      <div className="card-body">
        {isLogged && (
          <>
            <span>Archivos Adjuntos: </span>
            <div className="mx-3">
              <Link to="#">Archivo 1</Link>
              <br />
              <Link to="#">Archivo 2</Link>
            </div>
          </>
        )}
        <br />
        <div className="input-group">
          {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 1
                                                            </span>
                                                        </div> */}

          <StyledDropzone/>

          

          {/*  <Input
            ref={fileRef}
            hidden
            className="form-control"
            type="file"
            onChange={(event) => {
            setFieldValue('file', event.currentTarget.files[0])}}
          />
          {valores.file && <PreviewFile file={valores.file}/>}
                        <button onClick={() => {
                            fileRef.current.click();
                        }}>
                            Upload
                        </button> */}
        </div>
      </div>
    </div>
  );
};
