import { Level } from "../utils";

export const getLevel = (level: number): Level | undefined => {
  return levels.find((l) => {
    l.level === level;
  });
};

export const GetLevels = (): Level[] => {
  return levels;
};

const levels: Level[] = [
  {
    level: 1,
    minExperience: 0,
    maxExperience: 99,
  },
  {
    level: 2,
    minExperience: 100,
    maxExperience: 199,
  },
  {
    level: 3,
    minExperience: 200,
    maxExperience: 299,
  },
  {
    level: 4,
    minExperience: 300,
    maxExperience: 399,
  },
];
