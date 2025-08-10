import CreatableSelect from "react-select/creatable";
import { selectStyles } from "../shared/selectStyles";

type TagInputProps = {
  value: string[];
  onChange: (tags: string[]) => void;
};

const TagInput = ({ value, onChange }: TagInputProps) => {
  const selectValue = value.map((tag) => ({ label: tag, value: tag }));

  const handleChange = (newValue: any) => {
    onChange(newValue ? newValue.map((item: any) => item.value) : []);
  };

  return (
    <div className="flex flex-col font-normal gap-2">
      <label className="text-base">Tags</label>
      <CreatableSelect
        isMulti
        value={selectValue}
        onChange={handleChange}
        placeholder="Digite e pressione Enter para adicionar uma tag"
        noOptionsMessage={() => "Digite e pressione Enter para criar uma tag"}
        styles={selectStyles}
        formatCreateLabel={(inputValue) => `Criar tag: "${inputValue}"`}
        options={[]}
      />
    </div>
  );
};

export default TagInput;
