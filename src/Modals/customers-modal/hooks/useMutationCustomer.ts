import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { ModalFormData } from "../customers-form";
import {
  createCustomer,
  updateCustomer,
} from "../../../services/customer.service";
import { useSetAtom } from "jotai";
import { toggleModalAtom } from "../store";

export const useMutationCustomer = () => {
  const queryClient = useQueryClient();
  const toggleModal = useSetAtom(toggleModalAtom);
  const { mutateAsync: handleRequest } = useMutation({
    mutationFn: ({ id, value }: { id?: string; value: ModalFormData }) => {
      if (id) {
        return updateCustomer(id, value);
      }

      return createCustomer(value);
    },
    onSuccess: () => {
      toggleModal(false);
      queryClient.invalidateQueries({ queryKey: ["customers-list"] });
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  return {
    handleRequest,
  };
};
