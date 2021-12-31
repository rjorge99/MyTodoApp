import React from "react";
import { TodoList } from "./TodoList";

export const TodoMain = ({ todos }) => {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-container__input">
                    <input
                        className="dashboard-container__input__text"
                        type="text"
                        autoComplete="false"
                        placeholder="What do you want to do?"
                    />
                    <i className="fas fa-plus-circle fa-3x"></i>
                </div>
                <TodoList todos={todos} />
            </div>
        </div>
    );
};
