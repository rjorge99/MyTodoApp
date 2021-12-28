import React, { useContext } from "react";
import { UserContext } from "../../context";
import { type } from "../../types/types";

export const NavBar = () => {
    const { dispatch } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.clear();
        dispatch({
            type: type.logOut
        });
    };

    return (
        <div className="navbar">
            <button
                className="btn btn--facebook btn-icon"
                onClick={handleLogout}>
                <i className="btn__fa fas fa-sign-out-alt fa-2x"></i>
                <span className="btn__text">Logout</span>
            </button>
        </div>
    );
};
