import requests


def insert_users(hasura_url, headers, year_group_counts, fake, random, students_per_group_bounds, number_of_teachers):
    total_groups = sum(year_group_counts.values())
    students_in_group_count = [random.randint(students_per_group_bounds[0], students_per_group_bounds[1]) for _ in
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
    roles = ['student'] * total_students
    random.shuffle(roles)
    roles = ['coordinator'] + ['teacher'] * number_of_teachers + roles

    print("Preparing users for bulk insertion...")

    user_objects = []
    for role in roles:
        nick = fake.user_name()
        first_name = fake.first_name()
        second_name = fake.last_name()
        index_number = generate_unique_index_number(existing_index_numbers)
        existing_index_numbers.add(index_number)

        user_objects.append({
            "nick": nick,
            "role": role,
            "indexNumber": index_number,
            "firstName": first_name,
            "secondName": second_name,
            "label": ""
        })

    print(f"Inserting {len(user_objects)} users in bulk...")

    mutation = """
    mutation MyMutation($users: [UsersInsertInput!]!) {
        insertUsers(objects: $users) {
            returning {
                userId
            }
        }
    }
    """
    variables = {
        "users": user_objects
    }

    response = requests.post(
        hasura_url,
        json={"query": mutation, "variables": variables},
        headers=headers
    )

    data = response.json()
    if "errors" in data:
        print(f"Error during bulk insert: {data['errors']}")
    else:
        returned_data = data["data"]["insertUsers"]["returning"]
        user_ids = [int(user["userId"]) for user in returned_data]
        users.extend(user_ids)
        print(f"Successfully inserted {len(user_ids)} users.")

    print("All users have been inserted.")
    return users, roles, students_in_group_count
