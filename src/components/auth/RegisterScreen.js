import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerWithEmailAndPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [{ username, email, password, password2 }, handleInputChange] =
        useForm({
            username: "",
            email: "",
            password: "",
            password2: ""
        });

    const handleCreateAccount = () => {
        if (username.length === 0)
            return Swal.fire(
                "Error",
                "Favor de establecer el nombre de usuario",
                "error"
            );
        if (!validator.isEmail(email))
            return Swal.fire(
                "Error",
                "Favor de establecer un email válido",
                "error"
            );
        if (password !== password2)
            return Swal.fire(
                "Error",
                "Los passwords no son similares",
                "error"
            );
        dispatch(registerWithEmailAndPassword(email, password, username));
    };

    return (
        <>
            <div className="container__auth animate__animated animate__fadeIn">
                <div className="container-login__section__inputs">
                    <h2 className="container-login__header">
                        Create an account
                    </h2>
                    <p className="container-login__input-label">Username</p>
                    <input
                        value={username}
                        name="username"
                        autoComplete="off"
                        onChange={handleInputChange}
                        className="input"
                        type="text"
                        placeholder="Username"
                    />
                    <p className="container-login__input-label">Email</p>
                    <input
                        name="email"
                        value={email}
                        autoComplete="off"
                        onChange={handleInputChange}
                        className="input"
                        type="text"
                        placeholder="sample@gmail.com"
                    />
                    <p className="container-login__input-label">Password</p>
                    <input
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                    <p className="container-login__input-label">Password</p>
                    <input
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        className="input mb-30"
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        className="btn btn--green mb-15"
                        onClick={handleCreateAccount}>
                        Create account
                    </button>

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
                </div>
            </div>
        </>
    );
};
