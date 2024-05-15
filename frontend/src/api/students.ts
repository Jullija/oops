import { Student } from "../utils";

export const getStudents = (): Student[] => {
  return students;
};

export const getStudent = (id: string): Student | undefined => {
  return students.find((student) => student.id === id);
};

const students: Student[] = [
  { id: "1", name: "Anna Cichocka" },
  { id: "2", name: "Julia Smerdel" },
];
