import { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthScreen } from "./components/auth/AuthScreen";
import { LoginScreen } from "./components/auth/LoginScreen";
import { RegisterScreen } from "./components/auth/RegisterScreen";
import { TodoScreen } from "./components/dashboard/TodoScreen";
import { UserContext } from "./context";
import { authReducer } from "./reducer/authReducer";

const init = () => JSON.parse(localStorage.getItem("user")) || { login: false };
export const TodoListApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                user,
                dispatch
            }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoScreen user={user} />} />
                    <Route path="/auth" element={<AuthScreen user={user} />}>
                        <Route path="login" element={<LoginScreen />} />
                        <Route path="register" element={<RegisterScreen />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
};
