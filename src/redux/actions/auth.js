import { firebase } from "../../firebase/firebaseConfig"
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui"


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then (async ({user})  => {
               dispatch (
                    login(user.uid, user.displayName));

                    dispatch(finishLoading());
            })
            .catch (e => {
                console.log(e);
                dispatch(finishLoading());
            })
    }
}


export const login = (uid, displayName) => {
      return {
        type:types.login,
        payload : {
            uid,
            displayName
        }
      } 
    }


export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})
