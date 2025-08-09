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

export const selectStyles = {
  container: (provided: any) => ({ ...provided, width: "100%" }),
  control: (provided: any) => ({
    ...provided,
    background: "#ffffff",
    border: `2px solid rgba(156,163,175,0.5)`,
    boxShadow: "none",
    minHeight: 50,
    height: 50,
    borderRadius: 4,
    paddingLeft: 6,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: 50,
    padding: "0 6px",
  }),
  input: (provided: any) => ({ ...provided, margin: 0, padding: 0 }),
  indicatorsContainer: (provided: any) => ({ ...provided, height: 50 }),
  singleValue: (provided: any) => ({ ...provided, margin: 0 }),
  placeholder: (provided: any) => ({ ...provided, margin: 0 }),
  menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
};
