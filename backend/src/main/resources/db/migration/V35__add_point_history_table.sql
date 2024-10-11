ALTER TABLE points
    ADD COLUMN updated_by bigint NOT NULL DEFAULT 0;

CREATE TABLE points_history
(
    points_history_id serial PRIMARY KEY, -- Auto-incrementing primary key
    points_id      bigint    NOT NULL,
    student_id     bigint    NOT NULL,
    teacher_id     bigint    NOT NULL,
    updated_by     bigint    NOT NULL,
    value          NUMERIC(10, 2) NOT NULL,
    subcategory_id bigint    NOT NULL,
    label          varchar(256) NOT NULL,
    created_at     timestamp NOT NULL,
    updated_at     timestamp NOT NULL,
    copied_at      timestamp DEFAULT now() NOT NULL -- Column to record when the copy was made
);

CREATE OR REPLACE FUNCTION copy_to_history()
    RETURNS TRIGGER AS $$
BEGIN
    -- Insert the old row into the pointHistory table, pointHistoryId is automatically handled by the serial type
    INSERT INTO points_history (points_id, student_id, teacher_id, updated_by, value, subcategory_id, label, created_at, updated_at, copied_at)
    VALUES (OLD.points_id, OLD.student_id, OLD.teacher_id, OLD.updated_by, OLD.value, OLD.subcategory_id, OLD.label, OLD.created_at, OLD.updated_at, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS before_update_copy_to_history ON points;

CREATE TRIGGER before_update_copy_to_history
    BEFORE UPDATE ON points
    FOR EACH ROW
EXECUTE FUNCTION copy_to_history();

CREATE OR REPLACE FUNCTION prevent_updates_deletes()
    RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Updates and deletes are not allowed on the pointsHistory table';
    RETURN NULL; -- This line is never reached due to the exception
END;
$$ LANGUAGE plpgsql;

-- Trigger to prevent updates
CREATE TRIGGER prevent_points_history_update
    BEFORE UPDATE ON points_history
    FOR EACH ROW
EXECUTE FUNCTION prevent_updates_deletes();

-- Trigger to prevent deletes
CREATE TRIGGER prevent_points_history_delete
    BEFORE DELETE ON points_history
    FOR EACH ROW
EXECUTE FUNCTION prevent_updates_deletes();
