import os

def insert_files(cursor):
    owlbear_filenames = ["owlbear1.png", "owlbear2.png", "owlbear3.png", "owlbear4.png",
                             "owlbear5.png", "owlbear6.png", "owlbear7.png"]

    group_filenames = [f"gr{i}.png" for i in range(1, 21)]
    avatar_filenames = [f"avatar{i}.png" for i in range(1, 5)]

    sample_pictures = [("sampleAvatar.png", "image/avatar/sample"), ("sampleGroup.png", "image/group/sample"),
                       ("sampleLevel.png", "image/level/sample"), ("sampleChest.png", "image/chest/sample"),
                       ("sampleAward.png", "image/award/sample")]


    for filename in owlbear_filenames:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, "image/level", ""))

    for filename in group_filenames:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, "image/group", ""))

    for filename in avatar_filenames:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, "image/avatar", ""))

    for filename, file_type in sample_pictures:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, file_type, ""))
