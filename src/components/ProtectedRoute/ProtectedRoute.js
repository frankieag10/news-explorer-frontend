import React from "react";
import { Route, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/signin");
    return null;
  }

  return <Route {...props}>{children}</Route>;
}

export default ProtectedRoute;
