import requests


def insert_award_editions(hasura_url, headers, award_ids, editions, award_editions_type_map, random):
    # Map of awards to their respective editions
    editions_type_id_map = {
        "all": [year for year in editions.keys()],
        "odd": [year for year in editions.keys() if year % 2 != 0],
        "even": [year for year in editions.keys() if year % 2 == 0],
        "first": [min(editions.keys())],
        "last": [max(editions.keys())],
        "random": random.sample(list(editions.keys()), len(editions.keys()))
    }

    # Prepare bulk insertion data
    award_edition_objects = []
    for award_id, editions_type_and_name in award_editions_type_map.items():
        print(f"Processing award '{editions_type_and_name[1]}' with ID {award_id}")
        print(editions_type_id_map[editions_type_and_name[0]])
        for year in editions_type_id_map[editions_type_and_name[0]]:
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
                print(
                    f"Successfully inserted award_edition for award ID {inserted['awardId']} in edition ID {inserted['editionId']}")

    print("All award editions processed.")
