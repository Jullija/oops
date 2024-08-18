import requests


def insert_subcategories(hasura_url, headers, editions, categories, category_data, random):
    event_names = ["Gitowe Dziady", "Spooky Spring", "Constructor Christmas", "Polymorphism Presents",
                   "Inheritance Invites", "Encapsulation Extravaganza", "Abstraction Awards", "Recursion Rendezvous",
                   "Iteration Invitations", "Collections Celebration", "Generics Gala", "Concurrency Convention",
                   "Streams Soiree", "Lambda Luncheon", "Modules Mixer", "Patterns Party", "Testing Tournament",
                   "Debugging Dance"]

    subcategories_data = {
        category[0]: [(f"{category[2]}{i}", category[3]) for i in range(1, category[1] + 1)] if category[2] and category[3] is not None
        else
            [(f"{category[2]}{i}", random.randint(1, 20) * 10) for i in range(1, category[1] + 1)] if category[2] and not category[3] else

            [("Gitowe Dziady", 10)] + [(name, category[3]) for name in
                                                                        random.sample(event_names, category[1]-1)] if category[3] else
            [("Gitowe Dziady", 10)] + [(name, random.randint(1, 20) * 10) for name in
                                       random.sample(event_names, category[1] - 1)]
        for category in category_data
    }

    subcategory_to_category = {}
    subcategories = []
    subcategory_objects = []

    print("Preparing subcategories for bulk insertion...")

    for edition_id in editions.values():
        print(f"Processing subcategories for edition ID: {edition_id}")
        for category_name, subcategory_names_and_max_points in subcategories_data.items():
            ordinal_number = 0
            for subcategory_name, max_points in subcategory_names_and_max_points:
                print(f"  Preparing subcategory: {subcategory_name} (Category: {category_name}, Max Points: {max_points})")
                subcategory_objects.append({
                    "subcategoryName": subcategory_name,
                    "categoryId": categories[category_name],
                    "label": "",
                    "editionId": edition_id,
                    "maxPoints": max_points,
                    "ordinalNumber": ordinal_number
                })
                ordinal_number += 1

    if subcategory_objects:
        # Perform bulk insert
        mutation = """
        mutation MyMutation($subcategories: [SubcategoriesInsertInput!]!) {
            insertSubcategories(objects: $subcategories) {
                returning {
                    subcategoryId
                    subcategoryName
                    categoryId
                    editionId
                }
            }
        }
        """
        variables = {"subcategories": subcategory_objects}

        response = requests.post(
            hasura_url,
            json={"query": mutation, "variables": variables},
            headers=headers
        )

        data = response.json()
        if "errors" in data:
            print(f"Error during bulk insert of subcategories: {data['errors']}")
        else:
            returned_data = data["data"]["insertSubcategories"]["returning"]
            for subcategory in returned_data:
                subcategory_id = int(subcategory["subcategoryId"])
                subcategories.append(subcategory_id)
                subcategory_to_category[subcategory_id] = next(
                    category_name for category_name in categories if categories[category_name] == subcategory["categoryId"]
                )
                print(f"Successfully inserted subcategory '{subcategory['subcategoryName']}' with ID {subcategory_id} for edition ID {subcategory['editionId']}")

    print("All subcategories have been processed.")
    return subcategories, subcategory_to_category
