export const LoginScreen = () => {
    return (
        <>
            <div className="container-login">
                <div className="container-login__img"></div>
                <div className="container-login__section">
                    <div className="container-login__section__inputs">
                        <p className="container-login__welcome">Welcome Back</p>
                        <h2 className="container-login__header">
                            Login to you account
                        </h2>

                        <p className="container-login__input-label">Email</p>
                        <input
                            className="input"
                            type="text"
                            placeholder="Email"
                        />
                        <p className="container-login__input-label">Password</p>
                        <input
                            className="input mb-30"
                            type="password"
                            placeholder="Password"
                        />

                        <button className="btn btn--green mb-15">
                            Login Now
                        </button>
                        <button class="btn btn--blue btn-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            <span className="btn__text">
                                Or sign-in with google
                            </span>
                        </button>
                    </div>
                    <div className="container-login__section__footer">
                        <span className="container-login__section__footer__span">
                            Dont have an account?
                        </span>
                        <a
                            href="#"
                            className="container-login__section__footer__join">
                            Join free today
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
