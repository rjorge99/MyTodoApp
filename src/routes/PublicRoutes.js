import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ auth, children }) => {
    return auth ? <Navigate to="/" repace /> : children;
};
