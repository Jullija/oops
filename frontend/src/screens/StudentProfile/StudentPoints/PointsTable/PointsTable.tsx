import { Points } from "../../../../utils";
import "./tableStyles.css";

type PointsTableProps = {
  pointsList: Points[];
};

export const PointsTable = ({ pointsList: points }: PointsTableProps) => {
  const headers = ["subcategory", "points", "provider"];

  return (
    <div className="points-table">
      <div className="row">
        {headers.map((header, index) => (
          <div key={index} className="cell">
            {header}
          </div>
        ))}
      </div>

      {points.map((points, index) => (
        <div key={index} className="row">
          <div className="cell">{points.subcategory.id}</div>
          <div className="cell">{points.number}</div>
          <div className="cell">{points.provider.id}</div>
        </div>
      ))}
    </div>
  );
};
