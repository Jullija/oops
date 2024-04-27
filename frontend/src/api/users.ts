import { User } from "../utils";

export const getAllUsers = (): User[] => {
  return users;
};

const users: User[] = [
  { id: "1", name: "Anna Cichocka" },
  { id: "2", name: "Julia Smerdel" },
];
