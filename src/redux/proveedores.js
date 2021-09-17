import axios from 'axios';

// constant
const initialState = {
    array : []
}

// types
const GET_PROVEEDORES_SUCCESS = 'GET_PROVEEDORES_SUCCESS';


// reducers
export default function proveedoresReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROVEEDORES_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// actions
export const getProveedoresAction = () => async (dispatch) => {
        try {
            const res = await axios.get(process.env.REACT_APP_PROVE)
            dispatch({
                type : GET_PROVEEDORES_SUCCESS,
                payload: res.data.results
            })
        } catch (error) {

            console.log(error)
            
        }
}