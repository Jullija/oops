def insert_users(cursor, year_group_counts, fake, random):
    total_groups = sum(year_group_counts.values())
    min_students_per_group = 14
    max_students_per_group = 23
    students_in_group_count = [random.randint(min_students_per_group, max_students_per_group) for _ in
                               range(total_groups)]
    total_students = sum(students_in_group_count)


    def generate_unique_index_number(existing_index_numbers):
        while True:
            index_number = fake.random_int(min=502000, max=504000)
            if index_number not in existing_index_numbers:
                return index_number


    # Insert data into users
    existing_index_numbers = set()
    users = []
    roles = ['student'] * total_students + ['teacher'] * 7 + ['coordinator']
    random.shuffle(roles)
    for role in roles:
        nick = fake.user_name()
        first_name = fake.first_name()
        second_name = fake.last_name()
        index_number = generate_unique_index_number(existing_index_numbers)
        existing_index_numbers.add(index_number)
        cursor.execute(
            "INSERT INTO users (nick, role, index_number, first_name, second_name, label) VALUES (%s, %s, %s, %s, %s, %s) RETURNING user_id",
            (nick, role, index_number, first_name, second_name, ""))
        users.append(cursor.fetchone()[0])
    return users, roles, students_in_group_count
