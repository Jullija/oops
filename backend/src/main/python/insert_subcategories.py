def insert_subcategories(cursor, editions, categories):
    # Insert data into subcategories
    subcategories_data = {
        "LABORATORY": [(f"lab_{i}", 10) for i in range(1, 15)],
        "TEST": [(f"kart_{i}", 5) for i in range(1, 15)],
        "PROJECT": [(f"proj_{i}", 50) for i in range(1, 4)],
        "EVENT": [("Gitowe Dziady", 10), ("Spooky Spring", 20), ("Constructor Christmas", 100)]
    }
    subcategory_to_category = {}
    subcategories = []

    for edition_id in editions.values():
        for category_name, subcategory_names_and_max_points in subcategories_data.items():
            ordinal_number = 0
            for subcategory_name, max_points in subcategory_names_and_max_points:
                cursor.execute(
                    "INSERT INTO subcategories (subcategory_name, category_id, label, edition_id, max_points, ordinal_number) VALUES (%s, %s, %s, %s, %s, %s) RETURNING subcategory_id",
                    (subcategory_name, categories[category_name], "", edition_id, max_points, ordinal_number))
                subcategory_id = cursor.fetchone()[0]
                subcategories.append(subcategory_id)
                subcategory_to_category[subcategory_id] = category_name
                ordinal_number += 1
    return subcategories, subcategory_to_category
