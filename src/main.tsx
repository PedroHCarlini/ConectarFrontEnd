import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomersList } from "./pages/customer-list/customers-list.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/customers-list", element: <CustomersList /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
