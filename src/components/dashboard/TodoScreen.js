import { useNavigate } from "react-router-dom";
import { NavBar } from "../commons/NavBar";

export const TodoScreen = ({ user }) => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
        </>
    );
};
