import React from "react";

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
export const TodoList = () => {
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
                <div className="todo-list-container">
                    <ul className="todo-list">
                        {todos.map((todo) => (
                            <li className="todo-list__item" key={todo.id}>
                                <p
                                    className={`todo-list__item__text ${
                                        todo.done && "done"
                                    }`}>
                                    {todo.text}
                                </p>
                                <div className="todo-list__item__buttons">
                                    <i className="far fa-trash-alt fa-2x"></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
