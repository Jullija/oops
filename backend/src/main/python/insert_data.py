import psycopg2
from faker import Faker
import random


def create_connection():
    return psycopg2.connect(
        dbname="mydatabase",
        user="postgres",
        password="password",
        host="localhost",
        port="6543"
    )


def truncate_and_restart_sequences():
    conn = create_connection()
    cursor = conn.cursor()

    # Disable foreign key constraints
    cursor.execute("SET session_replication_role = 'replica';")

    # Truncate tables
    tables = [
        "bonuses", "chest_history", "chest_award", "user_groups", "points",
        "users", "subcategories", "levels", "groups", "chests", "categories", "award"
    ]

    for table in tables:
        cursor.execute(f"TRUNCATE TABLE {table} RESTART IDENTITY CASCADE;")
        print(f"Truncated table {table}")

    # Enable foreign key constraints
    cursor.execute("SET session_replication_role = 'origin';")

    conn.commit()
    cursor.close()
    conn.close()


def insert_data(data_count_multiplier=1):
    conn = create_connection()
    cursor = conn.cursor()
    fake = Faker()
    Faker.seed(1234)
    random.seed(1234)

    category_names = ["LABORATORY", "TEST", "PROJECT", "EVENT"]

    # Insert data into categories
    categories = {}
    for category_name in category_names:
        cursor.execute("INSERT INTO categories (category_name, label) VALUES (%s, %s) RETURNING category_id",
                       (category_name, ""))
        categories[category_name] = cursor.fetchone()[0]

    # Insert data into chests
    chests = [
        ("Gold Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_gold.png"),
        ("Silver Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_silver.png"),
        ("Bronze Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_bronze.png")
    ]
    chest_ids = []
    for name, image_url in chests:
        cursor.execute("INSERT INTO chests (type, label) VALUES (%s, %s) RETURNING chest_id",
                       (name, ""))
        chest_ids.append(cursor.fetchone()[0])

    # Insert data into awards
    awards = [
        ("Lekarstwo", "Restore", ""),
        ("Weterynarz", "Restore", ""),
        ("Marchewka laboratoryjna", "Multiplier", ""),
        ("Marchewka projektowa", "Multiplier", ""),
        ("Rabat na sianko", "Discount", "")
    ]
    award_ids = []
    award_name_map = {}
    for name, award_type, label in awards:
        cursor.execute("INSERT INTO award (award_name, award_type, label) VALUES (%s, %s, %s) RETURNING award_id",
                       (name, award_type, ""))
        award_id = cursor.fetchone()[0]
        award_ids.append(award_id)
        award_name_map[award_id] = name

    # Insert data into groups
    groups = []
    year_group_counts = {year: random.randint(12, 15) for year in range(2020, 2026)}
    for year, count in year_group_counts.items():
        for i in range(1, count + 1):
            group_name = f"gr_{i}"
            group_year = year
            cursor.execute("INSERT INTO groups (group_name, group_year) VALUES (%s, %s) RETURNING groups_id",
                           (group_name, group_year))
            groups.append(cursor.fetchone()[0])

    total_groups = sum(year_group_counts.values())
    min_students_per_group = 14
    max_students_per_group = 23
    students_in_group_count = [random.randint(min_students_per_group, max_students_per_group) for _ in
                               range(total_groups)]
    total_students = sum(students_in_group_count)

    # Insert data into users
    users = []
    roles = ['STUDENT'] * total_students + ['TEACHER'] * 7 + ['COORDINATOR']
    random.shuffle(roles)
    for role in roles:
        nick = fake.user_name()
        first_name = fake.first_name()
        second_name = fake.last_name()
        index_number = fake.random_int(min=1000, max=9999)
        cursor.execute(
            "INSERT INTO users (nick, role, index_number, first_name, second_name, label) VALUES (%s, %s, %s, %s, %s, %s) RETURNING user_id",
            (nick, role, index_number, first_name, second_name, ""))
        users.append(cursor.fetchone()[0])

    # Assign students to groups
    student_ids = [user_id for user_id, role in zip(users, roles) if role == 'STUDENT']
    random.shuffle(student_ids)

    student_index = 0
    for group_id, student_count in zip(groups, students_in_group_count):
        for _ in range(student_count):
            if student_index < len(student_ids):
                student_id = student_ids[student_index]
                cursor.execute("INSERT INTO user_groups (user_id, group_id) VALUES (%s, %s)", (student_id, group_id))
                student_index += 1

    # Assign teachers and coordinators to groups randomly
    teacher_ids = [user_id for user_id, role in zip(users, roles) if role == 'TEACHER']
    coordinator_id = [user_id for user_id, role in zip(users, roles) if role == 'COORDINATOR'][0]

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

    # Insert data into levels
    levels_data = [
        ("Jajo", 0, 25, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear1.png", 2.0, ""),
        ("Pisklak", 25, 50, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear2.png", 2.0, ""),
        ("Podlot", 50, 60, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear3.png", 3.0, ""),
        ("Żółtodziób", 60, 70, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear4.png", 3.5, ""),
        ("Nieopierzony odkrywca", 70, 80, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear5.png", 4.0, ""),
        ("Samodzielny Zwierzak", 80, 90, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear6.png", 4.5, ""),
        ("Majestatyczna Bestia", 90, 100, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear7.png", 5.0, "")
    ]

    for name, min_points, max_points, avatar, grade, label in levels_data:
        cursor.execute(
            "INSERT INTO levels (name, minimum_points, maximum_points, avatar, grade, label) VALUES (%s, %s, %s, %s, %s, %s) RETURNING level_id",
            (name, min_points, max_points, avatar, grade, ""))

    # Insert data into subcategories
    subcategories_data = {
        "LABORATORY": [f"lab_{i}" for i in range(1, 15)],
        "TEST": [f"kart_{i}" for i in range(1, 15)],
        "PROJECT": [f"proj_{i}" for i in range(1, 4)],
        "EVENT": ["Gitowe Dziady", "Spooky Spring", "Constructor Christmas"]
    }

    subcategories = []
    subcategory_to_category = {}
    for category_name, subcategory_names in subcategories_data.items():
        for subcategory_name in subcategory_names:
            cursor.execute(
                "INSERT INTO subcategories (subcategory_name, category_id, label) VALUES (%s, %s, %s) RETURNING subcategory_id",
                (subcategory_name, categories[category_name], ""))
            subcategory_id = cursor.fetchone()[0]
            subcategories.append(subcategory_id)
            subcategory_to_category[subcategory_id] = category_name

    # Insert data into chest_award
    chest_awards_content = [
        (chest_ids[0], 1),
        (chest_ids[1], 1),
        (chest_ids[2], 1),
        (chest_ids[0], 2),
        (chest_ids[1], 2),
        (chest_ids[2], 2),
        (chest_ids[1], 3),
        (chest_ids[0], 4),
        (chest_ids[0], 5)
    ]

    chest_awards = []
    for chest_id, award_id in chest_awards_content:
        cursor.execute(
            "INSERT INTO chest_award (chest_id, award_id, label) VALUES (%s, %s, %s) RETURNING award_id",
            (chest_id, award_id, ""))
        chest_awards.append(cursor.fetchone()[0])

    # Function to model giving a chest to a student, choosing an award, and applying the bonus
    def give_chest_and_apply_award(teacher_id):
        # Choose a random student from the teacher's group
        cursor.execute("""
            SELECT u.user_id
            FROM users u
            JOIN user_groups ug ON u.user_id = ug.user_id
            WHERE ug.group_id IN (
                SELECT group_id
                FROM user_groups
                WHERE user_id = %s
            ) AND u.role = 'STUDENT'
            ORDER BY RANDOM()
            LIMIT 1
        """, (teacher_id,))
        student_id = cursor.fetchone()[0]

        # 1. Insert a record in the chest_history table to represent the student receiving a chest from the teacher.
        chest_id = random.choice(chest_ids)
        subcategory_id = random.choice([s for s in subcategories if subcategory_to_category[s] in ["EVENT", "PROJECT"]])
        cursor.execute(
            "INSERT INTO chest_history (user_id, chest_id, subcategory_id, label, created_at, updated_at) VALUES (%s, %s, %s, %s, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING chest_history_id",
            (student_id, chest_id, subcategory_id, "")
        )
        chest_history_id = cursor.fetchone()[0]

        # 2. The student chooses an award from the chest.
        cursor.execute("SELECT award_id FROM chest_award WHERE chest_id = %s", (chest_id,))
        available_awards = cursor.fetchall()
        chosen_award_id = random.choice(available_awards)[0]

        # 3. Create an initial point record in the points table for the student by the teacher.
        initial_points = random.randint(10, 50)
        cursor.execute(
            "INSERT INTO points (student_id, teacher_id, value, subcategory_id, label, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING points_id",
            (student_id, teacher_id, initial_points, subcategory_id, "")
        )
        points_id = cursor.fetchone()[0]

        # 4. Insert a record in the bonuses table for the chosen award.
        cursor.execute(
            "INSERT INTO bonuses (points_id, award_id, subcategory_id, created_at, updated_at, label, chest_history_id) VALUES (%s, %s, %s, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, %s, %s) RETURNING bonus_id",
            (points_id, chosen_award_id, subcategory_id, "", chest_history_id)
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

        print(f"Teacher {teacher_id} ({teacher_role}) gave a chest to student {student_id} ({student_role}). Student chose award {chosen_award_id} ({award_name_map[chosen_award_id]}) and received {bonus_points} bonus points.")

    # New function for adding points for laboratory or test
    def add_points_for_laboratory_or_test(teacher_id):
        # Choose a random student from the teacher's group
        cursor.execute("""
            SELECT u.user_id
            FROM users u
            JOIN user_groups ug ON u.user_id = ug.user_id
            WHERE ug.group_id IN (
                SELECT group_id
                FROM user_groups
                WHERE user_id = %s
            ) AND u.role = 'STUDENT'
            ORDER BY RANDOM()
            LIMIT 1
        """, (teacher_id,))
        student_id = cursor.fetchone()[0]

        # Choose a subcategory from LABORATORY or TEST
        subcategory_id = random.choice([s for s in subcategories if subcategory_to_category[s] in ["LABORATORY", "TEST"]])

        # Add points to the student for the chosen subcategory
        points = random.randint(5, 20)
        cursor.execute(
            "INSERT INTO points (student_id, teacher_id, value, subcategory_id, label, created_at, updated_at) VALUES (%s, %s, %s, %s, %s, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",
            (student_id, teacher_id, points, subcategory_id, "")
        )

        print(f"Teacher {teacher_id} added {points} points to student {student_id} for {subcategory_to_category[subcategory_id]}.")

    # Example of modeling the chest-giving process
    for teacher_id in teacher_ids:
        for _ in range(5):  # Adjust the number of times you want to model this process per teacher
            give_chest_and_apply_award(teacher_id)
            add_points_for_laboratory_or_test(teacher_id)

    # coordinator gives chests to random students
    for _ in range(5):  # Adjust the number of times you want to model this process for the coordinator
        student_id = random.choice(student_ids)
        give_chest_and_apply_award(coordinator_id)

    conn.commit()
    cursor.close()
    conn.close()


if __name__ == '__main__':
    truncate_and_restart_sequences()
    insert_data()
    print("Data inserted successfully.")
