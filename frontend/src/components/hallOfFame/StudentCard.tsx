import { Styles } from "../../utils/Styles";

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
  position: number;
  data: HallOfFameStudentData;
  isHighlighted?: boolean;
};

export type HallOfFameStudentData = {
  id: string;
  avatarId: string;
  nick: string;
  animalId: string;
  level: number;
  // TODO string wtf
  totalPoints: number | string;
};

// TODO it would be nice to show animal name

export const StudentCard = ({
  position,
  data,
  isHighlighted,
}: HallOfFameStudentCardProps) => {
  return (
    <div
      id={`student-${data.id}`}
      style={{
        ...styles.item,
        backgroundColor: isHighlighted ? "pink" : "white",
      }}
    >
      <div>{position}.</div>
      <div style={styles.logoPlaceholder} />
      <div>{data.nick}</div>
      <div style={styles.logoPlaceholder} />
      <div>lvl {data.level}</div>
      <div>{data.totalPoints} pkt</div>
    </div>
  );
};
