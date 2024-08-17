import psycopg2
from faker import Faker
import random
import json
from insert_data_old import insert_data_old
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

# Load configuration from config.json
with open('config.json') as config_file:
    config = json.load(config_file)

# Extract values from the configuration
db_config = config['database']
hasura_url = config['hasura']['url']
headers = config['hasura']['headers']
data_insertion_config = config['data_insertion']
old_style = config['style']["old_style"]


def create_connection():
    return psycopg2.connect(
        dbname=db_config['dbname'],
        user=db_config['user'],
        password=db_config['password'],
        host=db_config['host'],
        port=db_config['port']
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
    number_of_editions = data_insertion_config['number_of_editions']
    number_of_groups_per_year_bounds = data_insertion_config['number_of_groups_per_year_bounds']
    students_per_group_bounds = data_insertion_config['students_per_group_bounds']
    subcategories_percentage = data_insertion_config['subcategories_percentage']
    chest_percentage = data_insertion_config['chest_percentage']
    open_chest_percentage = data_insertion_config['open_chest_percentage']

    insert_files(cursor)
    conn.commit()
    categories = insert_categories(hasura_url, headers)
    editions = insert_editions(hasura_url, headers, number_of_editions)
    chest_ids = insert_chests(hasura_url, headers, editions)
    award_ids, award_name_map = insert_awards(hasura_url, headers)
    insert_award_editions(hasura_url, headers, award_ids, editions, award_name_map)
    year_group_counts, groups = insert_groups(hasura_url, headers, editions, random, number_of_groups_per_year_bounds)
    users, roles, students_in_group_count = insert_users(hasura_url, headers, year_group_counts, fake, random,
                                                         students_per_group_bounds)
    coordinator_id, teacher_ids = insert_user_groups(hasura_url, headers, users, roles, groups, students_in_group_count,
                                                     random)
    insert_levels(hasura_url, headers, editions, random)
    subcategories, subcategory_to_category = insert_subcategories(hasura_url, headers, editions, categories)
    insert_chest_awards(hasura_url, headers, chest_ids)
    insert_points(hasura_url, headers, cursor, editions, teacher_ids + [coordinator_id], random,
                  subcategories_percentage,
                  chest_percentage, open_chest_percentage)

    conn.commit()
    cursor.close()
    conn.close()


if __name__ == '__main__':
    conn = create_connection()
    cursor = conn.cursor()
    fake = Faker()

    seed = data_insertion_config['seed']
    Faker.seed(seed)
    random.seed(seed)

    truncate_and_restart_sequences()
    if old_style:
        insert_data_old(conn, cursor, fake, random)
    else:
        insert_data()
    print("Data inserted successfully.")
