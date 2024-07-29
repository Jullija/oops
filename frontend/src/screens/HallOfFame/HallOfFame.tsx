import { useRef, useEffect, useCallback } from "react";
import { useUser } from "../../hooks/common/useUser";
import { useHallOfFameQuery } from "../../graphql/hallOfFame.graphql.types";
import { useEditionSelection } from "../../hooks/common/useEditionSelection";
import { Styles } from "../../utils/Styles";
import { Roles } from "../../utils/types";

const styles: Styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    margin: 12,
    minHeight: "100vh",
    alignItems: "center",
  },
  scrollButton: {
    position: "fixed",
    bottom: 12,
    right: 12,
    width: 100,
    zIndex: 10,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 60,
    width: "90vw",
    maxWidth: "90vw",
  },
};

export default function HallOfFame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { user } = useUser();
  const { selectedEdition } = useEditionSelection();

  const { loading, error, data } = useHallOfFameQuery({
    variables: { editionId: selectedEdition?.editionId },
    skip: !selectedEdition,
  });

  const scrollToStudent = useCallback(() => {
    const studentElement = document.getElementById(`student-${user?.userId}`);
    if (studentElement) {
      studentElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [user?.userId]);

  useEffect(() => {
    if (!loading && user?.userId) {
      scrollToStudent();
    }
  }, [loading, scrollToStudent, user?.userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const students = data?.hallOfFame || [];

  return (
    <div style={styles.container} ref={containerRef}>
      <div style={styles.itemsContainer}>
        <HallOfFameHeader />
        {students.map((s, index) => (
          <HallOfFameRow
            key={s.userId}
            student={s}
            index={index}
            isCurrentUser={s.userId === user?.userId}
          />
        ))}
      </div>
      {user.role === Roles.STUDENT && (
        <button
          style={styles.scrollButton}
          ref={buttonRef}
          onClick={scrollToStudent}
        >
          Moja pozycja
        </button>
      )}
    </div>
  );
}
