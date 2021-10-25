import { types } from "../types/types";

const dataInicial = {
    ok: false
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