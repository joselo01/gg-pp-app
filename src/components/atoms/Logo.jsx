import React from 'react';
import LogoProveedores from '../../images/logo_proveedores.png';

export const Logo = () => {
    return (
        <>
            <div className="logo">
                <img src={LogoProveedores} alt="Logo Proveedores" />
            </div>
        </>
    )
}
