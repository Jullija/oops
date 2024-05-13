import { Points } from "../utils";

export const getPoints = (): Points[] => {
  return points;
};

export const getPointsBySubcategory = (subcategoryId: string): Points[] => {
  return points.filter((points) => points.subcategoryId === subcategoryId);
};

export const GetPointsByStudent = (studentId: string): Points[] => {
  return points.filter((points) => points.studentId === studentId);
};

const points: Points[] = [
  {
    id: "1",
    categoryId: "1",
    subcategoryId: "1",
    studentId: "1",
    providerId: "1",
    number: 8,
  },
  {
    id: "2",
    categoryId: "2",
    subcategoryId: "2",
    studentId: "1",
    providerId: "1",
    number: 1,
  },
  {
    id: "3",
    categoryId: "1",
    subcategoryId: "3",
    studentId: "2",
    providerId: "1",
    number: 7.5,
  },
  {
    id: "4",
    categoryId: "3",
    subcategoryId: "4",
    studentId: "2",
    providerId: "1",
    number: 3,
  },
  {
    id: "5",
    categoryId: "4",
    subcategoryId: "5",
    studentId: "1",
    providerId: "1",
    number: 10,
  },
];
