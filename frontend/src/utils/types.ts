export type Student = {
  id: string;
  name: string;
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
  subcategoryId: string;
  studentId: string;
  providerId: string;
  number: number;
};
