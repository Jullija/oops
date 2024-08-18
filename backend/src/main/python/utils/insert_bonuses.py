category_names = ["LABORATORY", "TEST", "PROJECT", "EVENT"]

# Insert data into categories
categories = {}
for category_name in category_names:
    cursor.execute("INSERT INTO categories (category_name, label) VALUES (%s, %s) RETURNING category_id",
                   (category_name, ""))
    categories[category_name] = cursor.fetchone()[0]