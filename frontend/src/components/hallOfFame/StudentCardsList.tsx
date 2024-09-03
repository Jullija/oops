import { Styles } from "../../utils/Styles";
import {
  HallOfFameStudentData,
  HallOfFameStudentCard,
} from "./HallOfFameStudentCard";

const styles: Styles = {
  cardsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 12,
    width: 600,
    overflowY: "scroll",
    padding: 12,
  },
};

type StudentCardsListProps = {
  students: HallOfFameStudentData[];
  highlightedStudent?: HallOfFameStudentData;
};

export const StudentCardsList = ({
  students,
  highlightedStudent,
}: StudentCardsListProps) => {
  return (
    <div style={styles.cardsContainer}>
      {students.map((student) => (
        <HallOfFameStudentCard
          key={student.id}
          student={student}
          isHighlighted={student.id === highlightedStudent?.id}
        />
      ))}
    </div>
  );
};
