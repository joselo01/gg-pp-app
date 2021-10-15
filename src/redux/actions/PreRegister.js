import { fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types";

export const preRegisterAddNew = ( idFiscal, pais, rubro, empresa, comprador, comentario ) => {
    return async (dispatch) => {
        const resp = await fetchWithoutToken("preRegistro/new", { idFiscal, pais, rubro, empresa, comprador, comentario }, "POST");
        const body = await resp.json();
        console.log(body, 'el body');

        if (body.ok) {
            dispatch({
                type: types.preRegisterAddNewStart,
                payload: {
                    idFiscal,
                    pais,
                    rubro,
                    empresa,
                    comprador,
                    comentario
                }
            }) 
        } else {
            console.log(body.msg, 'error');
        }

    }
};