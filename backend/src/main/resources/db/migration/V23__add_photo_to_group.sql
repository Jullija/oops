ALTER TABLE groups
    ADD COLUMN image_file_id BIGINT,
    ADD CONSTRAINT fk_award_files
        FOREIGN KEY (image_file_id) REFERENCES files(file_id);
