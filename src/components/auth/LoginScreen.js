import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    startFacebookLogin,
    startGoogleLogin,
    startPasswordLogin
} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import Swal from "sweetalert2";
import { loading, stopLoading } from "../../actions/ui";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [{ email, password }, handleInputChange] = useForm({
        email: "",
        password: ""
    });

    const handlePasswordLogin = () => {
        if (!validator.isEmail(email))
            return Swal.fire(
                "Error",
                "Favor de establecer un email válido",
                "error"
            );

        if (password.length === 0)
            return Swal.fire(
                "Error",
                "Favor de establecer el password",
                "error"
            );

        dispatch(loading());
        dispatch(startPasswordLogin(email, password));
        dispatch(stopLoading());
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    const handleFacebookLogin = () => {
        dispatch(startFacebookLogin());
    };

    return (
        <>
            <div className="container__auth animate__animated animate__fadeIn">
                <div className="container-login__section__inputs">
                    <p className="container-login__welcome">Welcome Back</p>
                    <h2 className="container-login__header">
                        Login to your account
                    </h2>

                    <p className="container-login__input-label">Email</p>
                    <input
                        name="email"
                        value={email}
                        autoComplete="off"
                        onChange={handleInputChange}
                        className="input"
                        type="text"
                        placeholder="Email"
                    />
                    <p className="container-login__input-label">Password</p>
                    <input
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="input mb-30"
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        className="btn btn--green mb-15"
                        onClick={handlePasswordLogin}>
                        Login Now
                    </button>
                    <button
                        className="btn btn--google btn-icon mb-15"
                        onClick={handleGoogleLogin}>
                        <img
                            alt=""
                            className="btn__img"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        />
                        <span className="btn__text">Sign-in with google</span>
                    </button>
                    <button
                        onClick={handleFacebookLogin}
                        className="btn btn--facebook btn-icon mb-15">
                        <img
                            className="btn__img"
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                        />
                        <span className="btn__text">Sign-in with facebook</span>
                    </button>
                    <div className="container-login__section__footer">
                        <span className="container-login__section__footer__span">
                            Don't have an account?
                        </span>
                        <Link
                            className="container-login__section__footer__join"
                            to="/auth/register">
                            Join free today
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
