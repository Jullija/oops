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
  const {
    id,
    position,
    nick,
    levelName,
    totalPoints,
    avatarImgId,
    levelImgId,
  } = student;

  return (
    <div
      id={HALL_OF_FAME_STUDENT_CARD_ID_PREFIX + id}
      style={{
        ...styles.item,
        backgroundColor: isHighlighted ? "pink" : "white",
      }}
    >
      <div>{position}.</div>
      <Avatar id={avatarImgId} size={"xs"} />
      <div>{nick}</div>
      <Avatar id={levelImgId} size={"xs"} />
      <div>{levelName}</div>
      <div>{totalPoints} pkt</div>
    </div>
  );
};
