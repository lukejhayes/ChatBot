DROP DATABASE golf_db;

CREATE DATABASE golf_db;

USE golf_db;

CREATE TABLE golf_info(
    id INT(10) AUTO_INCREMENT NOT NULL,
    course_name VARCHAR(45) NOT NULL,
    course_address VARCHAR(45) NOT NULL,
    handicap INT(3) NOT NULL,
    slope INT(5) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO golf_info(course_name, course_address, handicap, slope)
VALUES('dummy course name', '1250 Prospect Ave', 23, 120);


SELECT * FROM golf_info;