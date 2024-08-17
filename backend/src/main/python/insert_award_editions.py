import requests

def insert_award_editions(hasura_url, headers, award_ids, editions, award_name_map):
    # Map of awards to their respective editions
    award_editions = {
        "Lekarstwo": [year for year in editions.keys()],
        "Weterynarz": [year for year in editions.keys()],
        "Rabat na sianko": [year for year in editions.keys()],
        "Marchewka laboratoryjna": [year for year in editions.keys()],
        "Marchewka projektowa": [year for year in editions.keys()],
        "LekarstwoV2": [[year for year in editions.keys()][-1]],
        "WeterynarzV2": [[year for year in editions.keys()][0]],
    }

    # Prepare bulk insertion data
    award_edition_objects = []
    for award_id, name in zip(award_ids, award_name_map.values()):
        print(f"Processing award '{name}' with ID {award_id}")
        for year in award_editions[name]:
            if year in editions:
                edition_id = editions[year]
                print(f"  Preparing edition for year {year} (Edition ID: {edition_id})")
                award_edition_objects.append({
                    "awardId": award_id,
                    "editionId": edition_id,
                    "label": ""
                })

    if award_edition_objects:
        # Perform bulk insert
        mutation = """
        mutation MyMutation($awardEditions: [AwardEditionInsertInput!]!) {
            insertAwardEdition(objects: $awardEditions) {
                returning {
                    awardId
                    editionId
                }
            }
        }
        """
        variables = {"awardEditions": award_edition_objects}

        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"Error during bulk insert of award editions: {data['errors']}")
        else:
            inserted_award_editions = data["data"]["insertAwardEdition"]["returning"]
            for inserted in inserted_award_editions:
                print(f"Successfully inserted award_edition for award ID {inserted['awardId']} in edition ID {inserted['editionId']}")

    print("All award editions processed.")
