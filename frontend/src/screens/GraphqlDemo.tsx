import { useCreateBonusMyCustomMutation } from "../graphql/createBonusExample.graphql.types";
import { useUsersInGroupQuery } from "../graphql/usersInGroup.graphql.types";

export const GroupAndBonusComponent = () => {
  // Use the useUsersInGroupQuery hook to fetch users in a group
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useUsersInGroupQuery({
    variables: { groupId: "1" }, // Adjust the groupId as needed
  });

  // Use the useCreateBonusMyCustomMutation hook to create a bonus
  const [
    createBonusMyCustomMutation,
    { data: bonusData, loading: bonusLoading, error: bonusError },
  ] = useCreateBonusMyCustomMutation();

  // Function to handle the mutation execution
  const handleCreateBonus = async () => {
    try {
      const response = await createBonusMyCustomMutation({
        variables: {
          studentId: 1,
          teacherId: 2,
          howMany: 100,
          subcategoryId: 1,
          awardId: 1,
        },
      });
      console.log("Mutation response:", response);
    } catch (err) {
      console.error("Error executing mutation:", err);
    }
  };

  return (
    <div>
      <h1>Group and Bonus Information</h1>

      <div>
        <h2>Users in Group</h2>
        {usersLoading && <p>Loading users...</p>}
        {usersError && <p>Error: {usersError.message}</p>}
        {usersData && (
          <ul>
            {usersData.users.map((user) => (
              <li key={user.user_id}>
                {user.nick} - {user.role}
                <ul>
                  {user.user_groups.map((group) => (
                    <li key={group.group.groups_id}>
                      {group.group.group_name} ({group.group.group_year})
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>Create Bonus</h2>
        <button onClick={handleCreateBonus} disabled={bonusLoading}>
          {bonusLoading ? "Creating Bonus..." : "Create Bonus"}
        </button>
        {bonusError && <p>Error: {bonusError.message}</p>}
        {bonusData && (
          <div>
            <h3>Bonus Created Successfully!</h3>
            <p>Bonus ID: {bonusData?.createBonus?.bonusId}</p>
            <div>
              <h4>Points</h4>
              <p>Points ID: {bonusData?.createBonus?.points?.pointsId}</p>
              <p>How Many: {bonusData?.createBonus?.points?.howMany}</p>
              <p>User ID: {bonusData?.createBonus?.points?.userId?.userId}</p>
              <p>User Nick: {bonusData?.createBonus?.points?.userId?.nick}</p>
              <p>
                From Who ID: {bonusData?.createBonus?.points?.fromWho?.userId}
              </p>
              <p>
                From Who Nick: {bonusData?.createBonus?.points?.fromWho?.nick}
              </p>
              <p>
                Subcategory ID:{" "}
                {bonusData?.createBonus?.points?.subcategory?.subcategoryId}
              </p>
              <p>
                Subcategory Name:{" "}
                {bonusData?.createBonus?.points?.subcategory?.subcategoryName}
              </p>
            </div>
            <div>
              <h4>Award</h4>
              <p>Award ID: {bonusData?.createBonus?.award?.awardId}</p>
              <p>Award Name: {bonusData?.createBonus?.award?.name}</p>
              <p>Award Bonus: {bonusData?.createBonus?.award?.bonus}</p>
            </div>
            <div>
              <h4>Subcategory</h4>
              <p>
                Subcategory ID:{" "}
                {bonusData?.createBonus?.subcategory?.subcategoryId}
              </p>
              <p>
                Subcategory Name:{" "}
                {bonusData?.createBonus?.subcategory?.subcategoryName}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupAndBonusComponent;
