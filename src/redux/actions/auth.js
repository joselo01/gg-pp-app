import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password, nombre, role) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken("login", { email, password, nombre, role }, "POST");
    const body = await resp.json();

    console.log(body, 'en login')

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          nombre: body.nombre,
          role: body.role
        })
      );
    } else {
      alert("Error", body.msg, "error");
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken("usuarios/renew");
    const body = await resp.json();
    console.log(body, 'renew');

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid
        })
      );
    } else {
      dispatch(checkingFinish())
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {

    localStorage.clear();
    dispatch(logout());

  }
}

const logout = () => ({
  type: types.authLogout
})

