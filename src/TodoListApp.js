import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { login } from "./actions/auth";
import { TodoScreen } from "./components/dashboard/TodoScreen";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { AuthRouter } from "./routes/AuthRouter";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";

export const TodoListApp = () => {
    const { loading } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else setIsLoggedIn(false);
        });
    }, [dispatch]);

    return (
        <BrowserRouter>
            {loading && <LoadingScreen />}
            <Routes>
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
