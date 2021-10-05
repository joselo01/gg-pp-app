import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export const TableSecondaryAccounts = () => {

    const history = useHistory();


    var mockData = [
        {
            email: 'mock@mock.com',
            title: 'Titulo Mock',
            name: 'Nombre Mock',
            lastname: 'Apellidos Mock',
            document: '12345678901',
            rol: 'Rol Mock'
        },
        {
            email: 'mock@mock.com2',
            title: 'Titulo Mock2',
            name: 'Nombre Mock2',
            lastname: 'Apellidos Mock2',
            document: '12345678902',
            rol: 'Rol Mock 2'
        },
        {
            email: 'mock@mock.com3',
            title: 'Titulo Mock3',
            name: 'Nombre Mock3',
            lastname: 'Apellidos Mock3',
            document: '12345678903',
            rol: 'Rol Mock 3'
        },
    ]
    // setTableList
    const [tableList ] = useState(mockData);

    function handleViewSolitude() {
        history.push("/provider-preview");
    }

    return (
        <div className="table-responsive-md">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1" />
                            </div>
                        </th>
                        <th scope="col">Email Usuario</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Doc. Identidad</th>
                        <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableList.map((item, index) => (
                            <tr key={item.document}>
                                <th scope="row">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1"/>
                                        
                                        <label className="custom-control-label" htmlFor="tableDefaultCheck1">&nbsp;{`001${index + 1}`}</label>
                                    </div>
                                </th>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.lastname}
                                </td>
                                <td>
                                    {item.document}
                                </td>
                                <td>
                                    {item.rol}
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
