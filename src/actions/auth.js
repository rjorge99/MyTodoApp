import {
    getAuth,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";
import Swal from "sweetalert2";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { type } from "../types/types";

export const startGoogleLogin = () => {
    return async (dispatch) => {
        const auth = getAuth();
        const { user } = await signInWithPopup(auth, googleAuthProvider);
        dispatch(login(user.uid, user.displayName));
    };
};

export const startGoogleLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
    };
};

export const startPasswordLogin = (email, password) => {
    return async (dispatch) => {
        const auth = getAuth();
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
            });
    };
};

export const registerWithEmailAndPassword = (email, password, username) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user);
                await updateProfile(user, { displayName: username });
                dispatch(login(user.uid, username));
            })
            .catch((err) => {
                Swal.fire("Error", "El usuario ya existe", "error");
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
