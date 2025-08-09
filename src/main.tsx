import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomersList } from "./pages/customer-list/customers-list.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./pages/login/login.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/customers-list", element: <CustomersList /> },
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
