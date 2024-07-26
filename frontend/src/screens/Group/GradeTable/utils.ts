export type CellVariant = "student" | "points" | "sum" | "title";

export const STUDENT_CELL_WIDTH = 200;
export const POINTS_CELL_WIDTH = 100;
export const SUM_CELL_WIDTH = 200;

const centeredVariants: CellVariant[] = ["title", "points"];

export const getCenteredStyles = (variant: CellVariant) => {
  return centeredVariants.includes(variant)
    ? { display: "flex", alignItems: "centered", justifyContent: "centered" }
    : undefined;
};

export const getCellStyles = (variant: CellVariant) => {
  let width;
  switch (variant) {
    case "student":
      width = STUDENT_CELL_WIDTH;
      break;
    case "points":
      width = POINTS_CELL_WIDTH;
      break;
    case "sum":
      width = SUM_CELL_WIDTH;
      break;
    case "title":
      console.error("title cell variant doesn't have fixed width");
      return;
  }

  return {
    padding: 20,
    border: "1px solid black",
    width,
  };
};

export const getIsFocusedStyles = () => {
  return { border: "1px solid red" };
};
