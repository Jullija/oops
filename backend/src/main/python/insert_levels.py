def insert_levels(cursor, editions, random):
    def generate_levels():
        levels = [0]
        for i in range(1, 8):
            if i < 3:
                levels.append(levels[-1] + random.randint(40, 60))
            else:
                levels.append(levels[-1] + random.randint(10, 20))
        for i in range(0, 8):
            levels[i] = int(levels[i] / max(levels) * 100)
        return levels


    random_levels = [[0, 25, 50, 60, 70, 80, 90, 100]] + [generate_levels() for _ in range(len(editions.values()) - 1)]
    # Insert data into levels
    for i, edition_id in enumerate(editions.values()):
        levels_values = random_levels[i]
        levels_data = [
            ("Jajo", levels_values[0], levels_values[1], 1, 2.0, "", False, 0),
            ("Pisklak", levels_values[1], levels_values[2], 2, 2.0, "", False, 1),
            ("Podlot", levels_values[2], levels_values[3], 3, 3.0, "", False, 2),
            ("Żółtodziób", levels_values[3], levels_values[4], 4, 3.5, "", False, 3),
            ("Nieopierzony odkrywca", levels_values[4], levels_values[5], 5, 4.0, "", False, 4),
            ("Samodzielny Zwierzak", levels_values[5], levels_values[6], 6, 4.5, "", False, 5),
            ("Majestatyczna Bestia", levels_values[6], levels_values[7], 7, 5.0, "", True, 6)
        ]

        for name, min_points, max_points, image_file_id, grade, label, highest, ordinal_number in levels_data:
            cursor.execute(
                "INSERT INTO levels (name, minimum_points, maximum_points, image_file_id, grade, label, edition_id, highest, ordinal_number) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING level_id",
                (name, min_points, max_points, image_file_id, grade, "", edition_id, highest, ordinal_number))