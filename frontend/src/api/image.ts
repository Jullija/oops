export const FILES_URL = "http://localhost:9090/files/";

export const fetchImageFromApi = async (id: string): Promise<string> => {
  const response = await fetch(`${FILES_URL}${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
