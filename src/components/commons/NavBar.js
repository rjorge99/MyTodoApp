import { useDispatch } from "react-redux";
import { firebaseAuthLogout } from "../../actions/auth";

export const NavBar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(firebaseAuthLogout());
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
