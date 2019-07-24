

DROP DATABASE golf_db;

CREATE DATABASE golf_db;

USE golf_db;

CREATE TABLE golf_info
(
  id INT (10)
  AUTO_INCREMENT NOT NULL,
    zipcode INT
  (5) NOT NULL,
	course_name VARCHAR
  (45) NOT NULL,
	course_address VARCHAR
  (45) NOT NULL ,
	handicap INT
  (3) NOT NULL,
	slope INT
  (5) NOT NULL,
    PRIMARY KEY
  (id)
    );



  INSERT INTO golf_info
    (zipcode, course_name, course_address, handicap, slope)
  VALUES(12334, 'dummy course name', '1250 Prospect Ave', 23, 120);

  INSERT INTO golf_info
    (zipcode,course_name, course_address, handicap, slope)
  VALUES(65565, 'skokie country', '1250 Prospect Ave', 44, 133);

  INSERT INTO golf_info
    (zipcode,course_name, course_address, handicap, slope)
  VALUES(66656, 'wilmette', '123 Lake Ave', 66, 144);

  INSERT INTO golf_info
    (zipcode,course_name, course_address, handicap, slope)
  VALUES(98899, 'glenview golf course', 'dempster ave', 88, 155);

  SELECT *
  FROM golf_info;
