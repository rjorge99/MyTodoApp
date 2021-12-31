import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startNewTodo } from "../../actions/todos";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";

export const TodoMain = () => {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [{ text }, handleInputChange, reset] = useForm({ text: "" });
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0)
            return Swal.fire(
                "Error",
                "Favor de establecer el nombre de la actividad",
                "error"
            );

        dispatch(startNewTodo(text));
        reset();
        inputRef.current.select();
    };

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <form
                    onSubmit={handleSubmit}
                    className="dashboard-container__input">
                    <input
                        ref={inputRef}
                        value={text}
                        autoFocus
                        name="text"
                        onChange={handleInputChange}
                        className="dashboard-container__input__text"
                        type="text"
                        autoComplete="false"
                        placeholder="What do you want to do?"
                    />
                    <button
                        type="submit"
                        className="fas fa-plus-circle fa-3x"></button>
                </form>
                <TodoList todos={todos} />
            </div>
        </div>
    );
};
