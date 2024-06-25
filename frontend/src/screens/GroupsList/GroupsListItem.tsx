import { useNavigate } from "react-router-dom";
import { pathsGenerator } from "../../router";
import { Styles } from "../../utils";

const styles: Styles = {
  container: {
    border: "1px solid black",
    width: 240,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
};

type GroupsListItem = {
  id: string;
  name: string;
};

export const GroupsListItem = ({ id, name }: GroupsListItem) => {
  const navigate = useNavigate();
  return (
    <div
      style={styles.container}
      onClick={() => navigate(pathsGenerator.Group(id))}
    >
      {name}
    </div>
  );
};
