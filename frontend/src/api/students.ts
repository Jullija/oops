import { Student } from "../utils";

export const getStudents = (): Student[] => {
  return students;
};

const students: Student[] = [
  { id: "1", name: "Anna Cichocka", level: 12 },
  { id: "2", name: "Julia Smerdel", level: 14 },
  { id: "3", name: "Krzysztof Wiśniewski", level: 16 },
  { id: "4", name: "Anna Wójcik", level: 18 },
  { id: "5", name: "Maria Kowalczyk", level: 12 },
  { id: "6", name: "Magdalena Kamińska", level: 15 },
  { id: "7", name: "Piotr Lewandowski", level: 14 },
  { id: "8", name: "Michał Zieliński", level: 10 },
  { id: "9", name: "Tomasz Szymański", level: 11 },
  { id: "10", name: "Katarzyna Woźniak", level: 13 },
  { id: "11", name: "Jan Kowalski", level: 15 },
  { id: "12", name: "Andrzej Nowak", level: 16 },
  { id: "13", name: "Krzysztof Wiśniewski", level: 18 },
  { id: "14", name: "Anna Wójcik", level: 12 },
  { id: "15", name: "Maria Kowalczyk", level: 15 },
  { id: "16", name: "Magdalena Kamińska", level: 14 },
  { id: "17", name: "Piotr Lewandowski", level: 10 },
  { id: "18", name: "Michał Zieliński", level: 11 },
  { id: "19", name: "Tomasz Szymański", level: 13 },
  { id: "20", name: "Katarzyna Woźniak", level: 15 },
  { id: "21", name: "Jan Kowalski", level: 16 },
];
