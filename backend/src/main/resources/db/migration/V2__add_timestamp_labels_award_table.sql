-- Add new columns to existing tables
ALTER TABLE categories
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

ALTER TABLE chests
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

ALTER TABLE levels
    ADD COLUMN grade NUMERIC(10, 1) NOT NULL default 2.0,
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

ALTER TABLE points
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

ALTER TABLE subcategories
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

ALTER TABLE users
    ADD COLUMN index_number INT NOT NULL,
    ADD COLUMN first_name VARCHAR(255) NOT NULL,
    ADD COLUMN second_name VARCHAR(255) NOT NULL,
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

-- Create new table awards
CREATE TABLE award (
                       award_id SERIAL PRIMARY KEY,
                       award_name VARCHAR(255) NOT NULL,
                       award_type VARCHAR(255) NOT NULL,
                       label VARCHAR(256) NOT NULL DEFAULT ''
);

-- Alter existing table chest_award to include reference to award
ALTER TABLE chest_award
    ADD COLUMN award_id INT NOT NULL,
ADD CONSTRAINT fk_award FOREIGN KEY (award_id) REFERENCES award(award_id);

-- Add timestamps to existing tables
ALTER TABLE bonuses
    ADD COLUMN award_id INT NOT NULL,
    ADD CONSTRAINT fk_award FOREIGN KEY (award_id) REFERENCES award(award_id),
    ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;


ALTER TABLE points
    ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Add column to chest_history for label
ALTER TABLE chest_history
    ADD COLUMN label VARCHAR(256) NOT NULL DEFAULT '';

-- Add timestamps to chest_history table
ALTER TABLE chest_history
    ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Update existing records to set label columns to default values
UPDATE categories SET label = '' WHERE label IS NULL;
UPDATE chests SET label = '' WHERE label IS NULL;
UPDATE levels SET label = '' WHERE label IS NULL;
UPDATE points SET label = '' WHERE label IS NULL;
UPDATE subcategories SET label = '' WHERE label IS NULL;
UPDATE users SET label = '' WHERE label IS NULL;
UPDATE chest_history SET label = '' WHERE label IS NULL;
