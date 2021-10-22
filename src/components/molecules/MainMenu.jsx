import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { startLogout } from "../../redux/actions/auth";
export const MainMenu = ({navFlag}) => {
  const dispatch = useDispatch();
  const { nombre } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const history = useHistory();

  function goToPage(page) {
    history.push(`/${page}`);
}
  return (
    <>
      {
        (navFlag) ?
        <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">
        Hola {nombre}
      </div>
      <div className="list-group list-group-flush">
        <button
          onClick={() => goToPage('init')}
          className="list-group-item list-group-item-action list-group-item-light p-3"
        >
          <i className="fs-5 bi-house"></i>
          Inicio
        </button>

        <div className="dropdown">
          <button
            className="dropdown-toggle list-group-item list-group-item-action list-group-item-light p-3"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fs-5 bi-card-list"></i>
            Solicitudes
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button
                onClick={() => goToPage('provider-requests')}
                className="dropdown-item"
                type="button"
              >
                Solicitud de creación
              </button>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <button
            className="dropdown-toggle list-group-item list-group-item-action list-group-item-light p-3"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fs-5 bi-card-list"></i>
            Administración
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button
                onClick={() => goToPage('admin-profile')}
                className="dropdown-item"
                type="button"
              >
                Mi Perfil de Usuario
              </button>
            </li>
            <li>
              <button
                onClick={() => goToPage('secondary-accounts')}
                className="dropdown-item"
                type="button"
              >
                Administrar usuarios
              </button>
            </li>
            <li>
              <button
                onClick={() => goToPage('reasign-accounts')}
                className="dropdown-item"
                type="button"
              >
                Reasignar usuario administrador
              </button>
            </li>
            <li>
              <button
                onClick={() => goToPage('company-profile')}
                className="dropdown-item"
                type="button"
              >
                Información de empresa
              </button>
            </li>
            <li>
              <button
                onClick={() => goToPage('change-requests')}
                className="dropdown-item"
                type="button"
              >
                Mis Solicitudes
              </button>
            </li>
          </ul>
        </div>

        <button
          className="list-group-item list-group-item-action list-group-item-light p-3"
          onClick={handleLogout}
        >
          <i className="fs-5 bi-box-arrow-right"></i>
          Cerrar Sesión
        </button>
      </div>
    </div>
    : null
      }
    </>
  );
};
