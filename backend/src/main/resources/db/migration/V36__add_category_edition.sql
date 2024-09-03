CREATE TABLE category_edition (
                            category_id INT NOT NULL,
                            edition_id INT NOT NULL,
                            label VARCHAR(256) NOT NULL DEFAULT '',
                            PRIMARY KEY (category_id, edition_id),
                            CONSTRAINT fk_categories FOREIGN KEY (category_id) REFERENCES categories(category_id),
                            CONSTRAINT fk_edition FOREIGN KEY (edition_id) REFERENCES edition(edition_id)
);

-- Add unique constraint on user_id and edition_id
ALTER TABLE category_edition
    ADD CONSTRAINT unique_category_edition UNIQUE (category_id, edition_id);