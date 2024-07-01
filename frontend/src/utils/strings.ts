export const isPartOfAString = (searchValue: string, str: string) =>
  str.toLowerCase().includes(searchValue.trim().toLowerCase());
