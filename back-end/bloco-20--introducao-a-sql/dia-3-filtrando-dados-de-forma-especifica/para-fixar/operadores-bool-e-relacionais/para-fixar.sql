USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';


SELECT * from customer
WHERE active IS FALSE AND store_id = 2
AND first_name <> 'KENNETH';


SELECT title, description, rating, release_year, replacement_cost FROM film
WHERE (rating <> 'NC-17' AND rating <> 'R') AND (replacement_cost < 18)
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(*) FROM customer
WHERE active is TRUE;


SELECT * FROM customer
WHERE active is FALSE;


SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title LIMIT 50;

