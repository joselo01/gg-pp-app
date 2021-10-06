import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { TabItem } from '../atoms/TabItem';

export const FormCompany = () => {

    const [formValues, handleInputChange] = useForm({
        idFiscal: "",
        pais: "1",
        tipo: "1",
        empresa: "",
        comprador: "",
        comentario: ""
    });

    const tabsCompany = [
        {
            name: "Datos generales",
        },
        {
            name: "Datos bancarios/comerciales",
        },
        {
            name: "Documentos de su empresa",
        }
    ];

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => {
        setTabIndex(index);
    };
    return (
        <>
            <div className="mt-2">
                <h5>Datos del registrador</h5>
            </div>
            <div className="form-group col-md-6 col-12 mb-3">
                <label>N° Id. Fiscal</label>
                <input
                    className="form-control"
                    type="number"
                    name="idFiscal"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group col-md-6 col-12 mb-3">
                <label>País</label>
                <select
                    className="form-select"
                    name="pais"
                    onChange={handleInputChange}
                >
                    <option value="1">Perú</option>
                    <option value="2">Chile</option>
                </select>
            </div>
            <div className="form-group col-md-6 col-12 mb-3">
                <label>Rubro</label>
                <select
                    className="form-select"
                    name="rubro"
                    onChange={handleInputChange}

                >
                    <option value="1">A</option>
                    <option value="2">B</option>

                </select>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Empresa a postular</span>
                </div>
                <select
                    className="form-select"
                    name="empresa"
                    onChange={handleInputChange}

                >
                    <option value="1">A</option>
                    <option value="2">B</option>

                </select>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Comprador responsable</span>
                </div>
                <select
                    className="form-select"
                    name="comprador"
                    onChange={handleInputChange}

                >
                    <option value="1">A</option>
                    <option value="2">B</option>

                </select>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Contacto o comentario</span>
                </div>
                <textarea
                    className="form-control"
                    name="comentario"
                    onChange={handleInputChange}
                >

                </textarea>
            </div>
            <ul className="nav nav-tabs nav-justified">
                {tabsCompany.map((tab, index) => (
                    <TabItem
                        key={tab.name}
                        selectedTab={tabIndex}
                        index={index}
                        item={tab}
                        handleTabChange={handleTabChange}
                    />
                ))}
            </ul>
        </>
    )
}
