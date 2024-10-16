CREATE TABLE grading_checks(
    grading_check_id SERIAL PRIMARY KEY,
    edition_id BIGINT NOT NULL,
    end_of_labs_date DATE NOT NULL DEFAULT CURRENT_DATE,
    end_of_labs_levels_threshold BIGINT NOT NULL DEFAULT 1,
    project_points_threshold FLOAT NOT NULL DEFAULT 0.0,
    project_id BIGINT NOT NULL DEFAULT 1,
    CONSTRAINT fk_edition FOREIGN KEY (edition_id) REFERENCES edition(edition_id),
    CONSTRAINT fk_level FOREIGN KEY (end_of_labs_levels_threshold) REFERENCES levels(level_id),
    CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES categories(category_id)
);