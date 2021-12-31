import React from "react";

export const TodoListItem = ({ todo }) => {
    return (
        <li className="todo-list__item" key={todo.id}>
            <p className={`todo-list__item__text ${todo.done && "done"}`}>
                {todo.text}
            </p>
            <div className="todo-list__item__buttons">
                <i className="far fa-trash-alt fa-2x"></i>
            </div>
        </li>
    );
};
