import { CellVariant, getCellStyles, getCenteredStyles } from "../utils";
import { PointsContent } from "./PointsContent";

type CellProps = {
  data: StudentCellData | PointsCellData | SumCellData | TitleCellData;
  centered?: boolean;
};

type StudentCellData = { variant: "student"; title: string };

type SumCellData = { variant: "sum"; sum: number };

export type PointsCellData = {
  variant: "points";
  bare: number;
  editable: boolean;
  onInputChange: (newValue: number) => void;
};

type TitleCellData = {
  variant: "title";
  title: string;
  widthVariant: CellVariant;
};

export const Cell = ({ data }: CellProps) => {
  const getCellContent = () => {
    switch (data.variant) {
      case "title":
        return data.title;
      case "student":
        return data.title;
      case "points":
        return <PointsContent {...data} />;
      case "sum":
        return data.sum;
    }
  };

  console.log(getCenteredStyles(data.variant));
  return (
    <div
      style={{
        ...getCellStyles(
          data.variant === "title" ? data.widthVariant : data.variant,
        ),
        ...getCenteredStyles(data.variant),
      }}
    >
      {getCellContent()}
    </div>
  );
};
