export const isPartOfAString = (
  searchValue: string,
  words: string[],
): boolean => {
  const trimmed = searchValue.trim().toLowerCase();
  return words.some((word) => word.toLowerCase().includes(trimmed));
};
