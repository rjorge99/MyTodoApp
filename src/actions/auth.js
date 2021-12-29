import { getAuth, signInWithPopup, signOut } from "firebase/auth";
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
