import { useNavigate } from "react-router-dom";
import { NavBar } from "../commons/NavBar";
import { TodoMain } from "./TodoMain";

const todos = [
    {
        id: 1,
        text: "Todo 1",
        done: true
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 2,
        text: "Todo 2",
        done: false
    },
    {
        id: 3,
        text: "Todo 3",
        done: false
    }
];

export const TodoScreen = ({ user }) => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <TodoMain todos={todos} />
        </>
    );
};
