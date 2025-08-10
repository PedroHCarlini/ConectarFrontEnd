import { atom } from "jotai";
import type { FiltersFormData } from "./components/filters/filtersForm";

export type Customer = {
  id: string;
  customerName: string;
  cnpj: string;
  legalName: string;
  conectaPlus: boolean;
  status: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export const activeTabAtom = atom<string>("basic-data");
export const formFiltersAtom = atom<FiltersFormData>({
  name: "",
  cnpj: "",
  status: null,
  conectaPlus: null,
});
export const customersAtom = atom<Customer[] | null>(null);
export const customersLoadingAtom = atom<boolean>(false);

export const statusOptions = [
  { label: "Ativo", value: "true" },
  { label: "Inativo", value: "false" },
];

export const conectaOptions = [
  { label: "Sim", value: "true" },
  { label: "Não", value: "false" },
];
