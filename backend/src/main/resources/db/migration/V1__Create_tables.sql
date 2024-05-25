
CREATE TABLE categories (
                            category_id SERIAL PRIMARY KEY,
                            category_name VARCHAR(255) NOT NULL
);



CREATE TABLE chests (
                        chest_id SERIAL PRIMARY KEY,
                        type VARCHAR(255) NOT NULL
);

CREATE TABLE groups (
                        groups_id SERIAL PRIMARY KEY,
                        group_name VARCHAR(255) NOT NULL,
                        group_year INT NOT NULL
);

CREATE TABLE levels (
                        level_id SERIAL PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        minimum_points DOUBLE PRECISION NOT NULL,
                        maximum_points DOUBLE PRECISION NOT NULL,
                        avatar VARCHAR(255)
);



CREATE TABLE subcategories (
                               subcategory_id SERIAL PRIMARY KEY,
                               subcategory_name VARCHAR(255) NOT NULL,
                               category_id INT NOT NULL,
                               CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


CREATE TABLE users (
                       user_id SERIAL PRIMARY KEY,
                       nick VARCHAR(255) NOT NULL,
                       role VARCHAR(255) NOT NULL
);

CREATE TABLE points (
                        points_id SERIAL PRIMARY KEY,
                        student_id INT NOT NULL,
                        teacher_id INT NOT NULL,
                        how_many BIGINT NOT NULL,
                        subcategory_id INT NOT NULL,
                        CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES users(user_id),
                        CONSTRAINT fk_teacher FOREIGN KEY (teacher_id) REFERENCES users(user_id),
                        CONSTRAINT fk_subcategory FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id)
);

CREATE TABLE user_groups (
                             user_id INT NOT NULL,
                             group_id INT NOT NULL,
                             PRIMARY KEY (user_id, group_id),
                             CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id),
                             CONSTRAINT fk_group FOREIGN KEY (group_id) REFERENCES groups(groups_id)
);
CREATE TABLE chest_award (
                             chest_award_id SERIAL PRIMARY KEY,
                             chest_id INT NOT NULL,
                             name VARCHAR(255) NOT NULL,
                             bonus BIGINT NOT NULL,
                             CONSTRAINT fk_chest FOREIGN KEY (chest_id) REFERENCES chests(chest_id)
);

CREATE TABLE bonuses (
                         bonus_id SERIAL PRIMARY KEY,
                         points_id INT NOT NULL,
                         subcategory_id INT NOT NULL,
                         CONSTRAINT fk_points FOREIGN KEY (points_id) REFERENCES points(points_id),
                         CONSTRAINT fk_subcategory FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id)
);


CREATE TABLE chest_history (
                               chest_history_id SERIAL PRIMARY KEY,
                               user_id INT NOT NULL,
                               chest_id INT NOT NULL,
                               subcategory_id INT NOT NULL,
                               CONSTRAINT fk_user_chest FOREIGN KEY (user_id) REFERENCES users(user_id),
                               CONSTRAINT fk_chest_history FOREIGN KEY (chest_id) REFERENCES chests(chest_id),
                               CONSTRAINT fk_subcategory_chest FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id)
);
