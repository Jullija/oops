import React, { useState } from "react";
import { UserPointsQuery } from "../../graphql/userPoints.graphql.types";
import { Styles } from "../../utils";
import PointsTableHeader from "./pointsTableHeader";
import PointsTableRow from "./pointsTableRow";

const styles: Styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

function PointsTable({
  points,
}: {
  points: NonNullable<UserPointsQuery["usersByPk"]>["points"];
}) {
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
      <PointsTableHeader
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
      <tbody>
        {filteredPoints.map((point) => (
          <PointsTableRow key={point.pointsId} point={point} />
        ))}
      </tbody>
    </table>
  );
}

export default PointsTable;
