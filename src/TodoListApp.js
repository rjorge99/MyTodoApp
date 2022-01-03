import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { login } from "./actions/auth";
import { startLoadingTodos } from "./actions/todos";
import { TodoScreen } from "./components/dashboard/TodoScreen";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { AuthRouter } from "./routes/AuthRouter";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";

export const TodoListApp = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingTodos(user.uid));
            } else setIsLoggedIn(false);

            setChecking(false);
        });
    }, [dispatch]);

    if (checking) return <LoadingScreen />;

    return (
        <BrowserRouter>
            <Routes basename={process.env.PUBLIC_URL}>
                <Route
                    path="/"
                    element={
                        <PrivateRoutes auth={isLoggedIn}>
                            <TodoScreen />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PublicRoutes auth={isLoggedIn}>
                            <AuthRouter />
                        </PublicRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
