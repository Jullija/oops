import requests

def insert_levels(hasura_url, headers, editions, random, max_points_in_level):
    def generate_levels():
        levels = [0]
        for i in range(1, 8):
            if i < 3:
                levels.append(levels[-1] + random.randint(40, 60))
            else:
                levels.append(levels[-1] + random.randint(10, 20))
        for i in range(0, 8):
            levels[i] = int(levels[i] / max(levels) * max_points_in_level)
        return levels

    random_levels = [[i*max_points_in_level/100 for i in [0, 25, 50, 60, 70, 80, 90, 100]]] + [generate_levels() for _ in range(len(editions.values()) - 1)]

    # Insert data into levels using the addLevel mutation
    for i, edition_id in enumerate(editions.values()):
        print(f"Processing levels for edition ID: {edition_id}")
        levels_values = random_levels[i]
        levels_data = [
            ("Jajo", levels_values[1], 1, 2.0),
            ("Pisklak", levels_values[2], 2, 2.0),
            ("Podlot", levels_values[3], 3, 3.0),
            ("Żółtodziób", levels_values[4], 4, 3.5),
            ("Nieopierzony odkrywca", levels_values[5], 5, 4.0),
            ("Samodzielny Zwierzak", levels_values[6], 6, 4.5),
            ("Majestatyczna Bestia", levels_values[7], 7, 5.0)
        ]

        for name, max_points, image_file_id, grade in levels_data:
            print(f"  Attempting to insert level: {name} (Edition ID: {edition_id})")
            mutation = """
            mutation AddLevel($editionId: Int!, $name: String!, $maximumPoints: Float!, $grade: Float!, $imageFileId: Int) {
                addLevel(editionId: $editionId, name: $name, maximumPoints: $maximumPoints, grade: $grade, imageFileId: $imageFileId) {
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
                "imageFileId": image_file_id  # You can pass None if you don't want to specify an image
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

    print("All levels have been processed.")
