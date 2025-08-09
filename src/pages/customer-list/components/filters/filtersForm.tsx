import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import {
  conectaOptions,
  formFiltersAtom,
  selectStyles,
  statusOptions,
} from "../../store";
import { useSetAtom } from "jotai";

export interface FiltersFormData {
  name: string;
  cnpj: string;
  status: string | null;
  conectaPlus: string | null;
}

export const FiltersForm = () => {
  const { register, reset, handleSubmit, control } = useForm<FiltersFormData>({
    defaultValues: {
      name: "",
      cnpj: "",
      status: null,
      conectaPlus: null,
    },
  });
  const setFormfilter = useSetAtom(formFiltersAtom);

  const onSubmit = (data: FiltersFormData) => {
    setFormfilter(data);
  };

  const onClear = () => {
    reset();
    setFormfilter({
      name: "",
      cnpj: "",
      status: null,
      conectaPlus: null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-4 h-full w-full gap-4 py-4"
    >
      <div className="flex flex-col font-normal gap-2">
        <label>Buscar por nome</label>
        <input
          type="text"
          className="p-3 rounded outline-none bg-white border-2 border-gray-400 border-opacity-50"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col font-normal gap-2">
        <label>Buscar por CNPJ</label>
        <input
          type="text"
          className="p-3 rounded outline-none bg-white border-2 border-gray-400 border-opacity-50"
          {...register("cnpj")}
        />
      </div>

      <div className="flex flex-col font-normal gap-2">
        <label>Buscar por Status</label>
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

      <div className="flex flex-col font-normal gap-2 col-span-1">
        <label>Buscar por Conectar+</label>
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

      <div className="flex w-full items-center justify-end gap-4 col-span-4">
        <div className=" mt-2">
          <button
            type="button"
            onClick={() => onClear()}
            className="px-10 py-3 font-medium bg-white text-[#1aaf79] border border-[#1aaf79] rounded cursor-pointer"
          >
            Limpar Campos
          </button>
        </div>
        <div className=" mt-2">
          <button
            type="submit"
            className="px-10 py-3 w-[12rem] font-medium bg-[#1aaf79] text-white rounded border border-[#1aaf79] cursor-pointer"
          >
            Filtrar
          </button>
        </div>
      </div>
    </form>
  );
};
