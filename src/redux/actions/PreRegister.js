import Swal from "sweetalert2";
import { fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types";

export const preRegisterAddNew = ( idFiscal, pais, rubro, empresa, comprador, comentario ) => {
   
    return async (dispatch) => {
        const resp = await fetchWithoutToken("preRegistro/new", { idFiscal, pais, rubro, empresa, comprador, comentario }, "POST");
        const body = await resp.json();
        console.log(body, 'el body');
        console.log(idFiscal)
        

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
        } else if (body.ok === false) {
            Swal.fire({
                icon: 'error',
                title: 'Su cuenta de empresa y usuario administrador ya están registrados para este N° de Identificación fiscal',
                text: 'en caso de requerir aplicar a otra empresa, inicie sesión con su usuario administrador',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Home'
              }).then((result) => {
                if (result.isConfirmed) {
                  
                    window.location.href = `/home`
                 
                }
              })
        }

    }
};