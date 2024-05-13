import { Student } from "../utils";

export const getStudents = (): Student[] => {
  return students;
};

const students: Student[] = [
  { id: "1", name: "Anna Cichocka" },
  { id: "2", name: "Julia Smerdel" },
];
