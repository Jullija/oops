import requests


def insert_editions(hasura_url, headers, number_of_editions=6):
    editions = {}

    for year in range(2020, 2020 + number_of_editions):
        name = f"Edition {year}"
        print(f"Attempting to insert edition: {name}")

        mutation = """
        mutation MyMutation($name: String!, $year: Int!) {
            insertEdition(objects: {name: $name, editionYear: $year, label: ""}) {
                returning {
                    editionId
                    name
                    editionYear
                }
            }
        }
        """
        variables = {"name": name, "year": year}

        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"Error inserting edition '{name}': {data['errors']}")
        else:
            returned_data = data["data"]["insertEdition"]["returning"][0]
            editions[returned_data["editionYear"]] = returned_data["editionId"]
            print(f"Successfully inserted edition '{name}' with ID {returned_data['editionId']} for year {year}")

    print("All editions have been processed.")
    return editions
