import { Styles } from "../../../../utils/Styles";
import { Cell } from "../cells/Cell";

type GradeRowProps = {
  data: RowData;
  editable: boolean;
};

export type RowData = {
  position: number;
  fullName: string;
  entries: Entry[];
  sum: number;
};

type Entry = {
  bare: number;
  bonus: number;
};

const styles: Styles = {
  container: {
    display: "flex",
  },
  cell: {
    padding: 20,
    border: "1px solid black",
    width: 200,
  },
};

export const GradeRow = ({ data, editable }: GradeRowProps) => {
  const { entries, position, fullName, sum } = data;

  const handleInputChange = (newValue: number) => {
    console.log("I GOT NUMBER: ", newValue);
  };

  return (
    <div style={styles.container}>
      <Cell data={{ variant: "student", title: `${position}. ${fullName}` }} />
      {entries.map((entry, index) => (
        <Cell
          key={index}
          data={{
            variant: "points",
            bare: entry.bare,
            editable,
            onInputChange: handleInputChange,
          }}
        />
      ))}
      <Cell data={{ variant: "sum", sum }} />
    </div>
  );
};
