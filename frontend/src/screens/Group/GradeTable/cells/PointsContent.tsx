import { ChangeEvent, useState } from "react";
import { PointsCellData } from "./Cell";

export const PointsContent = ({
  bare,
  editable,
  onInputChange,
}: PointsCellData) => {
  const [input, setInput] = useState(bare.toString());

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stringInput = e.target.value;
    if (/^(\d+\.\d*|\d*)$/.test(stringInput)) {
      setInput(stringInput);
      const numberInput = parseFloat(stringInput);
      onInputChange(isNaN(numberInput) ? 0 : numberInput);
    }
  };

  return editable ? (
    <input value={input} onChange={handleInputChange} style={{ width: 48 }} />
  ) : (
    bare
  );
};
