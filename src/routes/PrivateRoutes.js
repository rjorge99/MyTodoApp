import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ auth, children }) => {
    return auth ? children : <Navigate to="/auth/login" replace />;
};
