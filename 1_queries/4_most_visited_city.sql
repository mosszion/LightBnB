-- a query which gets the most visited city based on number of reservations
SELECT properties.city, COUNT(reservations.*) AS total_reservations
FROM properties
JOIN reservations ON property_id = properties.id
GROUP BY  properties.city
ORDER BY COUNT(reservations.*) DESC;