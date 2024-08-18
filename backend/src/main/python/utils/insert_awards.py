import requests


def insert_awards(hasura_url, headers, awards):
    award_ids = []
    award_editions_type_map = {}

    for name, award_type, award_value, category_id, max_usages, label, editions_type in awards:
        print(
            f"Attempting to insert award: {name} (Type: {award_type}, Value: {award_value}, Category ID: {category_id}, Max Usages: {max_usages})")

        mutation = """
        mutation MyMutation($awardName: String!, $awardType: String!, $awardValue: float8!, $categoryId: bigint!, $maxUsages: Int!) {
            insertAward(objects: {
                awardName: $awardName,
                awardType: $awardType,
                awardValue: $awardValue,
                categoryId: $categoryId,
                maxUsages: $maxUsages,
                label: ""
            }) {
                returning {
                    awardId
                }
            }
        }
        """
        variables = {
            "awardName": name,
            "awardType": award_type,
            "awardValue": award_value,
            "categoryId": category_id,
            "maxUsages": max_usages
        }

        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"Error inserting award '{name}': {data['errors']}")
        else:
            returned_data = data["data"]["insertAward"]["returning"][0]
            award_id = int(returned_data["awardId"])
            award_ids.append(award_id)
            award_editions_type_map[award_id] = [editions_type, name]
            print(f"Successfully inserted award '{name}' with ID {award_id}")

    print("All awards have been processed.")
    return award_ids, award_editions_type_map
