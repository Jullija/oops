import psycopg2
from faker import Faker
import random
from itertools import cycle

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
        "users", "subcategories", "levels", "groups", "chests", "categories"
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

    category_names = ["LABORATORIA", "KARTKÓWKI", "PROJEKT", "EVENT"]
    chest_count = 3
    point_count = 200
    bonus_count = 5
    chest_history_count = 5

    # Insert data into categories
    categories = {}
    for category_name in category_names:
        cursor.execute("INSERT INTO categories (category_name) VALUES (%s) RETURNING category_id", (category_name,))
        categories[category_name] = cursor.fetchone()[0]

    # Insert data into chests
    chests = [
        ("Gold Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_gold.png"),
        ("Silver Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_silver.png"),
        ("Bronze Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_bronze.png")
    ]
    chest_ids = []
    for name, image_url in chests:
        cursor.execute("INSERT INTO chests (type) VALUES (%s) RETURNING chest_id", (name,))
        chest_ids.append(cursor.fetchone()[0])

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
    roles = ['student'] * total_students + ['teacher'] * 7 + ['COORDINATOR']
    random.shuffle(roles)
    for role in roles:
        nick = fake.user_name()
        cursor.execute("INSERT INTO users (nick, role) VALUES (%s, %s) RETURNING user_id", (nick, role))
        users.append(cursor.fetchone()[0])

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
    coordinator_id = [user_id for user_id, role in zip(users, roles) if role == 'COORDINATOR'][0]

    # Create a list of all teachers and the coordinator
    teachers_and_coordinator = teacher_ids + [coordinator_id]
    random.shuffle(teachers_and_coordinator)

    # Distribute teachers and coordinator among groups
    for group_id in groups:
        assigned_teacher = teachers_and_coordinator.pop()
        cursor.execute("INSERT INTO user_groups (user_id, group_id) VALUES (%s, %s)", (assigned_teacher, group_id))
        teachers_and_coordinator.insert(0, assigned_teacher)  # Rotate list to ensure even distribution

    # Insert data into levels
    levels = [
        ("Jajo", 0, 25, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear1.png"),
        ("Pisklak", 25, 50, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear2.png"),
        ("Podlot", 50, 60, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear3.png"),
        ("Żółtodziób", 60, 70, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear4.png"),
        ("Nieopierzony odkrywca", 70, 80,
         "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear5.png"),
        ("Samodzielny Zwierzak", 80, 90,
         "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear6.png"),
        ("Majestatyczna Bestia", 90, 100,
         "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/owlbear7.png")
    ]

    for name, min_points, max_points, avatar in levels:
        cursor.execute(
            "INSERT INTO levels (name, minimum_points, maximum_points, avatar) VALUES (%s, %s, %s, %s) RETURNING level_id",
            (name, min_points, max_points, avatar)
        )

    # Insert data into subcategories
    subcategories_data = {
        "LABORATORIA": [f"lab_{i}" for i in range(1, 15)],
        "KARTKÓWKI": [f"kart_{i}" for i in range(1, 15)],
        "PROJEKT": [f"proj_{i}" for i in range(1, 4)],
        "EVENT": ["Gitowe Dziady", "Spooky Spring", "Constructor Christmas"]
    }

    subcategories = []
    for category_name, subcategory_names in subcategories_data.items():
        for subcategory_name in subcategory_names:
            cursor.execute(
                "INSERT INTO subcategories (subcategory_name, category_id) VALUES (%s, %s) RETURNING subcategory_id",
                (subcategory_name, categories[category_name])
            )
            subcategories.append(cursor.fetchone()[0])

    # Insert data into chest_award
    chest_awards_content = [
        (chest_ids[0], "Lekarstwo", 1, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_restore_lab.png"),
        (chest_ids[1], "Lekarstwo", 2, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_restore_lab.png"),
        (chest_ids[2], "Lekarstwo", 3, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_restore_lab.png"),
        (chest_ids[0], "Weterynarz", 4, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_restore_test.png"),
        (chest_ids[1], "Weterynarz", 5, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_restore_test.png"),
        (chest_ids[2], "Weterynarz", 6, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_restore_test.png"),
        (chest_ids[1], "Marchewka laboratoryjna", 7, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_multiplier_lab.png"),
        (chest_ids[0], "Marchewka projektowa", 8, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_multiplier_proj.png"),
        (chest_ids[0], "Rabat na sianko", 9, "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/bonus_test.png")
    ]

    chest_awards = []
    for chest_id, name, bonus, img_url in chest_awards_content:
        cursor.execute("INSERT INTO chest_award (chest_id, name, bonus) VALUES (%s, %s, %s) RETURNING award_id",
                       (chest_id, name, bonus))
        chest_awards.append(cursor.fetchone()[0])

    # Insert data into points
    points = []
    for _ in range(point_count * data_count_multiplier):
        student_id = random.choice([u for u in users if roles[users.index(u)] == 'student'])
        teacher_id = random.choice([u for u in users if roles[users.index(u)] in ['teacher', 'COORDINATOR']])
        how_many = random.randint(1, 100)
        subcategory_id = random.choice(subcategories)
        cursor.execute(
            "INSERT INTO points (student_id, teacher_id, how_many, subcategory_id) VALUES (%s, %s, %s, %s) RETURNING points_id",
            (student_id, teacher_id, how_many, subcategory_id))
        points.append(cursor.fetchone()[0])

    # Insert data into bonuses
    for _ in range(bonus_count * data_count_multiplier):
        points_id = random.choice(points)
        award_id = random.choice(chest_awards)
        subcategory_id = random.choice(subcategories)
        cursor.execute("INSERT INTO bonuses (points_id, award_id, subcategory_id) VALUES (%s, %s, %s)",
                       (points_id, award_id, subcategory_id))

    # Insert data into chest_history
    for _ in range(chest_history_count * data_count_multiplier):
        user_id = random.choice(users)
        chest_id = random.choice(chest_ids)
        subcategory_id = random.choice(subcategories)
        cursor.execute("INSERT INTO chest_history (user_id, chest_id, subcategory_id) VALUES (%s, %s, %s)",
                       (user_id, chest_id, subcategory_id))

    conn.commit()
    cursor.close()
    conn.close()


if __name__ == '__main__':
    truncate_and_restart_sequences()
    insert_data()
