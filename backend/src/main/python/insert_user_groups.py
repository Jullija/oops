def insert_user_groups(cursor, users, roles, groups, students_in_group_count, random):
    # Assign students to groups
    student_ids = [user_id for user_id, role in zip(users, roles) if role == 'student']
    random.shuffle(student_ids)

    student_index = 0
    for group_id, student_count in zip(groups, students_in_group_count):
        for _ in range(student_count):
            if student_index < len(student_ids):
                student_id = student_ids[student_index]
                cursor.execute("INSERT INTO user_groups (user_id, group_id) VALUES (%s, %s)", (student_id, group_id))
                student_index += 1

    # Assign teachers and coordinators to groups randomly
    teacher_ids = [user_id for user_id, role in zip(users, roles) if role == 'teacher']
    coordinator_id = [user_id for user_id, role in zip(users, roles) if role == 'coordinator'][0]

    # Create a list of all teachers and the coordinator
    teachers_and_coordinator = teacher_ids + [coordinator_id]
    random.shuffle(teachers_and_coordinator)

    # Distribute teachers and coordinator among groups
    teacher_to_student_map = {}
    for group_id in groups:
        assigned_teacher = teachers_and_coordinator.pop()
        cursor.execute("INSERT INTO user_groups (user_id, group_id) VALUES (%s, %s)", (assigned_teacher, group_id))
        teachers_and_coordinator.insert(0, assigned_teacher)  # Rotate list to ensure even distribution
        if assigned_teacher not in teacher_to_student_map:
            teacher_to_student_map[assigned_teacher] = []
        teacher_to_student_map[assigned_teacher].append(group_id)
    return coordinator_id, teacher_ids