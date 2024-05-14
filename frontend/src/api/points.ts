import { Points } from "../utils";

export const getPoints = (): Points[] => {
  return points;
};

export const getPointsBySubcategory = (subcategoryId: string): Points[] => {
  return points.filter((points) => points.subcategory.id === subcategoryId);
};

export const GetPointsByStudent = (studentId: string): Points[] => {
  return points.filter((points) => points.student.id === studentId);
};

const points: Points[] = [
  {
    id: "1",
    category: { id: "1", name: "Labolatorium" },
    subcategory: { id: "1", categoryId: "1", name: "lab1" },
    student: { id: "1", name: "Anna Cichocka", level: 12 },
    provider: { id: "1", name: "Michał Idzik" },
    number: 8,
  },
  {
    id: "2",
    category: { id: "2", name: "Kartkówka" },
    subcategory: { id: "2", categoryId: "2", name: "kartkówka1" },
    student: { id: "1", name: "Anna Cichocka", level: 12 },
    provider: { id: "1", name: "Michał Idzik" },
    number: 1,
  },
  {
    id: "3",
    category: { id: "1", name: "Labolatorium" },
    subcategory: { id: "3", categoryId: "1", name: "lab2" },
    student: { id: "2", name: "Julia Smerdel", level: 14 },
    provider: { id: "1", name: "Michał Idzik" },
    number: 7.5,
  },
  {
    id: "4",
    category: { id: "3", name: "Wykład" },
    subcategory: { id: "4", categoryId: "3", name: "wykład1" },
    student: { id: "2", name: "Julia Smerdel", level: 14 },
    provider: { id: "1", name: "Michał Idzik" },
    number: 3,
  },
  {
    id: "5",
    category: { id: "4", name: "Event" },
    subcategory: { id: "5", categoryId: "4", name: "gitowe dziady" },
    student: { id: "1", name: "Anna Cichocka", level: 12 },
    provider: { id: "1", name: "Michał Idzik" },
    number: 10,
  },
];
