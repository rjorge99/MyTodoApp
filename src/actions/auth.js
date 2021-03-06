import {
    getAuth,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";
import Swal from "sweetalert2";
import {
    facebookAuthProvider,
    googleAuthProvider
} from "../firebase/firebaseConfig";
import { type } from "../types/types";
import { loading, stopLoading } from "./ui";

export const startGoogleLogin = () => {
    return async (dispatch) => {
        const auth = getAuth();
        const { user } = await signInWithPopup(auth, googleAuthProvider);
        dispatch(login(user.uid, user.displayName));
    };
};

export const startFacebookLogin = () => {
    return async (dispatch) => {
        const auth = getAuth();
        const { user } = await signInWithPopup(auth, facebookAuthProvider);
        dispatch(login(user.uid, user.displayName));
    };
};

export const firebaseAuthLogout = () => {
    return async (dispatch) => {
        dispatch(loading());
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
        dispatch(stopLoading());
    };
};

export const startPasswordLogin = (email, password) => {
    return async (dispatch) => {
        const auth = getAuth();
        dispatch(loading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log("logged");
            })
            .catch((err) => {
                Swal.fire(
                    "Error",
                    "Favor de verificar el email o password",
                    "error"
                );
            })
            .finally(() => {
                dispatch(stopLoading());
            });
    };
};

export const registerWithEmailAndPassword = (email, password, username) => {
    return (dispatch) => {
        dispatch(loading());
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: username });
                dispatch(login(user.uid, username));
            })
            .catch((err) => {
                Swal.fire("Error", "El usuario ya existe", "error");
            })
            .finally(() => {
                dispatch(stopLoading());
            });
    };
};

export const login = (uid, name) => ({
    type: type.login,
    payload: {
        uid,
        name
    }
});

export const logout = () => ({
    type: type.logout
});
