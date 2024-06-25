import { useNavigate } from "react-router-dom";
import { pathsGenerator } from "../../router";

type GroupsListItem = {
  groupId: string;
};

export const GroupsListItem = ({ groupId }: GroupsListItem) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid black",
        width: 240,
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(pathsGenerator.Group(groupId))}
    >
      group {groupId}
    </div>
  );
};
