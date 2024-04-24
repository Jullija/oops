import { Points } from "../utils";

export const getAllPoints = (): Points[] => {
  return points;
};

export const getPoints = (subcategoryId: string): Points[] => {
  return points.filter((points) => points.subcategoryId === subcategoryId);
};

const points: Points[] = [
  {
    id: "1",
    subcategoryId: "1",
    how_many: 8,
    from_who: "todo",
  },
  {
    id: "2",
    subcategoryId: "2",
    how_many: 1,
    from_who: "todo",
  },
  {
    id: "3",
    subcategoryId: "3",
    how_many: 7.5,
    from_who: "todo",
  },
  {
    id: "4",
    subcategoryId: "4",
    how_many: 3,
    from_who: "todo",
  },
  {
    id: "5",
    subcategoryId: "5",
    how_many: 10,
    from_who: "todo",
  },
];
