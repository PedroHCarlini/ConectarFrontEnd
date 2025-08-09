// src/components/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "./validateAuthToken";

export const PrivateRoute = () => {
  const valid = isTokenValid();
  console.log("[PrivateRoute] token valid:", valid);
  return valid ? <Outlet /> : <Navigate to="/" replace />;
};
