import { Outlet } from "react-router-dom";

export const AuthScreen = () => {
    return (
        <div className="container-login">
            <div className="container-login__img"></div>
            <div className="container-login__section">
                <Outlet />
            </div>
        </div>
    );
};
