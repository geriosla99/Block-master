import { types } from '../types/types'
import { firebase, google, db } from "../firebase/firebaseConfig";

export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName))
            })
    }
}

export const registroEmailPasswordName = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                console.log(user);

                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

//primera funcion asincrona
export const loginEmailPassword = (email, password) => {
    //devuelve un callback
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const setMovies = (movies) => {
    return {
        type: types.setMovies,
        payload: movies
    }
}


export const register = (id, title, image, vote_average, overview) => {
    return {
        type: types.register,
        payload: {
            id,
            title,
            image,
            vote_average,
            overview
        }
    }
}

export const movieRegister = (id, title, image, vote_average, overview) => {
    return async (dispatch) => {
        const newMovie = {
            id,
            title,
            image,
            vote_average,
            overview
        }
        await db.collection('/Peliculas').add(newMovie);
        dispatch(register(id, title, image, vote_average, overview))
    }
}
