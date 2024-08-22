import requests

def insert_user_groups(hasura_url, headers, users, roles, groups, students_in_group_count, random):
    # Assign students to groups
    student_ids = [user_id for user_id, role in zip(users, roles) if role == 'student']
    random.shuffle(student_ids)

    print("Assigning students to groups in bulk...")

    # Prepare bulk insertion data for students
    user_group_objects = []
    student_index = 0
    for group_id, student_count in zip(groups, students_in_group_count):
        for _ in range(student_count):
            if student_index < len(student_ids):
                student_id = student_ids[student_index]
                user_group_objects.append({
                    "userId": student_id,
                    "groupId": group_id
                })
                student_index += 1

    # Assign teachers and coordinators to groups randomly
    teacher_ids = [user_id for user_id, role in zip(users, roles) if role == 'teacher']
    coordinator_id = [user_id for user_id, role in zip(users, roles) if role == 'coordinator'][0]

    print("Assigning teachers and the coordinator to groups in bulk...")

    # Create a list of all teachers and the coordinator
    teachers_and_coordinator = teacher_ids + [coordinator_id]
    random.shuffle(teachers_and_coordinator)

    # Distribute teachers and coordinator among groups and prepare bulk insertion data
    teacher_to_student_map = {}
    for group_id in groups:
        assigned_teacher = teachers_and_coordinator.pop()
        user_group_objects.append({
            "userId": assigned_teacher,
            "groupId": group_id
        })

        # Rotate list to ensure even distribution
        teachers_and_coordinator.insert(0, assigned_teacher)
        if assigned_teacher not in teacher_to_student_map:
            teacher_to_student_map[assigned_teacher] = []
        teacher_to_student_map[assigned_teacher].append(group_id)

    # Perform bulk insert
    mutation = """
    mutation MyMutation($userGroups: [UserGroupsInsertInput!]!) {
        insertUserGroups(objects: $userGroups) {
            affectedRows
        }
    }
    """
    variables = {
        "userGroups": user_group_objects
    }

    response = requests.post(
        hasura_url,
        json={"query": mutation, "variables": variables},
        headers=headers
    )

    data = response.json()
    if "errors" in data:
        print(f"Error during bulk insert of user groups: {data['errors']}")
    else:
        print(f"Successfully inserted {data['data']['insertUserGroups']['affectedRows']} user groups.")

    print("User group assignments completed.")
    return coordinator_id, teacher_ids
