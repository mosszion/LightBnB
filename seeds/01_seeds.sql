-- Inserting data into users table

INSERT INTO users (name, email) 
VALUES ('abu', 'abu@here.com'),
('letu', 'letu@yahoo.com'),
('lia', 'lia@hotmail.com');

--Inserting data into properties table 

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 'furnished rooms', 'the message is come to checkout our rooms', 'thumbnail@url.com', 'http://pic@coverphoto.com', 150, 30, 1, 1, 'CANADA', '03 DEAVOULE ST', 'TORONTO', 'ONTARIO', 'M4W 1G7', TRUE),
(2, 'Luxury rooms', 'please come and vist our luxurious rooms', 'http://pic2@thumbnail.com', 'http;//pic2@coverphoto.com', 500, 50, 2, 3, 'CANADA', 'BLOOR ST', 'EDMONTON', 'ALBERTA', 'P4S 5I8', FALSE),
(2, 'smart room', 'automated room', 'https://pic3@thumbnail.com', 'https://pic3@coverphoto.com', 300, 20, 2, 2, 'CANADA', 'DANFORTH ST', 'BRITISH COLOMBIA', 'Q2J 2G8', FALSE);

-- Inserting data into reservations table

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-09-11', '2018-09-26', 2, 3),
('2019-01-04', '2019-02-01', 2, 2),
('2023-10-01', '2023-10-14', 1, 3);


-- Inserting data into property_reviews

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating) 
VALUES (3, 2, 1, 3),
(2, 2, 2, 4),
(3, 1, 3, 4);