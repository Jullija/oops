import React from "react";
import { Styles } from "../../utils";

const styles: Styles = {
  th: {
    borderBottom: "2px solid black",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  },
  filterInput: {
    width: "100%",
    padding: "4px",
    boxSizing: "border-box",
  },
};

const headers = [
  "Date",
  "Label",
  "Teacher",
  "Subcategory",
  "Category",
  "Bonuses",
];

function PointsTableHeader({
  filters,
  handleFilterChange,
}: {
  filters: Record<string, string>;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} style={styles.th}>
            {header}
            {header !== "Bonuses" && (
              <input
                type="text"
                name={header.toLowerCase()}
                value={filters[header.toLowerCase()]}
                onChange={handleFilterChange}
                style={styles.filterInput}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default PointsTableHeader;
