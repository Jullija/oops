import { Styles } from "../../utils/Styles";

const styles: Styles = {
  header: {
    position: "sticky",
    top: 0,
    display: "grid",
    gridTemplateColumns: "2fr 3fr 2fr 1fr",
    gap: 12,
    width: "100%",
    padding: "12px 0",
    backgroundColor: "white",
    borderBottom: "1px solid #ccc",
    fontWeight: "bold",
    zIndex: 100,
  },
};

export default function HallOfFameHeader() {
  return (
    <div style={styles.header}>
      <div>Pozycja</div>
      <div>Nick</div>
      <div>Poziom</div>
      <div>Punkty</div>
    </div>
  );
}
