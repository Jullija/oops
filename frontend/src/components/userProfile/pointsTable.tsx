import React, { useState } from "react";
import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { Styles } from "../../utils";

const styles: Styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid black",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
  filterInput: {
    width: "100%",
    padding: "4px",
    boxSizing: "border-box",
  },
};

type PointsTableProps = {
  points: NonNullable<UserPointsQuery["usersByPk"]>["points"];
};

export function PointsTable({ points }: PointsTableProps) {
  const [filters, setFilters] = useState({
    date: "",
    label: "",
    teacher: "",
    subcategory: "",
    category: "",
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredPoints = points.filter((point) => {
    return (
      point.createdAt.includes(filters.date) &&
      point.label.toLowerCase().includes(filters.label.toLowerCase()) &&
      `${point.userByTeacherId?.firstName} ${point.userByTeacherId?.secondName}`
        .toLowerCase()
        .includes(filters.teacher.toLowerCase()) &&
      point.subcategory.subcategoryName
        .toLowerCase()
        .includes(filters.subcategory.toLowerCase()) &&
      point.subcategory.category.categoryName
        .toLowerCase()
        .includes(filters.category.toLowerCase())
    );
  });

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>
            Date
            <input
              type="text"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              style={styles.filterInput}
            />
          </th>
          <th style={styles.th}>
            Label
            <input
              type="text"
              name="label"
              value={filters.label}
              onChange={handleFilterChange}
              style={styles.filterInput}
            />
          </th>
          <th style={styles.th}>
            Teacher
            <input
              type="text"
              name="teacher"
              value={filters.teacher}
              onChange={handleFilterChange}
              style={styles.filterInput}
            />
          </th>
          <th style={styles.th}>
            Subcategory
            <input
              type="text"
              name="subcategory"
              value={filters.subcategory}
              onChange={handleFilterChange}
              style={styles.filterInput}
            />
          </th>
          <th style={styles.th}>
            Category
            <input
              type="text"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              style={styles.filterInput}
            />
          </th>
          <th style={styles.th}>Bonuses</th>
        </tr>
      </thead>
      <tbody>
        {filteredPoints.map((point) => (
          <tr key={point.pointsId}>
            <td style={styles.td}>{point.createdAt}</td>
            <td style={styles.td}>{point.label}</td>
            <td style={styles.td}>
              {point.userByTeacherId?.firstName}{" "}
              {point.userByTeacherId?.secondName}
            </td>
            <td style={styles.td}>{point.subcategory.subcategoryName}</td>
            <td style={styles.td}>{point.subcategory.category.categoryName}</td>
            <td style={styles.td}>
              {point.bonuses.map((bonus) => (
                <div key={bonus.bonusId}>
                  {bonus.award.awardName} ({bonus.award.awardType})
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
