import { Student } from "../utils";

export const getStudents = (): Student[] => {
  return students;
};

export const getStudent = (id: string): Student | undefined => {
  return students.find((student) => student.id === id);
};

const students: Student[] = [
  { id: "1", name: "Anna Cichocka", level: 2, experience: 133 },
  { id: "2", name: "Julia Smerdel", level: 3, experience: 270 },
  { id: "3", name: "Krzysztof Wiśniewski", level: 1, experience: 102 },
  { id: "4", name: "Anna Wójcik", level: 3, experience: 202 },
  { id: "5", name: "Maria Kowalczyk", level: 4, experience: 388 },
  { id: "6", name: "Magdalena Kamińska", level: 2, experience: 122 },
  { id: "7", name: "Piotr Lewandowski", level: 1, experience: 77 },
  { id: "8", name: "Michał Zieliński", level: 3, experience: 297 },
  { id: "9", name: "Tomasz Szymański", level: 4, experience: 342 },
  { id: "10", name: "Katarzyna Woźniak", level: 4, experience: 399 },
  { id: "11", name: "Jan Kowalski", level: 2, experience: 188 },
  { id: "12", name: "Andrzej Nowak", level: 2, experience: 180 },
  { id: "13", name: "Krzysztof Wiśniewski", level: 1, experience: 2 },
  { id: "14", name: "Anna Wójcik", level: 3, experience: 250 },
  { id: "15", name: "Maria Kowalczyk", level: 4, experience: 365 },
  { id: "16", name: "Magdalena Kamińska", level: 2, experience: 177 },
  { id: "17", name: "Piotr Lewandowski", level: 1, experience: 97 },
  { id: "18", name: "Michał Zieliński", level: 1, experience: 12 },
  { id: "19", name: "Tomasz Szymański", level: 1, experience: 5 },
  { id: "20", name: "Katarzyna Woźniak", level: 2, experience: 107 },
  { id: "21", name: "Jan Kowalski", level: 3, experience: 240 },
];
