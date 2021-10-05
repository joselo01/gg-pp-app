import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

export const TableChangeRequests = () => {

    const history = useHistory();


    var mockData = [
        {
            num: '000420',
            type: 'Tipo Mock',
            date: '16/03/2020',
            status: 'Status Mock',
            observs: 'Ninguna observación mock'
        },
        {
            num: '000666',
            type: 'Tipo Mock',
            date: '06/06/2021',
            status: 'Status Mock',
            observs: 'Ninguna observación mock'
        },
        {
            num: '000777',
            type: 'Tipo Mock',
            date: '24/05/2021',
            status: 'Status Mock',
            observs: 'Ninguna observación mock'
        },
    ]
    // setTableList
    const [tableList] = useState(mockData);

    function handleViewSolitude() {
        history.push("/provider-preview");
    }

    return (
        <div className="table-responsive-md">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">N° Solicitud</th>
                        <th scope="col">Tipo de Solicitud</th>
                        <th scope="col">Fecha de Solicitud</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Observación</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableList.map((item, index) => (
                            <tr key={item.num}>
                                <td scope="row">
                                    <Link to="./company-profile">{item.num}</Link>
                                </td>
                                <td>
                                    {item.type}
                                </td>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.observs}
                                </td>
                                {/* <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleViewSolitude}
                                    >
                                        <i className="bi-eye"></i>
                                    </button>
                                </td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
