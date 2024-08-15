import requests

def insert_points(hasura_url, headers, cursor, coordinator_id, teacher_ids, subcategories, subcategory_to_category, award_name_map, random, num_points=5):
    def give_chest(hasura_url, headers, teacher_id):
        # Step 1: Choose a random student from the teacher's group
        query_students = """
        query MyQuery($teacherId: bigint!) {
            users(where: {userGroups: {group: {userGroups: {userId: {_eq: $teacherId}}}}}) {
                userId
                userGroups {
                    group {
                        editionId
                    }
                }
                role
            }
        }
        """
        variables = {"teacherId": teacher_id}
        response_students = requests.post(
            hasura_url,
            json={"query": query_students, "variables": variables},
            headers=headers
        )
        students = response_students.json()["data"]["users"]

        if not students:
            print(f"No students found for teacher {teacher_id}")
            return None

        student_record = random.choice(students)
        student_id = student_record["userId"]
        edition_id = student_record["userGroups"][0]["group"]["editionId"]

        # Step 2: Check that both the teacher and student are in the same edition
        query_check = """
        query MyQuery($teacherId: bigint!, $editionId: bigint!) {
            userGroups(where: {userId: {_eq: $teacherId}, group: {editionId: {_eq: $editionId}}}) {
                userId
            }
        }
        """
        response_check = requests.post(
            hasura_url,
            json={"query": query_check, "variables": {"teacherId": teacher_id, "editionId": edition_id}},
            headers=headers
        )

        if not response_check.json()["data"]["userGroups"]:
            print(f"Teacher {teacher_id} is not in the same edition as student {student_id}")
            return None

        # Step 3: Insert a record in the chest_history table
        query_chests = """
        query MyQuery($editionId: bigint!) {
            chests(where: {editionId: {_eq: $editionId}}) {
                chestId
            }
        }
        """
        response_chests = requests.post(
            hasura_url,
            json={"query": query_chests, "variables": {"editionId": edition_id}},
            headers=headers
        )
        chests = response_chests.json()["data"]["chests"]

        if not chests:
            print(f"No chests found for edition {edition_id}")
            return None

        chest_id = random.choice(chests)["chestId"]

        # Step 4: Retrieve eligible subcategories for "EVENT" and "PROJECT"
        query_subcategories = """
        query MyQuery($editionId: bigint!, $categoryNames: [String!]) {
            subcategories(where: {editionId: {_eq: $editionId}, category: {categoryName: {_in: $categoryNames}}}) {
                subcategoryId
            }
        }
        """
        variables_subcategories = {
            "editionId": edition_id,
            "categoryNames": ["EVENT", "PROJECT"]
        }

        response_subcategories = requests.post(
            hasura_url,
            json={"query": query_subcategories, "variables": variables_subcategories},
            headers=headers
        )
        subcategories = response_subcategories.json()["data"]["subcategories"]

        if not subcategories:
            print(f"No eligible subcategories found for edition {edition_id}")
            return None

        subcategory_id = random.choice(subcategories)["subcategoryId"]

        # Step 5: Insert a record in the chest_history table
        mutation_chest_history = """
        mutation MyMutation($studentId: bigint!, $chestId: bigint!, $subcategoryId: bigint!, $teacherId: bigint!) {
            insertChestHistory(objects: {
                userId: $studentId,
                chestId: $chestId,
                subcategoryId: $subcategoryId,
                label: "",
                createdAt: "now()",
                updatedAt: "now()",
                teacherId: $teacherId
            }) {
                returning {
                    chestHistoryId
                }
            }
        }
        """
        variables_chest_history = {
            "studentId": student_id,
            "chestId": chest_id,
            "subcategoryId": subcategory_id,
            "teacherId": teacher_id
        }

        response_chest_history = requests.post(
            hasura_url,
            json={"query": mutation_chest_history, "variables": variables_chest_history},
            headers=headers
        )

        chest_history_id = response_chest_history.json()["data"]["insertChestHistory"]["returning"][0]["chestHistoryId"]

        return chest_history_id, chest_id, student_id, teacher_id

    def apply_award_from_chest(chest_history_id, chest_id, student_id, teacher_id):
        # Step 1: The student chooses an award from the chest
        query_awards = """
        query MyQuery($chestId: bigint!) {
            chestAward(where: {chestId: {_eq: $chestId}}) {
                awardId
            }
        }
        """
        variables = {"chestId": chest_id}

        response_awards = requests.post(
            hasura_url,
            json={"query": query_awards, "variables": variables},
            headers=headers
        )
        available_awards = response_awards.json()["data"]["chestAward"]

        if not available_awards:
            print(f"No awards available for chest {chest_id}")
            return None

        chosen_award_id = random.choice(available_awards)["awardId"]

        # Step 2: Apply the chosen award using addBonusMutation
        mutation_add_bonus = """
        mutation AddBonus($chestHistoryId: Int!, $awardId: Int!) {
            addBonusMutation(chestHistoryId: $chestHistoryId, awardId: $awardId) {
                bonus {
                    bonusId
                }
                points {
                    pointsId
                    value
                }
            }
        }
        """
        variables_add_bonus = {
            "chestHistoryId": chest_history_id,
            "awardId": chosen_award_id
        }

        response_add_bonus = requests.post(
            hasura_url,
            json={"query": mutation_add_bonus, "variables": variables_add_bonus},
            headers=headers
        )

        if "errors" in response_add_bonus.json():
            print(f"Error applying bonus for chest history {chest_history_id}: {response_add_bonus.json()['errors']}")
            return None

        result = response_add_bonus.json()["data"]["addBonusMutation"]
        bonus_id = result["bonus"]["bonusId"]
        points_id = result["points"]["pointsId"]
        points_value = result["points"]["value"]

        # Step 3: Output the result
        print(
            f"Teacher {teacher_id} gave chest {chest_id} to student {student_id}. Award {chosen_award_id} applied. Bonus ID: {bonus_id}, Points ID: {points_id}, Points Value: {points_value}.")

    def add_points_for_laboratory_or_test(teacher_id):
        # Step 1: Choose a random student from the teacher's group
        query_students = """
        query MyQuery($teacherId: bigint!) {
            users(where: {userGroups: {group: {userGroups: {userId: {_eq: $teacherId}}}}, role: {_eq: "student"}}) {
                userId
                userGroups {
                    group {
                        editionId
                    }
                }
                role
            }
        }
        """
        variables = {"teacherId": teacher_id}

        response_students = requests.post(
            hasura_url,
            json={"query": query_students, "variables": variables},
            headers=headers
        )
        students = response_students.json()["data"]["users"]

        if not students:
            print(f"No students found for teacher {teacher_id}")
            return None

        student_record = random.choice(students)
        student_id = student_record["userId"]
        edition_id = student_record["userGroups"][0]["group"]["editionId"]

        # Step 2: Choose a subcategory from LABORATORY or TEST within the student's edition
        query_subcategories = """
        query MyQuery($editionId: bigint!) {
            subcategories(where: {
                editionId: {_eq: $editionId},
                category: {categoryName: {_in: ["LABORATORY", "TEST"]}}
            }) {
                subcategoryId
                maxPoints
            }
        }
        """
        response_subcategories = requests.post(
            hasura_url,
            json={"query": query_subcategories, "variables": {"editionId": edition_id}},
            headers=headers
        )
        subcategories = response_subcategories.json()["data"]["subcategories"]

        if not subcategories:
            print(f"No subcategories found for edition {edition_id} in LABORATORY or TEST")
            return None

        subcategory_record = random.choice(subcategories)
        subcategory_id = subcategory_record["subcategoryId"]
        max_points = subcategory_record["maxPoints"]

        # Mean and standard deviation for the normal distribution
        mean = max_points / 2
        std_dev = max_points / 6

        # Generating points from a normal distribution
        points = round(random.gauss(mean, std_dev), 1)

        # Ensure the points are within a valid range (0 to max_points)
        points = max(0, min(points, max_points))

        if points > max_points:
            points = max_points

        mutation_add_points = """
        mutation AddPoints($studentId: Int!, $teacherId: Int!, $value: Float!, $subcategoryId: Int!) {
            addPointsMutation(studentId: $studentId, teacherId: $teacherId, value: $value, subcategoryId: $subcategoryId) {
                pointsId
                value
                subcategory {
                    subcategoryName
                }
            }
        }
        """
        variables_add_points = {
            "studentId": student_id,
            "teacherId": teacher_id,
            "value": float(points),
            "subcategoryId": subcategory_id
        }

        response_add_points = requests.post(
            hasura_url,
            json={"query": mutation_add_points, "variables": variables_add_points},
            headers=headers
        )

        if "errors" in response_add_points.json():
            print(f"Error adding points for student {student_id}: {response_add_points.json()['errors']}")
            return None

        result = response_add_points.json()["data"]["addPointsMutation"]
        print(
            f"Teacher {teacher_id} added {points} points to student {student_id} for subcategory {result['subcategory']['subcategoryName']} in edition {edition_id}.")

    # Example of modeling the chest-giving process
    chests_given = []
    for teacher_id in teacher_ids:
        for _ in range(num_points):
            new_chest = give_chest(hasura_url, headers, teacher_id)
            if new_chest:
                chests_given.append(new_chest)
            add_points_for_laboratory_or_test(teacher_id)

    for _ in range(num_points):
        new_chest = give_chest(hasura_url, headers, coordinator_id)
        if new_chest:
            chests_given.append(new_chest)
        add_points_for_laboratory_or_test(coordinator_id)

    for new_chest in chests_given:
        apply_award_from_chest(*new_chest)
