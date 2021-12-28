import { Link } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <>
            <div className="container__auth animate__animated animate__fadeIn">
                <div className="container-login__section__inputs">
                    <p className="container-login__welcome">Welcome Back</p>
                    <h2 className="container-login__header">
                        Login to your account
                    </h2>

                    <p className="container-login__input-label">Email</p>
                    <input className="input" type="text" placeholder="Email" />
                    <p className="container-login__input-label">Password</p>
                    <input
                        className="input mb-30"
                        type="password"
                        placeholder="Password"
                    />

                    <button className="btn btn--green mb-15">Login Now</button>
                    <button className="btn btn--google btn-icon mb-15">
                        <img
                            className="btn__img"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        />
                        <span className="btn__text">Sign-in with google</span>
                    </button>
                    <button className="btn btn--facebook btn-icon">
                        <img
                            className="btn__img"
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                        />
                        <span className="btn__text">Sign-in with facebook</span>
                    </button>
                </div>
            </div>
            <div className="container-login__section__footer">
                <span className="container-login__section__footer__span">
                    Dont have an account?
                </span>
                <Link
                    className="container-login__section__footer__join"
                    to="/register">
                    Join free today
                </Link>
            </div>
        </>
    );
};
