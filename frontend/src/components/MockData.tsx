import {
  getCategories,
  getPoints,
  getSubcategories,
  getStudents,
  getProviders,
} from "../api";
import { Category, Points, Subcategory, Student } from "../utils";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid lightgrey",
        padding: 12,
        width: 200,
      }}
    >
      {categoryMockDataRequestsRequests.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 12,
            alignItems: "center",
          }}
        >
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
