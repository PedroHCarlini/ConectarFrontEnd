import { Navbar } from "../../components/navbar";
import { Header } from "./components/header";
import { useFetchCustomers } from "./components/hooks/useFetchCustomers";
import { LayoutBody } from "./components/layout-body";

export const CustomersList = () => {
  useFetchCustomers();
  return (
    <div className="h-full w-full">
      <Navbar />
      <Header />
      <LayoutBody />
    </div>
  );
};
