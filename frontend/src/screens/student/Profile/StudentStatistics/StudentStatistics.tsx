import { getLevel, getLevels } from "../../../api/levels";
import { Student } from "../../../utils";
import { PointsBar } from "./PointsBar";
import "./styles.css";

type StudentStatisticsProps = {
  student: Student;
};

export const StudentStatistics = ({ student }: StudentStatisticsProps) => {
  const level = student.level;
  const maxLevel = getLevels().length;
  const lowerLevel = level === maxLevel ? level - 1 : level;
  const upperLevel = level === maxLevel ? level : level + 1;
  const maxUpperLevelExperience = getLevel(upperLevel)?.maxExperience;

  // TODO max level
  // TODO what happens if max level reached

  if (!maxUpperLevelExperience) {
    return <p>wrong max upper level</p>;
  }

  return (
    <div className="statistics-container">
      <div className="student-avatar-placeholder" />

      <PointsBar
        experience={student.experience}
        maxExperience={maxUpperLevelExperience}
      />

      <div className="next-prev-items-container">
        <div className="next-prev-item-container">
          <div className="next-prev-avatar-placeholder" />
          <div>{lowerLevel} lvl</div>
        </div>

        <div className="next-prev-item-container">
          <div className="next-prev-avatar-placeholder" />
          <div>{upperLevel} lvl</div>
        </div>
      </div>
    </div>
  );
};
