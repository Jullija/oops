def insert_award_editions(cursor, award_ids, editions, award_name_map):
    # Insert data into award_edition with specific editions for each award
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
        for year in award_editions[name]:
            if year in editions:
                cursor.execute("INSERT INTO award_edition (award_id, edition_id, label) VALUES (%s, %s, %s)",
                               (award_id, editions[year], ""))
