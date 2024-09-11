import { Styles } from "../../utils/Styles";
import { Avatar } from "../images/Avatar";

export const HALL_OF_FAME_STUDENT_CARD_ID_PREFIX = "student-";

const styles: Styles = {
  item: {
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr 3fr 1fr 2fr 1fr",
    alignItems: "center",
    border: "1px solid black",
    gap: 12,
    padding: 12,
    boxSizing: "border-box",
  },
};

type HallOfFameStudentCardProps = {
  student: HallOfFameStudentData;
  isHighlighted?: boolean;
};

export type HallOfFameStudentData = {
  position: number;
  id: string;
  nick: string;
  levelName: string;
  totalPoints: number;
  groupId: string;
  avatarImgId?: string;
  levelImgId?: string;
};

export const HallOfFameStudentCard = ({
  student,
  isHighlighted,
}: HallOfFameStudentCardProps) => {
  return (
    <div
      id={HALL_OF_FAME_STUDENT_CARD_ID_PREFIX + student.id}
      style={{
        ...styles.item,
        backgroundColor: isHighlighted ? "pink" : "white",
      }}
    >
      <div>{student.position}.</div>
      <Avatar id={student.avatarImgId} size={"xs"} />
      <div>{student.nick}</div>
      <Avatar id={student.levelImgId} size={"xs"} />
      <div>{student.levelName}</div>
      <div>{student.totalPoints} pkt</div>
    </div>
  );
};
