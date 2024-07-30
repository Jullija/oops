import { FilterButton } from "./FilterButton";

type FilterButtonGroup = {
  options: string[];
  selectedOption: string;
  onSelectionChange: (option: string) => void;
};

export const FilterButtonGroup = ({
  options,
  selectedOption,
  onSelectionChange,
}: FilterButtonGroup) => {
  return (
    <>
      {options.map((option) => (
        <FilterButton
          option={option}
          isActive={selectedOption === option}
          onClick={() => onSelectionChange(option)}
        />
      ))}
    </>
  );
};
