export const NavBar = () => {
    const handleLogout = () => {};

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
