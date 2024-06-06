CREATE TABLE edition (
     edition_id SERIAL PRIMARY KEY,
     name VARCHAR(256) NOT NULL,
     edition_year INT NOT NULL,
     label VARCHAR(256) NOT NULL
);

ALTER TABLE chests
    ADD COLUMN edition_id BIGINT NOT NULL REFERENCES edition(edition_id);

ALTER TABLE groups
    ADD COLUMN edition_id BIGINT NOT NULL REFERENCES edition(edition_id);

ALTER TABLE levels
    ADD COLUMN edition_id BIGINT CREATE TABLE award_edition (
                               award_id BIGINT NOT NULL REFERENCES award(award_id),
                               edition_id BIGINT NOT NULL REFERENCES edition(edition_id),
                               PRIMARY KEY (award_id, edition_id)
);
NOT NULL REFERENCES edition(edition_id);

ALTER TABLE subcategories
    ADD COLUMN edition_id BIGINT NOT NULL REFERENCES edition(edition_id);

-- Create many-to-many relationship between award and edition

ALTER TABLE groups
    DROP COLUMN group_year;
