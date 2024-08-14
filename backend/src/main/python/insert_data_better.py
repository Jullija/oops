import psycopg2
from faker import Faker
import random
from insert_files import insert_files
from insert_categories import insert_categories
from insert_editions import insert_editions
from insert_chests import insert_chests
from insert_awards import insert_awards
from insert_award_editions import insert_award_editions
from insert_groups import insert_groups
from insert_users import insert_users
from insert_user_groups import insert_user_groups
from insert_levels import insert_levels
from insert_subcategories import insert_subcategories
from insert_chest_awards import insert_chest_awards
from insert_points import insert_points


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
        "users", "subcategories", "levels", "groups", "chests", "categories",
        "award", "edition", "award_edition", "files"
    ]

    for table in tables:
        cursor.execute(f"TRUNCATE TABLE {table} RESTART IDENTITY CASCADE;")
        print(f"Truncated table {table}")

    # Enable foreign key constraints
    cursor.execute("SET session_replication_role = 'origin';")

    conn.commit()
    cursor.close()
    conn.close()


def insert_data():
    conn = create_connection()
    cursor = conn.cursor()
    fake = Faker()
    Faker.seed(1234)
    random.seed(1234)

    insert_files(cursor)
    categories = insert_categories(cursor)
    editions = insert_editions(cursor)
    chest_ids = insert_chests(cursor, editions)
    award_ids, award_name_map = insert_awards(cursor)
    insert_award_editions(cursor, award_ids, editions, award_name_map)
    year_group_counts, groups = insert_groups(cursor, editions, random)
    users, roles, students_in_group_count = insert_users(cursor, year_group_counts, fake, random)
    coordinator_id, teacher_ids = insert_user_groups(cursor, users, roles, groups, students_in_group_count, random)
    insert_levels(cursor, editions, random)
    subcategories, subcategory_to_category = insert_subcategories(cursor, editions, categories)
    insert_chest_awards(cursor, chest_ids)
    insert_points(cursor, coordinator_id, teacher_ids, subcategories, subcategory_to_category, award_name_map, random)

    conn.commit()
    cursor.close()
    conn.close()


if __name__ == '__main__':
    truncate_and_restart_sequences()
    insert_data()
    print("Data inserted successfully.")
