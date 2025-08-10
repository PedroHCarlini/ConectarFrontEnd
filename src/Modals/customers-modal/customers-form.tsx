import { useForm, Controller } from "react-hook-form";
import TagInput from "../../components/tagInput";
import Select from "react-select";
import { conectaOptions, statusOptions } from "./store";
import { selectStyles } from "../../shared/selectStyles";
import { useMutationCustomer } from "./hooks/useMutationCustomer";
import type { Customer } from "../../pages/customer-list/store";

export interface ModalFormData {
  legalName: string;
  cnpj: string;
  customerName: string;
  status: boolean | null;
  conectaPlus: boolean | null;
  tags: string[];
}

export const CustomersForm = ({ customer }: { customer: Customer | null }) => {
  console.log(customer);
  const { handleSubmit, control, reset } = useForm<ModalFormData>({
    defaultValues: {
      legalName: customer?.legalName || "",
      cnpj: customer?.cnpj || "",
      customerName: customer?.customerName || "",
      status: customer?.status || null,
      conectaPlus: customer?.conectaPlus || null,
      tags: customer?.tags || [],
    },
  });
  const { handleRequest } = useMutationCustomer();

  const onSubmit = (data: ModalFormData) => {
    if (customer?.id) {
      return handleRequest({ id: customer.id, value: data });
    }
    return handleRequest({ value: data });
  };

  const onClear = () => reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        name="legalName"
        control={control}
        render={({ field }) => (
          <div>
            <label className="text-base">Razão Social</label>
            <input
              type="text"
              className="p-2 rounded w-full outline-none bg-white border-2 border-gray-400/40"
              placeholder="Digite a razão social"
              {...field}
            />
          </div>
        )}
      />

      <Controller
        name="customerName"
        control={control}
        render={({ field }) => (
          <div>
            <label className="text-base">Nome do Cliente</label>
            <input
              type="text"
              className="p-2 rounded w-full outline-none bg-white border-2 border-gray-400/40"
              placeholder="Digite o nome do cliente"
              {...field}
            />
          </div>
        )}
      />

      <Controller
        name="cnpj"
        control={control}
        render={({ field }) => (
          <div>
            <label className="text-base">CNPJ</label>
            <input
              type="text"
              className="p-2 rounded w-full outline-none bg-white border-2 border-gray-400/40"
              placeholder="Digite o CNPJ"
              {...field}
            />
          </div>
        )}
      />

      <div className="flex flex-col font-normal gap-2">
        <label>Status</label>
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Select
              {...field}
              options={statusOptions}
              isClearable
              placeholder="Selecione o status..."
              value={statusOptions.find((o) => o.value === field.value) ?? null}
              styles={selectStyles}
              onChange={(option) =>
                field.onChange(option ? option.value : null)
              }
            />
          )}
        />
      </div>

      <div className="flex flex-col font-normal gap-2">
        <label>Conectar+</label>
        <Controller
          name="conectaPlus"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={conectaOptions}
              isClearable
              placeholder="Selecione Conectar+..."
              styles={selectStyles}
              value={
                conectaOptions.find((o) => o.value === field.value) ?? null
              }
              onChange={(option) =>
                field.onChange(option ? option.value : null)
              }
            />
          )}
        />
      </div>

      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <TagInput
            value={field.value}
            onChange={(tags: any) => field.onChange(tags)}
          />
        )}
      />

      <div className="flex gap-2 justify-end">
        <button
          className="px-4 py-2 font-medium bg-white text-[#1aaf79] border border-[#1aaf79] rounded cursor-pointer"
          type="button"
          onClick={onClear}
        >
          Limpar
        </button>
        <button
          className="px-4 py-2 font-medium bg-[#1aaf79] text-white border border-[#1aaf79] rounded cursor-pointer"
          type="submit"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};
