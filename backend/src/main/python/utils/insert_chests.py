import requests

def insert_chests(hasura_url, headers, editions, chests_data):
    chest_ids = []
    chest_objects = []

    print("Preparing chests for bulk insertion...")

    # Prepare bulk insertion data for all chests
    for year, edition_id in editions.items():
        print(f"Processing chests for edition year: {year} (Edition ID: {edition_id})")
        for name, _ in chests_data:
            chest_objects.append({
                "type": name,
                "label": "",
                "editionId": edition_id
            })

    # Perform bulk insert
    mutation = """
    mutation MyMutation($chests: [ChestsInsertInput!]!) {
        insertChests(objects: $chests) {
            returning {
                chestId
                type
                editionId
            }
        }
    }
    """
    variables = {"chests": chest_objects}

    response = requests.post(
        hasura_url,
        json={"query": mutation, "variables": variables},
        headers=headers
    )

    data = response.json()
    if "errors" in data:
        print(f"Error during bulk insert of chests: {data['errors']}")
    else:
        returned_data = data["data"]["insertChests"]["returning"]
        for chest in returned_data:
            chest_ids.append(chest["chestId"])
            print(f"Successfully inserted chest '{chest['type']}' with ID {chest['chestId']} for edition ID {chest['editionId']}")

    print("All chests have been processed.")
    return chest_ids
