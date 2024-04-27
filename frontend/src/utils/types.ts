export type User = {
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
  userId: string;
  providerId: string;
  number: number;
};
