import { GroupRadioFilterItem } from "../components/Groups/RadioFilterGroup";

export const FILES_URL = "http://localhost:9090/files/";

export const GRAPHQL_URI = "http://127.0.0.1:9191/v1/graphql";

// TODO try to reuse it in hall of fame
export const groupsRadioButtonOptions: GroupRadioFilterItem[] = [
  { id: "all", name: "wszystkie" },
  { id: "yours", name: "twoje" },
  { id: "foreign", name: "obce" },
];
