import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "./routes-guard";

export const PrivateRoute = () => {
  return isTokenValid() ? <Outlet /> : <Navigate to="/" replace />;
};
