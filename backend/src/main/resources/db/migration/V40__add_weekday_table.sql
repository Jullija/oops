CREATE TABLE weekdays (
    weekday_id SERIAL PRIMARY KEY,
    weekday_name VARCHAR(255) NOT NULL,
    weekday_abbr VARCHAR(255) NOT NULL,
    ordinal_number INTEGER NOT NULL,
    label VARCHAR(255) NOT NULL DEFAULT ''
);

INSERT INTO weekdays (weekday_name, weekday_abbr, ordinal_number) VALUES
            ('Poniedziałek', 'Pn', 0),
            ('Wtorek', 'Wt', 1),
            ('Środa', 'Śr', 2),
            ('Czwartek', 'Czw', 3),
            ('Piątek', 'Pt', 4);

ALTER TABLE groups
    DROP COLUMN weekday;

ALTER TABLE groups
    ADD COLUMN weekday_id INTEGER NOT NULL REFERENCES weekdays(weekday_id) DEFAULT 1;
