import requests

def insert_categories(hasura_url, headers, category_data):
    categories = {}
    category_editions_type_map = {}

    for category_name, _, _, _, can_add_points, lightColor, darkColor, editions_type in category_data:
        mutation = """
        mutation addCategory($categoryName: String!, $canAddPoints: Boolean!, $lightColor: String = "#FFFFFF", $darkColor: String = "#000000", $label: String = "") {
            addCategory(
                categoryName: $categoryName,
                canAddPoints: $canAddPoints,
                lightColor: $lightColor,
                darkColor: $darkColor,
                label: $label
            ) {
                categoryId
                categoryName
                label
            }
        }
        """
        variables = {"categoryName": category_name, "canAddPoints": can_add_points, "lightColor": lightColor, "darkColor": darkColor}

        print(f"Attempting to insert category: {category_name}")
        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"Error inserting category '{category_name}': {data['errors']}")
        else:
            returned_data = data["data"]["addCategory"]
            categories[returned_data["categoryName"]] = returned_data["categoryId"]
            category_editions_type_map[returned_data["categoryId"]] = [editions_type, returned_data["categoryName"]]
            print(f"Successfully inserted category '{category_name}' with ID {returned_data['categoryId']}")

    print("Final categories inserted with their IDs:", categories)
    return categories, category_editions_type_map
