import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormDataCompanyDocs = ({ errors }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="input-group">
          {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                Nombre del Vendedor 1
                                                            </span>
                                                        </div> */}
          <Field
            /* ref={fileRef}
                                    hidden   */
            className="form-control"
            type="file"
            name="file"
            /*  onChange={(event) => {
                                  setFieldValue('file', event.currentTarget.files[0]);
                                }} */
          />
          {/* {valores.file && <PreviewFile file={valores.file}/>}
                        <button onClick={() => {
                            fileRef.current.click();
                        }}>
                            Upload
                        </button> */}
          <ErrorMessage
            name="file"
            component={() => <span className="text-danger">{errors.file}</span>}
          />
        </div>
      </div>
    </div>
  );
};
