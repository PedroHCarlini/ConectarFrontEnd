import { Modal } from "../../components/modal";
import type { Customer } from "../../pages/customer-list/store";
import { CustomersForm } from "./customers-form";

export const CustomersModal = ({
  isModalOpen,
  selectedCustomer,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  selectedCustomer: Customer | null;
  setIsModalOpen: (value: boolean) => void;
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClickClose={() => setIsModalOpen(false)}
      title={selectedCustomer ? "Editar cliente" : "Criar novo cliente"}
    >
      <CustomersForm />
    </Modal>
  );
};
