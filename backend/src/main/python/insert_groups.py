import requests

def insert_groups(hasura_url, headers, editions, random):
    weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
    groups = []
    year_group_counts = {year: random.randint(12, 15) for year in range(2020, 2026)}

    for year, count in year_group_counts.items():
        print(f"Processing {count} groups for edition year: {year} (Edition ID: {editions[year]})")
        for i in range(1, count + 1):
            group_name = f"gr_{i}"
            print(f"  Attempting to insert group: {group_name}")
            mutation = """
            mutation MyMutation($groupName: String!, $editionId: bigint!, $weekday: String!, $startTime: time!, $endTime: time!) {
                insertGroups(objects: {
                    groupName: $groupName,
                    editionId: $editionId,
                    label: "",
                    weekday: $weekday,
                    startTime: $startTime,
                    endTime: $endTime
                }) {
                    returning {
                        groupsId
                    }
                }
            }
            """
            variables = {
                "groupName": group_name,
                "editionId": editions[year],
                "weekday": random.choice(weekdays),
                "startTime": "16:00:00",
                "endTime": "17:30:00"
            }

            response = requests.post(
                hasura_url,
                json={"query": mutation, "variables": variables},
                headers=headers
            )

            data = response.json()
            if "errors" in data:
                print(f"    Error inserting group '{group_name}' for year {year}: {data['errors']}")
            else:
                returned_data = data["data"]["insertGroups"]["returning"][0]
                group_id = int(returned_data["groupsId"])
                groups.append(group_id)
                print(f"    Successfully inserted group '{group_name}' with ID {group_id} for year {year}")

    print("All groups have been processed.")
    return year_group_counts, groups
