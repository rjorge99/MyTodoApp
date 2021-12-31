import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthScreen } from "../components/auth/AuthScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { PrivacidadScreen } from "../components/commons/PrivacidadScreen";

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/auth" element={<AuthScreen />}>
                <Route path="login" element={<LoginScreen />} />
                {/* <Route path="register" element={<RegisterScreen />} /> */}
            </Route>
            {/* <Route path="/politicas" element={<PrivacidadScreen />} /> */}
        </Routes>
    );
};
