import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { startDeleteTodo } from "../../actions/todos";

export const TodoListItem = ({ todo }) => {
    const todoRef = useRef();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        todoRef.current.classList.add("animate__faster");
        todoRef.current.classList.add("animate__fadeOut");
        dispatch(startDeleteTodo(id));
    };
    return (
        <li
            ref={todoRef}
            className="todo-list__item animate__animated animate__fadeIn">
            <p className={`todo-list__item__text ${todo.done && "done"}`}>
                {todo.text}
            </p>
            <div
                className="todo-list__item__buttons"
                onClick={() => handleDelete(todo.id)}>
                <i className="far fa-trash-alt fa-2x"></i>
            </div>
        </li>
    );
};
