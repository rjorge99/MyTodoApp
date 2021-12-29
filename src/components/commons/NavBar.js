import { useDispatch } from "react-redux";
import { startGoogleLogout } from "../../actions/auth";

export const NavBar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startGoogleLogout());
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
