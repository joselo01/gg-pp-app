import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup";


export const FormDataCompanyDocs = () => {
    const initialValues = {
        //Companydocuments
        file: null,
    }

    const RegisterShema = Yup.object().shape({
        //Companydocuments
        file: Yup.mixed().required("El campo adjunto es requerido"),
        /* .test("FILE_SIZE", "Uploaded file is too big.", (value) => !value || (value && value.size <= 1024 * 1024))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.", (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))), */

    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterShema}
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                // handleVerification();
                console.log(valores);
            }}
        >
            {({ errors, valores, setFieldValue, handleSubmit }) => (
                <Form name="form" className="form-group" onSubmit={handleSubmit}>
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
                                    component={() => (
                                        <span className="text-danger">{errors.file}</span>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
