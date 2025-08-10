import { atom } from "jotai";

export const statusOptions = [
  { label: "Ativo", value: true },
  { label: "Inativo", value: false },
];

export const conectaOptions = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

export const toggleModalAtom = atom<boolean>(false);
