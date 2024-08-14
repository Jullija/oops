def insert_chest_awards(cursor, chest_ids):
    # Insert data into chest_award
    chest_awards = []
    for chest_id in chest_ids:
        cursor.execute("SELECT edition_id FROM chests WHERE chest_id = %s", (chest_id,))
        chest_edition_id = cursor.fetchone()[0]
        cursor.execute("SELECT award_id FROM award_edition WHERE edition_id = %s", (chest_edition_id,))
        valid_awards = cursor.fetchall()
        for award in valid_awards:
            award_id = award[0]
            cursor.execute(
                "INSERT INTO chest_award (chest_id, award_id, label) VALUES (%s, %s, %s) RETURNING award_id",
                (chest_id, award_id, ""))
            chest_awards.append(cursor.fetchone()[0])