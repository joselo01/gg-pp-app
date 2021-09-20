import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { getProveedoresAction } from '../redux/proveedores';

const Proveedores = () => {

    const dispatch = useDispatch();

    const proveedores = useSelector(store => store.proveedores.array)
    //console.log(proveedores);

    return (
        <div>
            Lista de Proveedores
            <button onClick={() => dispatch(getProveedoresAction())}>Obtener Proveedores</button>

            <ul>
                {
                    proveedores.map(item => (
                            <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Proveedores
