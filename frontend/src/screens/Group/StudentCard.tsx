import { Styles } from "../../utils";

type StudentCardProps = {
  firstName: string;
  secondName: string;
};

const styles: Styles = {
  container: {
    border: "1px solid black",
    padding: 12,
  },
};

export const StudentCard = ({ firstName, secondName }: StudentCardProps) => {
  return (
    <div style={styles.container}>
      {firstName} {secondName}
    </div>
  );
};
