CREATE OR REPLACE FUNCTION update_group_teacher()
    RETURNS TRIGGER AS $$
BEGIN
    -- Check if the user's role is not 'student'
    IF (SELECT role FROM users WHERE user_id = NEW.user_id) != 'student' THEN
        -- Update the teacher_id in the related group
        UPDATE groups
        SET teacher_id = NEW.user_id
        WHERE groups_id = NEW.group_id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_group_teacher
    AFTER INSERT ON user_groups
    FOR EACH ROW
EXECUTE FUNCTION update_group_teacher();
