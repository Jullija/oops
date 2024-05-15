export type Student = {
  id: string;
  name: string;
  level: number;
  experience: number;
};

export type Provider = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Subcategory = {
  id: string;
  categoryId: string;
  name: string;
};

export type Points = {
  id: string;
  category: Category;
  subcategory: Subcategory;
  student: Student;
  provider: Provider;
  number: number;
};

export type Level = {
  level: number;
  minExperience: number;
  maxExperience: number;
};
