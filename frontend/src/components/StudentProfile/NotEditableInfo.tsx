import { Styles } from "../../utils/Styles";

type NotEditableInfoProps = {
  hasEditableRights: boolean;
  isSelectedEditionActive: boolean;
};
export const NotEditableInfo = ({
  hasEditableRights,
  isSelectedEditionActive,
}: NotEditableInfoProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.title}>
        You cannot manage this student points, because:
      </div>
      <div style={styles.reasonsContainer}>
        {!hasEditableRights && <div>- you don't own this student's group</div>}
        {!isSelectedEditionActive && (
          <div>- selected edition is not active</div>
        )}
      </div>
    </div>
  );
};

const styles: Styles = {
  card: {
    border: "1px solid red",
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontWeight: "bold",
  },
  reasonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
};
