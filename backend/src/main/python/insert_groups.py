def insert_groups(cursor, editions, random):
    # Insert data into groups
    weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
    groups = []
    year_group_counts = {year: random.randint(12, 15) for year in range(2020, 2026)}
    for year, count in year_group_counts.items():
        for i in range(1, count + 1):
            group_name = f"gr_{i}"
            cursor.execute(
                "INSERT INTO groups (group_name, edition_id, label, weekday, start_time, end_time) VALUES (%s, %s, %s, %s, %s, %s) RETURNING groups_id",
                (group_name, editions[year], "", random.choice(weekdays), "16:00:00", "17:30:00"))
            groups.append(cursor.fetchone()[0])
    return year_group_counts, groups
