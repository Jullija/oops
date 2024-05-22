import {
  getCategories,
  getPoints,
  getSubcategories,
  getStudents,
  getProviders,
} from "../api";
import { Category, Points, Subcategory, Student, Styles } from "../utils";

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightgrey",
    padding: 12,
    width: 200,
    margin: 12,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    columnGap: 12,
    alignItems: "center",
  },
};

type categoryMockDataRequests = {
  name: string;
  requests: Request[];
};

type Request = {
  name: string;
  func: () => (Category | Subcategory | Points | Student)[];
};
const categoryMockDataRequestsRequests: categoryMockDataRequests[] = [
  { name: "categories", requests: [{ name: "get", func: getCategories }] },
  { name: "points", requests: [{ name: "get", func: getPoints }] },
  {
    name: "subcategories",
    requests: [{ name: "get", func: getSubcategories }],
  },
  { name: "students", requests: [{ name: "get", func: getStudents }] },
  { name: "providers", requests: [{ name: "get", func: getProviders }] },
];

export const MockData = () => {
  return (
    <div style={styles.container}>
      {categoryMockDataRequestsRequests.map((item, index) => (
        <div key={index} style={styles.card}>
          <p>{item.name}</p>
          {item.requests.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                const res = action.func();
                console.log(`[${item.name} - ${action.name}] `, res);
              }}
            >
              {action.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
