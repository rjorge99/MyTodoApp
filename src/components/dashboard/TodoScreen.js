import { useNavigate } from "react-router-dom";
import { NavBar } from "../commons/NavBar";
import { TodoList } from "./TodoList";

export const TodoScreen = ({ user }) => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <TodoList />
        </>
    );
};
