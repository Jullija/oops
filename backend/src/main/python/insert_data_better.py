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

hasura_url = "http://localhost:9191/v1/graphql"
headers = {
    "Content-Type": "application/json",
    "x-hasura-role": "admin",
    "x-hasura-admin-secret": "admin_secret",
}
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
        "award", "edition", "award_edition", "files", "user_level",
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

    number_of_editions = 6
    number_of_groups_per_year_bounds = [12, 14]
    students_per_group_bounds = [15, 20]
    number_of_points_per_teacher = 250

    insert_files(cursor)
    conn.commit()
    categories = insert_categories(hasura_url, headers)
    editions = insert_editions(hasura_url, headers, number_of_editions)
    chest_ids = insert_chests(hasura_url, headers, editions)
    award_ids, award_name_map = insert_awards(hasura_url, headers)
    insert_award_editions(hasura_url, headers, award_ids, editions, award_name_map)
    year_group_counts, groups = insert_groups(hasura_url, headers, editions, random, number_of_groups_per_year_bounds)
    users, roles, students_in_group_count = insert_users(hasura_url, headers, year_group_counts, fake, random, students_per_group_bounds)
    coordinator_id, teacher_ids = insert_user_groups(hasura_url, headers, users, roles, groups, students_in_group_count, random)
    insert_levels(hasura_url, headers, editions, random)
    subcategories, subcategory_to_category = insert_subcategories(hasura_url, headers, editions, categories)
    insert_chest_awards(hasura_url, headers, chest_ids)
    insert_points(hasura_url, headers, cursor, coordinator_id, teacher_ids, subcategories, subcategory_to_category, award_name_map, random, number_of_points_per_teacher)

    conn.commit()
    cursor.close()
    conn.close()


if __name__ == '__main__':
    truncate_and_restart_sequences()
    insert_data()
    print("Data inserted successfully.")
