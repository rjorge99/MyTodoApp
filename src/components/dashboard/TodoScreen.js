import { NavBar } from "../commons/NavBar";
import { TodoMain } from "./TodoMain";

export const TodoScreen = ({ user }) => {
    return (
        <>
            <NavBar />
            <TodoMain />
        </>
    );
};
