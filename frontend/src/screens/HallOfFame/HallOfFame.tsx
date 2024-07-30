import { Styles } from "../../utils/Styles";
import { SideBar } from "../../components/hallOfFame/SideBar";
import {
  MY_GROUP,
  useHallOfFameData,
} from "../../hooks/HallOfFame/useHallOfFameData";
import { NAV_BAR_HEIGHT } from "../../components/Navbar";
import { Podium } from "../../components/hallOfFame/Podium/Podium";
import { StatisticsBox } from "../../components/hallOfFame/StatisticsBox";
import { useState } from "react";

const styles: Styles = {
  container: {
    position: "relative",
    display: "flex",
    // TODO: I have no idea how to get rig of outer page scroll
    height: `calc(100vh - ${NAV_BAR_HEIGHT + 1}px)`,
  },
  leftSide: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
};

// TODO add this screen variant for teacher as well

export default function HallOfFame() {
  const { students, highlightedStudent, loading, error } = useHallOfFameData();
  const [showAllStudents, setShowAllStudents] = useState(true);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const displayStudents = showAllStudents
    ? students
    : students
        .filter((student) => student.groupId === MY_GROUP)
        .map((student, index) => {
          return { ...student, position: index };
        }) ?? [];

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <Podium students={displayStudents} />
        <StatisticsBox />
      </div>
      <SideBar
        students={displayStudents}
        highlightedStudent={highlightedStudent}
        onShowChange={(showAllStudents: boolean) =>
          setShowAllStudents(showAllStudents)
        }
        showAllStudents={showAllStudents}
      />
    </div>
  );
}
