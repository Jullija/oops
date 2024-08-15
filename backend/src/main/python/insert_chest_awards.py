import requests


def insert_chest_awards(hasura_url, headers, chest_ids):
    chest_awards = []

    for chest_id in chest_ids:
        print(f"Processing chest ID: {chest_id}")

        # Fetch the edition_id associated with the chest
        query_edition = """
        query MyQuery($chestId: bigint!) {
            chests(where: {chestId: {_eq: $chestId}}) {
                editionId
            }
        }
        """
        response_edition = requests.post(
            hasura_url,
            json={"query": query_edition, "variables": {"chestId": chest_id}},
            headers=headers
        )
        chest_data = response_edition.json()
        if "errors" in chest_data:
            print(f"Error fetching edition for chest ID {chest_id}: {chest_data['errors']}")
            continue

        chest_edition_id = chest_data["data"]["chests"][0]["editionId"]
        print(f"  Edition ID for chest {chest_id}: {chest_edition_id}")

        # Fetch valid awards associated with the edition
        query_awards = """
        query MyQuery($editionId: bigint!) {
            awardEdition(where: {editionId: {_eq: $editionId}}) {
                awardId
            }
        }
        """
        response_awards = requests.post(
            hasura_url,
            json={"query": query_awards, "variables": {"editionId": chest_edition_id}},
            headers=headers
        )
        awards_data = response_awards.json()
        if "errors" in awards_data:
            print(f"Error fetching awards for edition ID {chest_edition_id}: {awards_data['errors']}")
            continue

        valid_awards = awards_data["data"]["awardEdition"]
        print(f"  Valid awards for edition {chest_edition_id}: {[award['awardId'] for award in valid_awards]}")

        # Insert chest_award entries for each valid award
        for award in valid_awards:
            award_id = award["awardId"]
            print(f"    Inserting chest award for chest {chest_id} and award {award_id}")
            mutation = """
            mutation MyMutation($chestId: bigint!, $awardId: bigint!) {
                insertChestAward(objects: {chestId: $chestId, awardId: $awardId, label: ""}) {
                    returning {
                        awardId
                    }
                }
            }
            """
            variables = {
                "chestId": chest_id,
                "awardId": award_id
            }

            response = requests.post(
                hasura_url,
                json={"query": mutation, "variables": variables},
                headers=headers
            )

            data = response.json()
            if "errors" in data:
                print(f"    Error inserting chest_award for chest {chest_id} and award {award_id}: {data['errors']}")
            else:
                print(f"    Successfully inserted chest_award for chest {chest_id} and award {award_id}")
                chest_awards.append(award_id)

    print("All chest awards have been processed.")
    return chest_awards
