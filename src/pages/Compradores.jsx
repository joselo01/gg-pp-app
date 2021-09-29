import React from "react";
// import { useDispatch } from "react-redux";
// import { Logo } from "../components/atoms/Logo";
import { TableProveedores } from "../components/organisms/TableProveedores";
// import { startLogout } from "../redux/actions/auth";

export const Compradores = () => {
    


    return (
        <>
            {/* <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Logo />
                    </div>
                    <div className="col-6"></div>

                    <div className="content-box-internas mt-4">
                        <span className="nav-item nav-link-text-info">
                            <button onClick={handleLogout} className="nav-item nav-link btn">
                                Logout
                            </button>
                        </span>
                    </div>
                </div>
            </div> */}

            <TableProveedores />
        </>
    );
};
