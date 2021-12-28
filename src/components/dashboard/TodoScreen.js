import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
import { NavBar } from "../commons/NavBar";

export const TodoScreen = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.login) navigate("/auth/login", { replace: true });
    }, [user]);

    return (
        <>
            <NavBar />
        </>
    );
};
