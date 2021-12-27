import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./components/auth/LoginScreen";
import { RegisterScreen } from "./components/auth/RegisterScreen";
import { TodoScreen } from "./components/dashboard/TodoScreen";

export const TodoListApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/" element={<TodoScreen />} />
            </Routes>
        </BrowserRouter>
    );
};
