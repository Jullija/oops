import { GroupsListItem } from "./GroupsListItem";

export const GroupsList = () => {
  const groupsIds = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        flexWrap: "wrap",
        margin: 12,
      }}
    >
      {groupsIds.map((groupId, index) => (
        <GroupsListItem groupId={groupId} key={index} />
      ))}
    </div>
  );
};
