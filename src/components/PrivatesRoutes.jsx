import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivatesRoutes = () => {
  const { currUser } = useContext(AuthContext);
  return currUser ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
};

export default PrivatesRoutes;
