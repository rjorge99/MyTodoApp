import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { type } from "../types/types";

export const startNewTodo = (text) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newTodo = { text };
        const doc = await addDoc(
            collection(db, `${uid}`, "todos/todo"),
            newTodo
        );
        dispatch(addNewTodo(doc.id, newTodo));
    };
};

const addNewTodo = (id, newTodo) => ({
    type: type.addNewTodo,
    payload: {
        id,
        ...newTodo
    }
});

export const startDeleteTodo = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const noteRef = doc(db, `${uid}/todos/todo/${id}`);
        await deleteDoc(noteRef);

        dispatch(deleteTodo(id));
    };
};

const deleteTodo = (id) => ({
    type: type.deleteTodo,
    payload: id
});

export const startLoadingTodos = (uid) => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(
            collection(db, `${uid}/todos/todo`)
        );

        const todos = [];

        querySnapshot.forEach((todo) => {
            todos.push({ id: todo.id, ...todo.data() });
        });

        dispatch(setTodos(todos));
    };
};

const setTodos = (todos) => ({
    type: type.todosLoad,
    payload: [...todos]
});
