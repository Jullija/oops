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
  how_many: number;
  from_who: string;
  // missing user id
};
