import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthScreen } from "./components/auth/AuthScreen";
import { LoginScreen } from "./components/auth/LoginScreen";
import { RegisterScreen } from "./components/auth/RegisterScreen";
import { TodoScreen } from "./components/dashboard/TodoScreen";

export const TodoListApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoScreen />} />
                <Route path="/auth" element={<AuthScreen />}>
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="register" element={<RegisterScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
