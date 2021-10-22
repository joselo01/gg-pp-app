import React from 'react'

export const TableHistoric = () => {
    var tableList = [
        {
            date: '28/09/2021',
            providerName: 'TETRA PAK S.A.',
            transmitter: 'Emisor mock',
            receiver: 'Receptor mock',
            status: 'En solicitud',
            comment: 'Comentario mock',
        },
        {
            date: '29/09/2021',
            providerName: 'CORP. PRIMAX',
            transmitter: 'Emisor mock',
            receiver: 'Receptor mock',
            status: 'En solicitud',
            comment: 'Comentario mock',
        },
        {
            date: '29/09/2021',
            providerName: 'CORP. MOCK',
            transmitter: 'Emisor mock',
            receiver: 'Receptor mock',
            status: 'En solicitud',
            comment: 'Comentario mock',
        },
    ];
    return (
        <div className="table-responsive-md">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        {/* <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1" />
                            </div>
                        </th> */}
                        <th scope="col">Fecha de Aplicación</th>
                        <th scope="col">N° Solicitud</th>
                        <th scope="col">Nombre de Proveedor</th>
                        <th scope="col">Emisor</th>
                        <th scope="col">Receptor</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Comentario</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableList.map((item, index) => (
                            <tr key={item.ruc}>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {`000010${index}`}
                                </td>
                                <td>
                                    {item.providerName}
                                </td>
                                <td>
                                    {item.transmitter}
                                </td>
                                <td>
                                    {item.receiver}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.comment}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
