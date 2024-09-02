ALTER TABLE points ALTER COLUMN student_id SET DATA TYPE BIGINT;
ALTER TABLE points ALTER COLUMN subcategory_id SET DATA TYPE BIGINT;
ALTER TABLE points ALTER COLUMN teacher_id SET DATA TYPE BIGINT;
ALTER TABLE subcategories ALTER COLUMN subcategory_id SET DATA TYPE BIGINT;
ALTER TABLE subcategories ALTER COLUMN category_id SET DATA TYPE BIGINT;
ALTER TABLE user_groups ALTER COLUMN user_id SET DATA TYPE BIGINT;
ALTER TABLE user_groups ALTER COLUMN group_id SET DATA TYPE BIGINT;
ALTER TABLE users ALTER COLUMN user_id SET DATA TYPE BIGINT;
ALTER TABLE edition ALTER COLUMN edition_id SET DATA TYPE BIGINT;
ALTER TABLE groups ALTER COLUMN edition_id SET DATA TYPE BIGINT;
ALTER TABLE groups ALTER COLUMN groups_id SET DATA TYPE BIGINT;
ALTER TABLE groups ADD COLUMN label VARCHAR(255) DEFAULT '';

ALTER TABLE levels ALTER COLUMN level_id SET DATA TYPE BIGINT;

ALTER TABLE points ALTER COLUMN points_id SET DATA TYPE BIGINT;


CREATE VIEW hall_of_fame AS
SELECT
    u.user_id,
    u.nick,
    COALESCE(SUM(p.value), 0) AS sum_of_points,
    g.edition_id
FROM
    users u
        LEFT JOIN
    user_groups ug ON u.user_id = ug.user_id
        LEFT JOIN
    groups g ON ug.group_id = g.groups_id
        LEFT JOIN
    points p ON u.user_id = p.student_id
GROUP BY
    u.user_id, u.nick, g.edition_id;
