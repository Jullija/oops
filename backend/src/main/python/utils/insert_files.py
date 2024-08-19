import os

def insert_files(cursor):
    """Detailed image of an fantasy setting chest. Inside a chest there is a sword. The sword is made of steel handle and blade made out of a carrot. On the chest there is a sign with a writing "Marchewka Laboratoryjna". Painting. Detailed. Foliage around the chest. The whole scene is in a fantasy forest. Inside the chest there are gold coins. There is an owlbear from dnd visible in the background. This owlbear is feathery, but resembles a bear with owl characteristics, like feathers. Owlbear is based on BaldursGate 3 owlbear. Owlbear should have a body of a bear and head of an owl. On the chest there is a sign with a writing "Marchewka Laboratoryjna" """
    """Detailed image of an fantasy setting chest. Inside a chest there is a glowing potion. The potionfloats above the opened chest.  On the chest there is a sign with a writing "Lekarstwo v2". Painting. Detailed. Foliage around the chest. The whole scene is in a fantasy forest. Inside the chest there is hay. There is an owlbear from dnd visible in the background. This owlbear is feathery, but resembles a bear with owl characteristics."""
    """https://fal.ai/models/fal-ai/flux/dev/playground"""
    owlbear_filenames = ["owlbear1.png", "owlbear2.png", "owlbear3.png", "owlbear4.png",
                             "owlbear5.png", "owlbear6.png", "owlbear7.png"]

    group_filenames = [f"gr{i}.png" for i in range(1, 21)]
    avatar_filenames = [f"avatar{i}.png" for i in range(1, 5)]

    award_filenames = ["Lekarstwo.png", "LekarstwoV2.png", "Weterynarz.png", "WeterynarzV2.png", "RabatNaSianko.png",
                       "MarchewkaProjektowa.png", "MarchewkaLaboratoryjna.png"]

    chest_filenames = ["ZlotaSkrzynia.png", "SrebrnaSkrzynia.png", "BrazowaSkrzynia.png"]

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
    for filename in award_filenames:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, "image/award", ""))

    for filename in chest_filenames:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, "image/chest", ""))

    for filename, file_type in sample_pictures:
        file_path = os.path.abspath(f"../../../resources/files/{filename}")
        cursor.execute("INSERT INTO files (path_to_file, file_name, file_type, label) VALUES (%s, %s, %s, %s)",
                       (file_path, filename, file_type, ""))
