import { Styles } from "../../utils/Styles";
import { SideBar } from "../../components/hallOfFame/SideBar";
import { useHallOfFameData } from "../../hooks/HallOfFame/useHallOfFameData";
import { NAV_BAR_HEIGHT } from "../../components/Navbar";

const styles: Styles = {
  container: {
    position: "relative",
    display: "flex",
    // TODO: I have no idea how to get rig of outer page scroll
    height: `calc(100vh - ${NAV_BAR_HEIGHT + 1}px)`,
  },
  leftSide: {
    flex: 1,
  },
};

export default function HallOfFame() {
  const { students, highlightedStudentId, loading, error } =
    useHallOfFameData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>koej</div>
      <SideBar
        students={students}
        highlightedStudentId={highlightedStudentId}
      />
    </div>
  );
}
