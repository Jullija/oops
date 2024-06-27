import { Styles } from "../../../utils";

type StudentCardProps = {
  firstName: string;
  secondName: string;
  onClick: () => void;
};

const styles: Styles = {
  container: {
    border: "1px solid black",
    padding: 12,
  },
};

export const StudentCard = ({
  firstName,
  secondName,
  onClick,
}: StudentCardProps) => {
  return (
    <div style={styles.container} onClick={onClick}>
      {secondName} {firstName}
    </div>
  );
};
