--  password for postgre sql: postgresql
--  / master pwd: pgAdmin
create database students_db;

CREATE TABLE students(
	student_id VARCHAR(25) PRIMARY KEY,
 	st_name VARCHAR(25) UNIQUE NOT NULL,
 	phone NUMERIC,
	st_email VARCHAR(50),
 	course VARCHAR(10)
 );

SELECT * FROM students;

INSERT INTO students values ('CSE20192','Vaishakh Nambiar',8970051962,'vn@gmail.com','19MAT2');
INSERT INTO students values ('CSE20200','Bilal M',9774561232,'bm@yahoo.com','19OS2');
INSERT INTO students values ('MEE20176','Govind S',7531596542,'gs@reddit.com','19PR3');
INSERT INTO students values ('EEE20154','Vinay K',9517536248,'vk@gmail.com','20PR1');
INSERT INTO students values ('ECE20147','Arjun S',6541237895,'as@gmail.com','22TC3');