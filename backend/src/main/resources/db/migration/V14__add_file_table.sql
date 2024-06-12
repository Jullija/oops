CREATE TABLE files (
                       file_id SERIAL PRIMARY KEY,
                       path_to_file VARCHAR(1024) NOT NULL,
                       file_name VARCHAR(255) NOT NULL,
                       file_type VARCHAR(50) NOT NULL
);

ALTER TABLE levels
    DROP COLUMN avatar,
    ADD COLUMN image_file_id BIGINT,
    ADD CONSTRAINT fk_levels_files
        FOREIGN KEY (image_file_id) REFERENCES files(file_id);

ALTER TABLE award
    ADD COLUMN image_file_id BIGINT,
    ADD CONSTRAINT fk_award_files
        FOREIGN KEY (image_file_id) REFERENCES files(file_id);

ALTER TABLE chests
    ADD COLUMN image_file_id BIGINT,
    ADD CONSTRAINT fk_chests_files
        FOREIGN KEY (image_file_id) REFERENCES files(file_id);
