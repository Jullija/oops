import { Points } from "../utils";

export const getAllPoints = (): Points[] => {
  return points;
};

export const getPoints = (subcategoryId: string): Points[] => {
  return points.filter((points) => points.subcategoryId === subcategoryId);
};

export const getUserPoints = (userId: string): Points[] => {
  return points.filter((points) => points.userId === userId);
};

const points: Points[] = [
  {
    id: "1",
    subcategoryId: "1",
    userId: "1",
    providerId: "1",
    number: 8,
  },
  {
    id: "2",
    subcategoryId: "2",
    userId: "1",
    providerId: "1",
    number: 1,
  },
  {
    id: "3",
    subcategoryId: "3",
    userId: "2",
    providerId: "1",
    number: 7.5,
  },
  {
    id: "4",
    subcategoryId: "4",
    userId: "2",
    providerId: "1",
    number: 3,
  },
  {
    id: "5",
    subcategoryId: "5",
    userId: "1",
    providerId: "1",
    number: 10,
  },
];
