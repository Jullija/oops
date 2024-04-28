import { Student } from "../utils";

export const getAllStudents = (): Student[] => {
  return users;
};

const users: Student[] = [
  { id: "1", name: "Anna Cichocka" },
  { id: "2", name: "Julia Smerdel" },
];
