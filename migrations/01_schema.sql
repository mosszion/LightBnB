-- Table for the users

-- Delete any existing table by that name if any
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (id int, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255));
