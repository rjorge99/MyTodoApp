import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen";
import { TodoScreen } from "./components/TodoScreen";

export const TodoListApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/" element={<TodoScreen />} />
            </Routes>
        </BrowserRouter>
    );
};
