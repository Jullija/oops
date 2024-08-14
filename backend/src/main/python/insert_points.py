def insert_points(cursor, coordinator_id, teacher_ids, subcategories, subcategory_to_category, award_name_map, random):
    # Function to model giving a chest to a student, choosing an award, and applying the bonus
    def give_chest_and_apply_award(teacher_id):
        # Choose a random student from the teacher's group
        cursor.execute("""
             SELECT u.user_id, g.edition_id
             FROM users u
             JOIN user_groups ug ON u.user_id = ug.user_id
             JOIN groups g ON ug.group_id = g.groups_id
             WHERE ug.group_id IN (
                 SELECT group_id
                 FROM user_groups
                 WHERE user_id = %s
             ) AND u.role = 'student'
         """, (teacher_id,))
        student_record = cursor.fetchall()
        student_record = random.choice(student_record)
        student_id = student_record[0]
        edition_id = student_record[1]

        # Check that both the teacher and student are in the same edition
        cursor.execute("""
             SELECT 1
             FROM user_groups ug
             JOIN groups g ON ug.group_id = g.groups_id
             WHERE ug.user_id = %s AND g.edition_id = %s
         """, (teacher_id, edition_id))
        if cursor.fetchone() is None:
            print(f"Teacher {teacher_id} is not in the same edition as student {student_id}")
            return

        # 1. Insert a record in the chest_history table to represent the student receiving a chest from the teacher.
        cursor.execute("SELECT chest_id FROM chests WHERE edition_id = %s", (edition_id,))
        chest_id = cursor.fetchall()
        chest_id = random.choice(chest_id)[0]
        subcategory_id = random.choice([s for s in subcategories if
                                        subcategory_to_category[s] in ["EVENT", "PROJECT"] and not cursor.execute(
                                            "SELECT 1 FROM subcategories WHERE subcategory_id = %s AND edition_id = %s",
                                            (s, edition_id)) and cursor.fetchone() is not None])
        cursor.execute(
            "INSERT INTO chest_history (user_id, chest_id, subcategory_id, label, created_at, updated_at, teacher_id) VALUES (%s, %s, %s, %s, NOW(), NOW(), %s) RETURNING chest_history_id",
            (student_id, chest_id, subcategory_id, "", teacher_id)
        )
        chest_history_id = cursor.fetchone()[0]

        # 2. The student chooses an award from the chest.
        cursor.execute("SELECT award_id FROM chest_award WHERE chest_id = %s", (chest_id,))
        available_awards = cursor.fetchall()
        chosen_award_id = random.choice(available_awards)[0]

        # 3. Create an initial point record in the points table for the student by the teacher.
        initial_points = 0
        cursor.execute(
            "INSERT INTO points (student_id, teacher_id, value, subcategory_id, label, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, NOW(), NOW()) RETURNING points_id",
            (student_id, teacher_id, initial_points, subcategory_id, "")
        )
        points_id = cursor.fetchone()[0]

        # 4. Insert a record in the bonuses table for the chosen award.
        cursor.execute(
            "INSERT INTO bonuses (points_id, award_id, created_at, updated_at, label, chest_history_id) VALUES (%s, %s, NOW(), NOW(), %s, %s) RETURNING bonus_id",
            (points_id, chosen_award_id, "", chest_history_id)
        )
        bonus_id = cursor.fetchone()[0]

        # 5. Update the points in the points table based on the chosen award from the bonuses table.
        cursor.execute("SELECT value FROM points WHERE points_id = %s", (points_id,))
        current_points = cursor.fetchone()[0]
        bonus_points = chosen_award_id * 10  # Each award gives points based on award_id * 10
        updated_points = current_points + bonus_points
        cursor.execute("UPDATE points SET value = %s WHERE points_id = %s", (updated_points, points_id))

        # Print user roles and award names
        cursor.execute("SELECT role FROM users WHERE user_id = %s", (teacher_id,))
        teacher_role = cursor.fetchone()[0]
        cursor.execute("SELECT role FROM users WHERE user_id = %s", (student_id,))
        student_role = cursor.fetchone()[0]

        print(
            f"Teacher {teacher_id} ({teacher_role}) gave a chest to student {student_id} ({student_role}). Student chose award {chosen_award_id} ({award_name_map[chosen_award_id]}) and received {bonus_points} bonus points.")


    # New function for adding points for laboratory or test
    def add_points_for_laboratory_or_test(teacher_id):
        # Choose a random student from the teacher's group
        cursor.execute("""
             SELECT u.user_id, g.edition_id
             FROM users u
             JOIN user_groups ug ON u.user_id = ug.user_id
             JOIN groups g ON ug.group_id = g.groups_id
             WHERE ug.group_id IN (
                 SELECT group_id
                 FROM user_groups
                 WHERE user_id = %s
             ) AND u.role = 'student'
         """, (teacher_id,))
        student_record = cursor.fetchall()
        student_record = random.choice(student_record)
        student_id = student_record[0]
        edition_id = student_record[1]

        # Choose a subcategory from LABORATORY or TEST within the student's edition
        cursor.execute("""
             SELECT subcategory_id
             FROM subcategories
             WHERE category_id IN (
                 SELECT category_id
                 FROM categories
                 WHERE category_name IN ('LABORATORY', 'TEST')
             ) AND edition_id = %s
         """, (edition_id,))
        subcategory_id = cursor.fetchall()
        subcategory_id = random.choice(subcategory_id)[0]

        # Add points to the student for the chosen subcategory
        points = random.randint(5, 20)
        cursor.execute(
            "INSERT INTO points (student_id, teacher_id, value, subcategory_id, label, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, NOW(), NOW())",
            (student_id, teacher_id, points, subcategory_id, "")
        )

        print(
            f"Teacher {teacher_id} added {points} points to student {student_id} for {subcategory_to_category[subcategory_id]} in edition {edition_id}.")


    # Example of modeling the chest-giving process
    for teacher_id in teacher_ids:
        for _ in range(500):  # Adjust the number of times you want to model this process per teacher
            give_chest_and_apply_award(teacher_id)
            add_points_for_laboratory_or_test(teacher_id)

    # Coordinator gives chests to random students
    for _ in range(500):  # Adjust the number of times you want to model this process for the coordinator
        give_chest_and_apply_award(coordinator_id)
        add_points_for_laboratory_or_test(coordinator_id)
