ALTER TABLE categories
    ADD COLUMN light_color VARCHAR(7) NOT NULL DEFAULT '#FFFFFF',
    ADD COLUMN dark_color VARCHAR(7) NOT NULL DEFAULT '#000000';