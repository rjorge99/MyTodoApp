import React from "react";
import ReactDOM from "react-dom";
import { TodoListApp } from "./TodoListApp";

import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        centund
        {/* <TodoListApp /> */}
    </Provider>,
    document.getElementById("root")
);
