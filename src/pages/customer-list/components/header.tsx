import { useAtom } from "jotai";
import { activeTabAtom } from "../store";

export const Header = () => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);
  const tabsList = [
    {
      id: "basic-data",
      label: "Dados Basicos",
    },
    {
      id: "internal-infos",
      label: "Informações internas",
    },
    {
      id: "users",
      label: "Usuários",
    },
  ];

  return (
    <div className="flex flex-wrap px-4 h-16">
      {tabsList.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-bold text-lg cursor-pointer ${
            activeTab === tab.id ? "border-b-3" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
