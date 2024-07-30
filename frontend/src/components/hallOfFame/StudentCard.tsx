import { Styles } from "../../utils/Styles";

export const HALL_OF_FAME_STUDENT_CARD_ID_PREFIX = "student-";

const styles: Styles = {
  item: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr 1fr",
    alignItems: "center",
    border: "1px solid black",
    gap: 12,
    padding: 12,
    boxSizing: "border-box",
  },
  logoPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "gray",
  },
};

type HallOfFameStudentCardProps = {
  student: HallOfFameStudentData;
  isHighlighted?: boolean;
};

export type HallOfFameStudentData = {
  position: number;
  id: string;
  avatarId: string;
  nick: string;
  animalId: string;
  level: number;
  // TODO string wtf
  totalPoints: number | string;
  groupId: string;
};

// TODO it would be nice to show animal name ?

export const StudentCard = ({
  student,
  isHighlighted,
}: HallOfFameStudentCardProps) => {
  const { id, position, nick, level, totalPoints } = student;

  return (
    <div
      id={HALL_OF_FAME_STUDENT_CARD_ID_PREFIX + id}
      style={{
        ...styles.item,
        backgroundColor: isHighlighted ? "pink" : "white",
      }}
    >
      <div>{position}.</div>
      <div style={styles.logoPlaceholder} />
      <div>{nick}</div>
      <div style={styles.logoPlaceholder} />
      <div>lvl {level}</div>
      <div>{totalPoints} pkt</div>
    </div>
  );
};
