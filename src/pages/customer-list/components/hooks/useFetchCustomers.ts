import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../../../services/customer.service";
import { removeEmptyFields } from "../../../../utils/removeEmptyFields";
import type { AxiosError } from "axios";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  customersAtom,
  customersLoadingAtom,
  formFiltersAtom,
} from "../../store";

export const useFetchCustomers = () => {
  const setCustomers = useSetAtom(customersAtom);
  const setLoading = useSetAtom(customersLoadingAtom);
  const formfilters = useAtomValue(formFiltersAtom);

  const { data, isFetching } = useQuery({
    queryKey: [JSON.stringify(formfilters)],
    queryFn: () => {
      return getCustomers(removeEmptyFields(formfilters)).catch(
        ({ response }: AxiosError) => {
          console.log(response);
        }
      );
    },
  });
  useEffect(() => {
    console.log(data);
    if (data) setCustomers(data);
  }, [data]);

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching]);
};
