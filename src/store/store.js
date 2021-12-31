import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducer/authReducer";
import { todosReducer } from "../reducer/todoReducer";
import { uiReducer } from "../reducer/uiReducer";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    todos: todosReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
