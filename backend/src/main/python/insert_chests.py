import requests

def insert_chests(hasura_url, headers, editions):
    chests = [
        "Gold Chest",
        "Silver Chest",
        "Bronze Chest",
    ]
    chest_ids = []

    for year, edition_id in editions.items():
        print(f"Processing chests for edition year: {year} (Edition ID: {edition_id})")
        for name in chests:
            print(f"  Attempting to insert chest: {name}")
            mutation = """
            mutation MyMutation($type: String!, $editionId: bigint!) {
                insertChests(objects: {type: $type, label: "", editionId: $editionId}) {
                    returning {
                        chestId
                    }
                }
            }
            """
            variables = {"type": name, "editionId": edition_id}

            response = requests.post(
                hasura_url,
                json={"query": mutation, "variables": variables},
                headers=headers
            )

            data = response.json()
            if "errors" in data:
                print(f"    Error inserting chest '{name}' for year {year}: {data['errors']}")
            else:
                returned_data = data["data"]["insertChests"]["returning"][0]
                chest_id = returned_data["chestId"]
                chest_ids.append(chest_id)
                print(f"    Successfully inserted chest '{name}' with ID {chest_id} for year {year}")

    print("All chests have been processed.")
    return chest_ids
