import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos }) => {
    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};
