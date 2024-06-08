ALTER TABLE award
    ADD COLUMN award_value FLOAT NOT NULL default 1,
    ADD COLUMN category_id BIGINT NOT NULL default 1,
    ADD CONSTRAINT fk_categories FOREIGN KEY (category_id) REFERENCES categories(category_id);
