import { ErrorMessage } from "formik";
import React from "react";
//import PreviewFile from "./PreviewFile";
import { Input } from "reactstrap";

export const FormDataCompanyDocs = ({ errors, setFieldValue, file }) => {
  return (
    <div className="card mb-3">
      
      <div className="card-body">
      <div class="alert alert-success">
      Adjuntar archivos según los requisitos de la Empresa a la que postula
</div>
        <div className="input-group">
          
          {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 1
                                                            </span>
                                                        </div> */}
          <Input
            type="file"
            name="file"
            value={file}
            onChange={(event) => {
              setFieldValue("file", event.currentTarget.files[0]);
            }}
          />

          <ErrorMessage
            name="file"
            component={() => <span className="text-danger">{errors.file}</span>}
          />

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
