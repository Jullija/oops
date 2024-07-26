import { useState } from "react";
import { GradeRow, RowData } from "./rows/GradeRow";
import { TitleRow } from "./rows/TitleRow";

const data: RowData[] = [
  {
    position: 0,
    fullName: "full name",
    entries: [
      {
        bare: 100,
        bonus: 0,
      },
    ],
    sum: 0,
  },
  {
    position: 0,
    fullName: "full name",
    entries: [
      {
        bare: 100,
        bonus: 0,
      },
    ],
    sum: 0,
  },
  {
    position: 0,
    fullName: "full name",
    entries: [
      {
        bare: 100,
        bonus: 0,
      },
    ],
    sum: 0,
  },
];

export const GradeTable = () => {
  const titles = ["students", "lab1", "sum"];
  const [editable, setEditable] = useState(true);

  return (
    <>
      <button onClick={() => setEditable((prev) => !prev)}>
        {editable ? "editable on" : "editable off"}
      </button>
      <div style={{ backgroundColor: "lightblue" }}>
        <TitleRow titles={titles} />
        {data.map((d, index) => (
          <GradeRow key={index} data={d} editable={editable} />
        ))}
      </div>
    </>
  );
};
