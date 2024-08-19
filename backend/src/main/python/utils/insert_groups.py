import requests

def insert_groups(hasura_url, headers, editions, random, number_of_groups_per_year_bounds):
    weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
    timespans = [("08:00:00", "09:30:00"), ("10:00:00", "11:30:00"), ("12:00:00", "13:30:00"), ("14:00:00", "15:30:00"), ("16:00:00", "17:30:00")]
    groups = []

    year_group_counts = {year: random.randint(number_of_groups_per_year_bounds[0], number_of_groups_per_year_bounds[1]) for year in editions.keys()}
    group_objects = []

    print("Preparing groups for bulk insertion...")

    for year, count in year_group_counts.items():
        print(f"Processing {count} groups for edition year: {year} (Edition ID: {editions[year]})")
        for i in range(1, count + 1):
            timespan = random.choice(timespans)
            group_name = f"gr_{i}"
            group_objects.append({
                "groupName": group_name,
                "editionId": editions[year],
                "label": "",
                "weekday": random.choice(weekdays),
                "startTime": timespan[0],
                "endTime": timespan[1]
            })

    # Perform bulk insert
    if group_objects:
        mutation = """
        mutation MyMutation($groups: [GroupsInsertInput!]!) {
            insertGroups(objects: $groups) {
                returning {
                    groupsId
                    groupName
                    editionId
                }
            }
        }
        """
        variables = {"groups": group_objects}

        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"Error during bulk insert of groups: {data['errors']}")
        else:
            returned_data = data["data"]["insertGroups"]["returning"]
            for group in returned_data:
                group_id = int(group["groupsId"])
                groups.append(group_id)
                print(f"Successfully inserted group '{group['groupName']}' with ID {group_id} for edition ID {group['editionId']}")
            for edition_id in editions.values():

                mutation_assign_photo = """
                                        mutation assignPhotosToGroups($editionId: Int!) {
                                            assignPhotosToGroups(editionId: $editionId)
                                        }
                                        """
                variables_assign_photo = {
                    "editionId": edition_id,
                }
                response_assign_photo = requests.post(
                    hasura_url,
                    json={"query": mutation_assign_photo, "variables": variables_assign_photo},
                    headers=headers
                )

                if "errors" in response_assign_photo.json():
                    print(
                        f"Error assigning photos to groups in edition ID {edition_id}: {response_assign_photo.json()['errors']}")
                else:
                    print(f"Successfully assigned photos to groups in edition ID {edition_id}.")

    print("All groups have been processed.")
    return year_group_counts, groups
