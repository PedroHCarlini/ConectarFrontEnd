import { useState } from "react";
import { Collapse } from "react-collapse";
import { FiltersForm } from "./filtersForm";
export const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-lg w-full h-fit justify-center px-4 py-6">
      <div className="flex w-full items-center justify-between bg-gray-300 h-[60px] py-4 px-2 gap-2">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src="src/assets/icons/search.png" alt="" />
          <div>
            <p className="font-bold">Filtros</p>
            <p className="text-gray-500">Filtre e busque itens na página</p>
          </div>
        </div>
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <img
            className="w-6 h-6"
            src={
              isOpen
                ? "src/assets/icons/arrow-up.png"
                : "src/assets/icons/arrow-down.png"
            }
            alt=""
          />
        </button>
      </div>
      {isOpen && (
        <Collapse isOpened={isOpen}>
          <FiltersForm />
        </Collapse>
      )}
    </div>
  );
};
