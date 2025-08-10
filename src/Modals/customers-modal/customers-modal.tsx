import { useAtom } from "jotai";
import { Modal } from "../../components/modal";
import type { Customer } from "../../pages/customer-list/store";
import { CustomersForm } from "./customers-form";
import { toggleModalAtom } from "./store";

export const CustomersModal = ({
  selectedCustomer,
}: {
  selectedCustomer: Customer | null;
}) => {
  const [toggleModal, setToggleModal] = useAtom(toggleModalAtom);
  return (
    <Modal
      isOpen={toggleModal}
      onClickClose={() => setToggleModal(false)}
      title={selectedCustomer ? "Editar cliente" : "Criar novo cliente"}
    >
      <CustomersForm customer={selectedCustomer || null} />
    </Modal>
  );
};
