def insert_editions(cursor):
    # Insert data into editions
    editions = {}
    for year in range(2020, 2026):
        name = f"Edition {year}"
        cursor.execute("INSERT INTO edition (name, edition_year, label) VALUES (%s, %s, %s) RETURNING edition_id",
                       (name, year, ""))
        editions[year] = cursor.fetchone()[0]
    return editions
