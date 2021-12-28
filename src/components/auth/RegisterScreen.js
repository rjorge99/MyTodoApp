import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
            <div className="container__auth animate__animated animate__fadeIn">
                <div className="container-login__section__inputs">
                    <h2 className="container-login__header">
                        Create an account
                    </h2>
                    <p className="container-login__input-label">Username</p>
                    <input
                        className="input"
                        type="text"
                        placeholder="Username"
                    />
                    <p className="container-login__input-label">Email</p>
                    <input
                        className="input"
                        type="text"
                        placeholder="sample@gmail.com"
                    />
                    <p className="container-login__input-label">Password</p>
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                    <p className="container-login__input-label">Password</p>
                    <input
                        className="input mb-30"
                        type="password"
                        placeholder="Password"
                    />

                    <button className="btn btn--green mb-15">Login</button>
                </div>
            </div>
            <div className="container-login__section__footer">
                <span className="container-login__section__footer__span">
                    Already have an account?
                </span>
                <Link
                    className="container-login__section__footer__join"
                    to="/auth/login">
                    Login
                </Link>
            </div>
        </>
    );
};
