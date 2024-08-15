import requests

def insert_users(hasura_url, headers, year_group_counts, fake, random):
    total_groups = sum(year_group_counts.values())
    min_students_per_group = 14
    max_students_per_group = 23
    students_in_group_count = [random.randint(min_students_per_group, max_students_per_group) for _ in range(total_groups)]
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

    print("Inserting users into the system...")
    for role in roles:
        nick = fake.user_name()
        first_name = fake.first_name()
        second_name = fake.last_name()
        index_number = generate_unique_index_number(existing_index_numbers)
        existing_index_numbers.add(index_number)

        print(f"  Inserting {role}: {nick} ({first_name} {second_name}) with index number {index_number}")

        mutation = """
        mutation MyMutation($nick: String!, $role: String!, $indexNumber: Int!, $firstName: String!, $secondName: String!) {
            insertUsers(objects: {
                nick: $nick,
                role: $role,
                indexNumber: $indexNumber,
                firstName: $firstName,
                secondName: $secondName,
                label: ""
            }) {
                returning {
                    userId
                }
            }
        }
        """
        variables = {
            "nick": nick,
            "role": role,
            "indexNumber": index_number,
            "firstName": first_name,
            "secondName": second_name
        }

        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"    Error inserting user {nick}: {data['errors']}")
        else:
            returned_data = data["data"]["insertUsers"]["returning"][0]
            users.append(int(returned_data["userId"]))
            print(f"    Successfully inserted user {nick} with user ID {returned_data['userId']}")

    print("All users have been inserted.")
    return users, roles, students_in_group_count
