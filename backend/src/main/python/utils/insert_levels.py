import requests

def insert_levels(hasura_url, headers, editions, random, max_points_in_level, levels_data):
    def generate_levels():
        level_steps = [0]
        for i in range(1, 8):
            if i < 3:
                level_steps.append(level_steps[-1] + random.randint(40, 60))
            else:
                level_steps.append(level_steps[-1] + random.randint(10, 20))
        for i in range(0, 8):
            level_steps[i] = int(level_steps[i] / level_steps[-1] * max_points_in_level)
        return level_steps

    random_levels = [[i*max_points_in_level/100 for i in [0, 25, 50, 60, 70, 80, 90, 100]]] + [generate_levels() for _ in range(len(editions.values()) - 1)]

    # Insert data into levels using the addLevel mutation
    for i, edition_id in enumerate(editions.values()):
        print(f"Processing levels for edition ID: {edition_id}")
        levels_values = random_levels[i]
        levels = [
            (levels_data[j][0], levels_data[j][1], levels_values[j+1], levels_data[j][2]) for j in range(len(levels_data))
        ]

        for name, filename, max_points, grade in levels:
            print(f"  Attempting to insert level: {name} (Edition ID: {edition_id})")
            mutation = """
            mutation AddLevel($editionId: Int!, $name: String!, $maximumPoints: Float!, $grade: Float!) {
                addLevel(editionId: $editionId, name: $name, maximumPoints: $maximumPoints, grade: $grade) {
                    levelId
                    levelName
                }
            }
            """
            variables = {
                "editionId": edition_id,
                "name": name,
                "maximumPoints": float(max_points),
                "grade": float(grade),
            }

            response = requests.post(
                hasura_url,
                json={"query": mutation, "variables": variables},
                headers=headers
            )

            data = response.json()
            if "errors" in data:
                print(f"    Error inserting level '{name}' for edition {edition_id}: {data['errors']}")
            else:
                print(f"    Successfully inserted level '{name}' for edition {edition_id}")
                level_id = data["data"]["addLevel"]["levelId"]
                # Fetch file ID based on the filename
                query_file_id = """
                                query MyQuery($filename: String!) {
                                    files(where: {fileName: {_eq: $filename}}) {
                                        fileId
                                    }
                                }
                                """
                response_file = requests.post(
                    hasura_url,
                    json={"query": query_file_id, "variables": {"filename": filename}},
                    headers=headers
                )

                file_data = response_file.json()
                if "errors" in file_data or not file_data["data"]["files"]:
                    print(f"Error fetching file ID for '{filename}': {file_data.get('errors', 'File not found')}")
                    continue

                file_id = file_data["data"]["files"][0]["fileId"]

                # Assign the photo to the award
                mutation_assign_photo = """
                                        mutation AssignPhotoToLevel($levelId: Int!, $fileId: Int) {
                                            assignPhotoToLevel(levelId: $levelId, fileId: $fileId)
                                        }
                                        """
                variables_assign_photo = {
                    "levelId": level_id,
                    "fileId": file_id
                }

                response_assign_photo = requests.post(
                    hasura_url,
                    json={"query": mutation_assign_photo, "variables": variables_assign_photo},
                    headers=headers
                )

                if "errors" in response_assign_photo.json():
                    print(
                        f"Error assigning photo '{filename}' to level ID {level_id}: {response_assign_photo.json()['errors']}")
                else:
                    print(f"Successfully assigned photo '{filename}' to award ID {level_id}.")

    print("All levels have been processed.")
