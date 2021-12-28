import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthScreen = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (user.login) navigate("/", { replace: true });
    }, [user]);

    return (
        <div className="container-login">
            <div className="container-login__img"></div>
            <div className="container-login__section">
                <Outlet />
            </div>
        </div>
    );
};
