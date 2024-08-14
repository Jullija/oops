def insert_chests(cursor, editions):
    # Insert data into chests
    chests = [
        ("Gold Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_gold.png"),
        ("Silver Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_silver.png"),
        ("Bronze Chest", "https://raw.githubusercontent.com/Soamid/obiektowe-lab/master/img/reward_bronze.png")
    ]
    chest_ids = []
    for year, edition_id in editions.items():
        for name, image_url in chests:
            cursor.execute("INSERT INTO chests (type, label, edition_id) VALUES (%s, %s, %s) RETURNING chest_id",
                           (name, "", edition_id))
            chest_ids.append(cursor.fetchone()[0])
    return chest_ids
