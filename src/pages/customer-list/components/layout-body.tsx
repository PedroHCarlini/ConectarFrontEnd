import { Filters } from "./filters/filters";
import { Table } from "./table/table";

export const LayoutBody = () => {
  return (
    <div className="h-full w-full p-8 bg-gray-300">
      <Filters />
      <Table />
    </div>
  );
};
