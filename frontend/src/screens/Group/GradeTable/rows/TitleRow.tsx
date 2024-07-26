import { Cell } from "../cells/Cell";
import { CellVariant } from "../utils";

type TitleRowProps = {
  titles: string[];
};

export const TitleRow = ({ titles }: TitleRowProps) => {
  const getWidthVariant = (index: number): CellVariant => {
    if (index === 0) {
      return "student";
    }
    return index === titles.length - 1 ? "sum" : "points";
  };

  return (
    <div style={{ display: "flex" }}>
      {titles.map((title, index) => (
        <Cell
          key={index}
          data={{
            variant: "title",
            title,
            widthVariant: getWidthVariant(index),
          }}
        />
      ))}
    </div>
  );
};
