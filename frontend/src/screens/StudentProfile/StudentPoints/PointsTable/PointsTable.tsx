import { Points } from "../../../../utils";
import "./tableStyles.css";

type PointsTableProps = {
  pointsList: Points[];
};

export const PointsTable = ({ pointsList }: PointsTableProps) => {
  const headers = ["category", "subcategory", "points", "provider"];

  return (
    <div className="points-table">
      <div className="row">
        {headers.map((header, index) => (
          <div key={index} className="cell">
            {header}
          </div>
        ))}
      </div>

      {pointsList.map((points, index) => (
        <div key={index} className="row">
          <div className="cell">{points.category.name}</div>
          <div className="cell">{points.subcategory.name}</div>
          <div className="cell">{points.number}</div>
          <div className="cell">{points.provider.name}</div>
        </div>
      ))}
    </div>
  );
};
