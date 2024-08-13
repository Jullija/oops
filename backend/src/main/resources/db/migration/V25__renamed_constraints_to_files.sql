ALTER TABLE groups
    DROP CONSTRAINT fk_award_files;
ALTER TABLE groups
    ADD CONSTRAINT fk_groups_files
        FOREIGN KEY (image_file_id) REFERENCES files(file_id);

ALTER TABLE users
    DROP CONSTRAINT fk_award_files;
ALTER TABLE users
    ADD CONSTRAINT fk_users_files
        FOREIGN KEY (image_file_id) REFERENCES files(file_id);
