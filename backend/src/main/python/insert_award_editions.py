import requests

def insert_award_editions(hasura_url, headers, award_ids, editions, award_name_map):
    # Map of awards to their respective editions
    award_editions = {
        "Lekarstwo": [2020, 2021],
        "Weterynarz": [2021, 2022],
        "Marchewka laboratoryjna": [2020, 2021],
        "Marchewka projektowa": [2021, 2023],
        "Rabat na sianko": [2023, 2024],
        "LekarstwoV2": [2022, 2023],
        "WeterynarzV2": [2024, 2025]
    }

    for award_id, name in zip(award_ids, award_name_map.values()):
        print(f"Processing award '{name}' with ID {award_id}")
        for year in award_editions[name]:
            if year in editions:
                print(f"  Inserting edition for year {year} (Edition ID: {editions[year]})")
                mutation = """
                mutation MyMutation($awardId: bigint!, $editionId: bigint!) {
                    insertAwardEdition(objects: {awardId: $awardId, editionId: $editionId, label: ""}) {
                        returning {
                            awardId
                            editionId
                        }
                    }
                }
                """
                variables = {
                    "awardId": award_id,
                    "editionId": editions[year]
                }

                response = requests.post(
                    hasura_url,
                    json={"query": mutation, "variables": variables},
                    headers=headers
                )

                data = response.json()
                if "errors" in data:
                    print(f"    Error inserting award_edition for award '{name}' in year {year}: {data['errors']}")
                else:
                    print(f"    Successfully inserted award_edition for award '{name}' in year {year}")

    print("All award editions processed.")
