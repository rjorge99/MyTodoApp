import { type } from "../types/types";

export const todosReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case type.addNewTodo:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case type.todosLoad:
            return {
                ...state,
                todos: [...action.payload]
            };
        case type.deleteTodo:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        default:
            return state;
    }
};
