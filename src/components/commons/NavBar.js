import { useDispatch } from "react-redux";
import { firebaseAuthLogout } from "../../actions/auth";

export const NavBar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(firebaseAuthLogout());
    };

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__container__logo">
                    <h2 className="navbar__container__logo__h2">Jorge</h2>
                </div>
                <div className="navbar__container__logout">
                    <button
                        className="btn btn--logout btn-icon"
                        onClick={handleLogout}>
                        <i className="btn__fa fas fa-sign-out-alt fa-2x"></i>
                        <span className="btn__text">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
