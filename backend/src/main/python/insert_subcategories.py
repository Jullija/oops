import requests

def insert_subcategories(hasura_url, headers, editions, categories):
    # Data for subcategories
    subcategories_data = {
        "LABORATORY": [(f"lab_{i}", 10) for i in range(1, 15)],
        "TEST": [(f"kart_{i}", 5) for i in range(1, 15)],
        "PROJECT": [(f"proj_{i}", 50) for i in range(1, 4)],
        "EVENT": [("Gitowe Dziady", 10), ("Spooky Spring", 20), ("Constructor Christmas", 100)]
    }

    subcategory_to_category = {}
    subcategories = []

    for edition_id in editions.values():
        print(f"Processing subcategories for edition ID: {edition_id}")
        for category_name, subcategory_names_and_max_points in subcategories_data.items():
            ordinal_number = 0
            for subcategory_name, max_points in subcategory_names_and_max_points:
                print(f"  Attempting to insert subcategory: {subcategory_name} (Category: {category_name}, Max Points: {max_points})")
                mutation = """
                mutation MyMutation($subcategoryName: String!, $categoryId: bigint!, $editionId: bigint!, $maxPoints: Int!, $ordinalNumber: Int!) {
                    insertSubcategories(objects: {
                        subcategoryName: $subcategoryName,
                        categoryId: $categoryId,
                        label: "",
                        editionId: $editionId,
                        maxPoints: $maxPoints,
                        ordinalNumber: $ordinalNumber
                    }) {
                        returning {
                            subcategoryId
                        }
                    }
                }
                """
                variables = {
                    "subcategoryName": subcategory_name,
                    "categoryId": categories[category_name],
                    "editionId": edition_id,
                    "maxPoints": max_points,
                    "ordinalNumber": ordinal_number
                }

                response = requests.post(
                    hasura_url,
                    json={"query": mutation, "variables": variables},
                    headers=headers
                )

                data = response.json()
                if "errors" in data:
                    print(f"    Error inserting subcategory '{subcategory_name}' for edition {edition_id}: {data['errors']}")
                else:
                    returned_data = data["data"]["insertSubcategories"]["returning"][0]
                    subcategory_id = int(returned_data["subcategoryId"])
                    subcategories.append(subcategory_id)
                    subcategory_to_category[subcategory_id] = category_name
                    print(f"    Successfully inserted subcategory '{subcategory_name}' with ID {subcategory_id} for edition {edition_id}")

                ordinal_number += 1

    print("All subcategories have been processed.")
    return subcategories, subcategory_to_category
