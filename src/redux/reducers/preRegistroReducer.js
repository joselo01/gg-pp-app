import { types } from "../types/types";

const dataInicial = {
    ok: false,
    idFiscal: "", 
    pais: "", 
    rubro:[], 
    empresa:"", 
    comprador:"", 
    comentario:""
}

export const preRegistroReducer = (state = dataInicial , action) => {
    
    switch (action.type) {
       case types.preRegisterAddNewStart:

           return {
               ...state,
               ...action.payload,
               ok: true
           }
    
        default:
            return state;
    }

}