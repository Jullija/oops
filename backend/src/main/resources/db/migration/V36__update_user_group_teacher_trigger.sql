-- Migration: Manage group teacher assignments during inserts and updates

-- Drop existing triggers and functions if they exist to avoid conflicts
DROP TRIGGER IF EXISTS trigger_update_group_teacher ON user_groups;
DROP FUNCTION IF EXISTS update_group_teacher;
DROP TRIGGER IF EXISTS trigger_update_on_group_teacher ON groups;
DROP FUNCTION IF EXISTS update_on_group_teacher;

-- Create the function to handle teacher insertion in user_groups
CREATE OR REPLACE FUNCTION update_group_teacher()
    RETURNS TRIGGER AS $$
DECLARE
    existing_teacher_id INT;
BEGIN
    -- Check if the user's role is not 'student'
    IF (SELECT role FROM users WHERE user_id = NEW.user_id) != 'student' THEN
        -- Find the existing teacher assigned to the group
        SELECT ug.user_id
        INTO existing_teacher_id
        FROM user_groups ug
                 JOIN users u ON ug.user_id = u.user_id
        WHERE ug.group_id = NEW.group_id AND u.role != 'student'
        LIMIT 1;

        -- If there is an existing teacher, delete their entry from user_groups
        IF existing_teacher_id IS NOT NULL THEN
            DELETE FROM user_groups
            WHERE group_id = NEW.group_id AND user_id = existing_teacher_id;
        END IF;

        -- Update the teacher_id in the related group
        UPDATE groups
        SET teacher_id = NEW.user_id
        WHERE groups_id = NEW.group_id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger to call the function after each insert on user_groups
CREATE TRIGGER trigger_update_group_teacher
    AFTER INSERT ON user_groups
    FOR EACH ROW
EXECUTE FUNCTION update_group_teacher();

-- Create the function to handle updates to the teacher in the groups table
CREATE OR REPLACE FUNCTION update_on_group_teacher()
    RETURNS TRIGGER AS $$
BEGIN
    -- Check if the teacher_id is being updated
    IF NEW.teacher_id IS DISTINCT FROM OLD.teacher_id THEN
        -- Delete the old teacher from user_groups if the old teacher exists
        DELETE FROM user_groups
        WHERE group_id = OLD.groups_id AND user_id = OLD.teacher_id;

        -- Insert the new teacher into user_groups if the new teacher is not null
        IF NEW.teacher_id IS NOT NULL THEN
            INSERT INTO user_groups (user_id, group_id)
            VALUES (NEW.teacher_id, NEW.groups_id);
        END IF;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger to call the function after each update on groups
CREATE TRIGGER trigger_update_on_group_teacher
    AFTER UPDATE OF teacher_id ON groups
    FOR EACH ROW
EXECUTE FUNCTION update_on_group_teacher();
