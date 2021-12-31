import React from "react";
import { useDispatch } from "react-redux";
import { startDeleteTodo } from "../../actions/todos";

export const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(startDeleteTodo(id));
    };
    return (
        <li className="todo-list__item">
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
