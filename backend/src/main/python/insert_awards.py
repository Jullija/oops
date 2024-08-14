def insert_awards(cursor):
    # Insert data into awards
    awards = [
        ("Lekarstwo", "additive_next", 10, 1, 6, ""),
        ("Weterynarz", "additive_prev", 20, 2, 2, ""),
        ("Marchewka laboratoryjna", "multiplicative", 0.3, 1, 2, ""),
        ("Marchewka projektowa", "multiplicative", 0.6, 3, 2, ""),
        ("Rabat na sianko", "additive", 12, 1, 2, ""),
        ("LekarstwoV2", "additive_next", 14, 1, 2, ""),
        ("WeterynarzV2", "additive_prev", 16, 2, -1, "")
    ]
    award_ids = []
    award_name_map = {}
    for name, award_type, award_value, category_id, max_usages, label in awards:
        cursor.execute(
            "INSERT INTO award (award_name, award_type, award_value, category_id, max_usages, label) VALUES (%s, %s, %s, %s, %s, %s) RETURNING award_id",
            (name, award_type, award_value, category_id, max_usages, ""))
        award_id = cursor.fetchone()[0]
        award_ids.append(award_id)
        award_name_map[award_id] = name
    return award_ids, award_name_map