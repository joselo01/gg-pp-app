import { types } from "../types/types";

const dataInicial = {
    idFiscal: null,
    pais: null,
    rubro: [],
    empresa: null,
    comprador: null,
    comentario: null,
}

export const preRegistroReducer = (state = dataInicial , action) => {
    
    switch (action.type) {
       case types.preRegisterAddNewStart:

           return {
               ...state,
               ...action.payload
           }
    
        default:
            return state;
    }

}