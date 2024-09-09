ALTER TABLE groups
    ADD COLUMN teacher_id BIGINT NOT NULL DEFAULT 0,
    ADD CONSTRAINT fk_groups_teacher_id
        FOREIGN KEY (teacher_id) REFERENCES users(user_id);
