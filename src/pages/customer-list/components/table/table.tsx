import { useAtomValue } from "jotai";
import {
  customersAtom,
  customersLoadingAtom,
  type Customer,
} from "../../store";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

export const Table = () => {
  const customers = useAtomValue(customersAtom);
  const customersLoading = useAtomValue(customersLoadingAtom);

  const columns: ColumnDef<Customer>[] = [
    {
      accessorKey: "legalName",
      header: "Razão Social",
    },
    {
      accessorKey: "cnpj",
      header: "CNPJ",
    },
    {
      accessorKey: "customerName",
      header: "Nome da fachada",
    },
    {
      accessorKey: "tags",
      header: "Tags",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "conectaPlus",
      header: "Conectar+",
    },
  ];

  const table = useReactTable({
    data: customers as Customer[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (customersLoading || !customers) return <p>Carregando...</p>;

  console.log(customers);

  return (
    <div className="w-full rounded-md bg-white mt-[60px] h-fit flex flex-col p-6 min-w-[1250px] max-h-[580px] overflow-auto">
      <div>
        <p className="font-bold text-xl">Clientes</p>
        <p className="text-gray-500">
          Selecione um cliente para editar suas informações
        </p>
      </div>
      <div className="flex w-full justify-end mb-4">
        <button className="px-10 py-2 bg-white border rounded cursor-pointer">
          Novo
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {table.getHeaderGroups()[0].headers.map((header) => (
              <th
                key={header.id}
                className="px-8 py-4 text-left border-b border-gray-100  bg-[#1aaf79]/30"
              >
                <div className="flex gap-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-10 py-4 truncate">
                {row.getValue("legalName")}
              </td>
              <td className="px-10 py-4 truncate">{row.getValue("cnpj")}</td>
              <td className="px-10 py-4 truncate">
                {row.getValue("customerName")}
              </td>
              <td className="px-10 py-4 truncate">
                {(row.getValue("tags") as string[]).join(", ")}
              </td>
              <td className="px-10 py-4">
                {row.getValue("status") ? "Ativo" : "Inativo"}
              </td>
              <td className="px-10 py-4">
                {row.getValue("conectaPlus") ? "Sim" : "Não"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
