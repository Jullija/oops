import requests

def insert_categories(hasura_url, headers, category_data):
    categories = {}

    for category_name, _, _, _ in category_data:
        mutation = """
        mutation MyMutation($categoryName: String!) {
            insertCategories(objects: {categoryName: $categoryName, label: ""}) {
                returning {
                    categoryId
                    categoryName
                    label
                }
            }
        }
        """
        variables = {"categoryName": category_name}

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
            returned_data = data["data"]["insertCategories"]["returning"][0]
            categories[returned_data["categoryName"]] = returned_data["categoryId"]
            print(f"Successfully inserted category '{category_name}' with ID {returned_data['categoryId']}")

    print("Final categories inserted with their IDs:", categories)
    return categories
