import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login", {
            replace: true
        });
    };

    return (
        <div className="navbar">
            <button
                className="btn btn--facebook btn-icon"
                onClick={handleLogout}>
                <span className="btn__text">Logout</span>
            </button>
        </div>
    );
};
