import { GetPointsByStudent } from "../../../api";
import { Student } from "../../../utils";
import "./tableStyles.css";

type PointsTableProps = {
  student: Student;
};

export const PointsTable = ({ student }: PointsTableProps) => {
  const headers = ["subcategory", "points", "provider"];
  const points = GetPointsByStudent(student.id);

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
          <div className="cell">{points.subcategoryId}</div>
          <div className="cell">{points.number}</div>
          <div className="cell">{points.providerId}</div>
        </div>
      ))}
    </div>
  );
};
