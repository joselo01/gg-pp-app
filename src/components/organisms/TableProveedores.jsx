import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export const TableProviders = () => {

    const history = useHistory();


    var mockData = [
        {
            date: '28/09/2021',
            ruc: '2037414102',
            provider: 'TETRA PAK S.A.',
            area: 'ALIMENTOS',
            company: 'LECHE GLORIA S.A.',
            responsible: 'ASUPPOL',
            status: 'En solicitud',
        },
        {
            date: '29/09/2021',
            ruc: '12345678909',
            provider: 'CORP. PRIMAX',
            area: 'TRANSPORTE',
            company: 'RACIEMSA S.A.',
            responsible: 'MOSORIO',
            status: 'En solicitud',
        },
        {
            date: '30/09/2021',
            ruc: '20162021210',
            provider: 'PROSAC',
            area: 'CEMENTOS',
            company: 'YURA S.A.',
            responsible: 'ASUPPOL',
            status: 'En solicitud',
        },
    ]
    // setTableList
    const [tableList ] = useState(mockData);

    function handleViewSolitude() {
        history.push("/provider-preview");
    }

    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        {/* <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1" />
                            </div>
                        </th> */}
                        <th scope="col"># Solicitud</th>
                        <th scope="col">Fecha de Aplicación</th>
                        <th scope="col">RUC</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Rubro</th>
                        <th scope="col">Empresa a Aplicar</th>
                        <th scope="col">Responsable</th>
                        <th scope="col">Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableList.map((item, index) => (
                            <tr key={item.ruc}>
                                <th scope="row">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1"/>
                                        
                                        <label className="custom-control-label" htmlFor="tableDefaultCheck1">&nbsp;{`001${index + 1}`}</label>
                                    </div>
                                </th>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {item.ruc}
                                </td>
                                <td>
                                    {item.provider}
                                </td>
                                <td>
                                    {item.area}
                                </td>
                                <td>
                                    {item.company}
                                </td>
                                <td>
                                    {item.responsible}
                                </td>
                                <td>
                                    {item.status}

                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleViewSolitude}
                                    >
                                        <i className="bi-eye"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
