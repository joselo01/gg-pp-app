import React, { useState } from 'react'
import { FormPreRegistro } from '../components/organisms/FormPreRegistro'
import { FormRegistro } from '../components/organisms/FormRegistro';

export const Register = () => {

    const [isValidated, setIsValidated] = useState(false);

    const handleValidated = () => {
        setIsValidated(!isValidated);
    };

    return (
        <>
            {
                !isValidated
                    ?
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-6 mx-auto">
                                <FormPreRegistro
                                    handleValidated={handleValidated} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <FormRegistro
                                    handleValidated={handleValidated} />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
