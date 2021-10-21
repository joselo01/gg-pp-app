import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../redux/actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();

  const { nombre } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="col-sm-3 col-xs-12 nav-style">
      <div className="d-flex flex-sm-column  flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <Link to="/" className=" align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5">G<span className="d-none d-sm-inline">loria,</span> Hola {nombre}</span>
        </Link>
        <ul className="nav nav-pills flex-sm-column flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <Link to="#" className="nav-link px-sm-0 px-2 text-white">
              <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Inicio</span>
            </Link>
          </li>
          {/* <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li> */}

          <li className="dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle px-sm-0 px-1 text-white"
              id="dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fs-5 bi-card-list"></i>
              <span className="ms-1 d-none d-sm-inline">Solicitudes</span>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-light text-small shadow text-white"
              aria-labelledby="dropdown"
            >
              <li>
                <Link className="dropdown-item" to="./provider-requests">
                  Solicitudes de Creación
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="./provider-requests">
                  Solicitudes de Modificación
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="./provider-requests">
                  Solicitudes de Ampliación
                </Link>
              </li>
              {/* <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li> */}
            </ul>
          </li>
          {/* <li className="dropdown">
            <Link to="#" className="nav-link dropdown-toggle px-sm-0 px-1 text-white" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fs-5 bi-card-list"></i><span className="ms-1 d-none d-sm-inline">Administración</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-light text-small shadow text-white" aria-labelledby="dropdown">
              <li><Link className="dropdown-item" to="./admin-profile">Mi Perfil de Usuario</Link></li>
              <li><Link className="dropdown-item" to="./secondary-accounts">Administrar usuarios</Link></li>
              <li><Link className="dropdown-item" to="./reasign-accounts">Reasignar usuario administrador</Link></li>
              <li><Link className="dropdown-item" to="./company-profile">Información de empresa</Link></li>
              <li><Link className="dropdown-item" to="./change-requests">Mis Solicitudes</Link></li>
            </ul>
          </li> */}
          {/* <li>
                        <a href="#" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-sm-0 px-2">
                            <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li> */}
          <li>
            <button
              className="nav-link px-sm-0 px-2 text-white"
              onClick={handleLogout}
            >
              <i className="fs-5 bi-box-arrow-right"></i>
              <span className="ms-1 d-none d-sm-inline">Cerrar Sesión</span>
            </button>
          </li>
        </ul>
        {/* <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">Joe</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
      </div>
    </div>
  );
};
