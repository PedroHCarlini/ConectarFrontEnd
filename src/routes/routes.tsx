import { createBrowserRouter } from "react-router-dom";
import { CustomersList } from "../pages/customer-list/customers-list";
import { Login } from "../pages/login/login";
import { PrivateRoute } from "./components/privateRoutes";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },

  {
    element: <PrivateRoute />,
    children: [
      { path: "/customers-list", element: <CustomersList /> },
      { path: "/customers-list/:id", element: <CustomersList /> },
    ],
  },
]);
