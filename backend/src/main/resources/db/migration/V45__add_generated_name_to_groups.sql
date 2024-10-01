ALTER TABLE groups
    ALTER COLUMN group_name DROP NOT NULL,
    ADD COLUMN generated_name VARCHAR(255) NOT NULL DEFAULT '',
    ADD COLUMN usos_id INT NOT NULL DEFAULT 0;

DROP VIEW IF EXISTS hall_of_fame;

CREATE VIEW hall_of_fame AS
WITH user_points AS (
    SELECT
        u.user_id,
        u.nick,
        u.image_file_id,
        COALESCE(SUM(p.value), 0) AS sum_of_points,
        g.edition_id,
        g.groups_id,
        g.group_name,
        g.generated_name
    FROM
        users u
            LEFT JOIN user_groups ug ON u.user_id = ug.user_id
            LEFT JOIN groups g ON ug.group_id = g.groups_id
            LEFT JOIN points p ON u.user_id = p.student_id
    WHERE
        u.role = 'student'
    GROUP BY
        u.user_id, u.nick, g.edition_id, g.groups_id, g.group_name
)
SELECT
    up.user_id,
    up.nick,
    up.sum_of_points,
    up.edition_id,
    l.level_id,
    l2.name as level_name,
    l2.image_file_id as level_image_id,
    up.image_file_id as user_image_id,
    up.groups_id,
    up.group_name,
    up.generated_name
FROM
    user_points up
        LEFT JOIN user_level l ON l.edition_id = up.edition_id AND l.user_id = up.user_id
        LEFT JOIN levels l2 on l.level_id = l2.level_id