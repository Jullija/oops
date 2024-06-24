-- Add the 'highest' column to the 'levels' table
ALTER TABLE levels
    ADD COLUMN highest BOOLEAN DEFAULT FALSE NOT NULL;

-- Alter the 'maximum_points' column to be nullable
ALTER TABLE levels
    ALTER COLUMN maximum_points DROP NOT NULL;

-- Drop the existing hall_of_fame view
DROP VIEW IF EXISTS hall_of_fame;

-- Create the updated hall_of_fame view with level_id
CREATE VIEW hall_of_fame AS
WITH user_points AS (
    SELECT
        u.user_id,
        u.nick,
        COALESCE(SUM(p.value), 0) AS sum_of_points,
        g.edition_id
    FROM
        users u
            LEFT JOIN user_groups ug ON u.user_id = ug.user_id
            LEFT JOIN groups g ON ug.group_id = g.groups_id
            LEFT JOIN points p ON u.user_id = p.student_id
    WHERE
        u.role = 'student'
    GROUP BY
        u.user_id, u.nick, g.edition_id
)
SELECT
    up.user_id,
    up.nick,
    up.sum_of_points,
    up.edition_id,
    l.level_id,
    l.name as level_name,
    l.avatar
FROM
    user_points up
        LEFT JOIN levels l ON l.edition_id = up.edition_id
        AND up.sum_of_points >= l.minimum_points
        AND (up.sum_of_points < l.maximum_points OR l.maximum_points IS NULL or l.highest)