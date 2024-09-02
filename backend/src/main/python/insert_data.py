import os
import shutil
import subprocess

import psycopg2
import requests
from faker import Faker
import random
import json
from utils.insert_data_old import insert_data_old
from utils.insert_files import insert_files
from utils.insert_categories import insert_categories
from utils.insert_category_editions import insert_category_editions
from utils.insert_editions import insert_editions
from utils.insert_chests import insert_chests
from utils.insert_awards import insert_awards
from utils.insert_award_editions import insert_award_editions
from utils.insert_groups import insert_groups
from utils.insert_users import insert_students, insert_teachers_and_coordinator, assign_photos_to_users
from utils.insert_user_groups import insert_user_groups
from utils.insert_levels import insert_levels
from utils.insert_subcategories import insert_subcategories
from utils.insert_chest_awards import insert_chest_awards
from utils.insert_points import insert_points

# Load configuration from config.json
with open('config.json', encoding="UTF-8") as config_file:
    config = json.load(config_file)

# Extract values from the configuration
db_config = config['database']
base_url = config['base_url']
hasura_url = config['hasura']['url']
headers = config['hasura']['headers']
data_insertion_config = config['data_insertion']
old_style = config['style']["old_style"]
backend_resources_path = data_insertion_config['backend_resources_path']


def create_connection():
    return psycopg2.connect(
        dbname=db_config['dbname'],
        user=db_config['user'],
        password=db_config['password'],
        host=db_config['host'],
        port=db_config['port']
    )

def delete_files():
    query_file_id = """
                                        query MyQuery {
                                            files {
                                                fileId
                                            }
                                        }
                                        """
    response_file = requests.post(
        hasura_url,
        json={"query": query_file_id},
        headers=headers
    )

    file_data = response_file.json()
    if "errors" in file_data or not file_data["data"]["files"]:
        print(f"Error fetching all files: {file_data.get('errors', 'Files not found')}")
        print("Deleting files manually")
        if os.path.exists(backend_resources_path):
            shutil.rmtree(backend_resources_path)
            os.makedirs(backend_resources_path)
        else:
            print(f"The path {backend_resources_path} does not exist.")

    file_ids = [file_data["data"]["files"][i]["fileId"] for i in range(len(file_data["data"]["files"]))]
    for file_id in file_ids:
        command = [
            "curl", "-X", "DELETE", base_url + f"/files/{file_id}"
        ]
        result = subprocess.run(command, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error deleting file {file_id}: {result.stderr}")

def truncate_and_restart_sequences():
    conn = create_connection()
    cursor = conn.cursor()

    # Disable foreign key constraints
    cursor.execute("SET session_replication_role = 'replica';")

    # Truncate tables
    tables = [
        "bonuses", "chest_history", "chest_award", "user_groups", "points",
        "users", "subcategories", "levels", "groups", "chests", "categories",
        "award", "edition", "award_edition", "user_level",
    ]


    for table in tables:
        cursor.execute(f"TRUNCATE TABLE {table} RESTART IDENTITY CASCADE;")
        print(f"Truncated table {table}")
    conn.commit()
    delete_files()
    table = "files"
    cursor.execute(f"TRUNCATE TABLE {table} RESTART IDENTITY CASCADE;")
    print(f"Truncated table {table}")

    # Enable foreign key constraints
    cursor.execute("SET session_replication_role = 'origin';")

    conn.commit()
    cursor.close()
    conn.close()


def insert_data():
    number_of_editions = data_insertion_config['number_of_editions']
    number_of_teachers = data_insertion_config['number_of_teachers']
    number_of_groups_per_year_bounds = data_insertion_config['number_of_groups_per_year_bounds']
    students_per_group_bounds = data_insertion_config['students_per_group_bounds']
    subcategories_percentage = data_insertion_config['subcategories_percentage']
    chest_percentage = data_insertion_config['chest_percentage']
    open_chest_percentage = data_insertion_config['open_chest_percentage']
    levels_data_struct = data_insertion_config['levels_data']
    levels_data = [
        (
            level['name'],
            level['filename'],
            level['grade']
        )
        for level in levels_data_struct
    ]
    chests_data_struct = data_insertion_config['chests_data']
    chests_data = [
        (
            chest['name'],
            chest['filename'],
            chest['content_type']
        )
        for chest in chests_data_struct
    ]
    category_data_struct = data_insertion_config['category_data']
    category_data = [
        (
            category['name'],
            category['number_of_subcategories'],
            category['subcategory_prefix'],
            category['max_points_per_subcategory'],
            category["can_add_points"],
            category["editions"]
        )
        for category in category_data_struct
    ]
    category_names_to_populate = data_insertion_config['category_names_to_populate']
    awards_data_struct = data_insertion_config['awards_data']
    awards_data = [
        (
            award['name'],
            award['filename'],
            award['award_type'],
            award['award_value'],
            award['category_id'],
            award['max_usages'],
            award['label'],
            award['editions']
        )
        for award in awards_data_struct
    ]

    max_points_in_level = data_insertion_config['max_points_in_level']

    if max_points_in_level['is_computed']:
        max_points = sum([category[1] * category[3] for category in category_data if category[3]])
    else:
        max_points = max_points_in_level['if_not_computed']

    insert_files(base_url + "/files/upload")
    editions = insert_editions(hasura_url, headers, number_of_editions)
    categories, category_editions_type_map = insert_categories(hasura_url, headers, category_data)
    insert_category_editions(hasura_url, headers, editions, category_editions_type_map, random)
    insert_levels(hasura_url, headers, editions, random, max_points, levels_data)
    chest_ids = insert_chests(hasura_url, headers, editions, chests_data)
    award_ids, award_editions_type_map = insert_awards(hasura_url, headers, awards_data)
    insert_award_editions(hasura_url, headers, editions, award_editions_type_map, random)
    teachers_ids_and_roles = insert_teachers_and_coordinator(hasura_url, headers, fake, random, number_of_teachers)
    year_group_counts, groups = insert_groups(hasura_url, headers, editions, random, number_of_groups_per_year_bounds, teachers_ids_and_roles)
    students_ids, students_in_group_count = insert_students(hasura_url, headers, year_group_counts, fake, random, students_per_group_bounds)
    all_user_ids = students_ids + [user_id for user_id, role in teachers_ids_and_roles]
    assign_photos_to_users(hasura_url, headers, all_user_ids, random)
    insert_user_groups(hasura_url, headers, students_ids, teachers_ids_and_roles, groups, students_in_group_count,
                                                     random)

    subcategories, subcategory_to_category = insert_subcategories(hasura_url, headers, editions, categories,
                                                                  category_data, random)
    #
    insert_chest_awards(hasura_url, headers, chest_ids, chests_data, awards_data)
    insert_points(hasura_url, headers, cursor, editions, [user_id for user_id, role in teachers_ids_and_roles], random,
                  category_names_to_populate,
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
