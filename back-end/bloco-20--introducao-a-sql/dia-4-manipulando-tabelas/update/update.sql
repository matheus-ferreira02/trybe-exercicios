USE sakila;
SELECT * FROM staff;

UPDATE staff
SET first_name = 'Digo'
WHERE first_name = 'Matheus';

UPDATE staff
SET first_name = 'Tiago', last_name = 'Silva'
WHERE first_name = 'MArcelo';

UPDATE actor
SET first_name = 'Mila', last_name = 'Vitoria'
WHERE actor_id IN (1, 2, 3);

UPDATE actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'Theus'
              WHEN 3 THEN 'Higor'
              WHEN 5 THEN 'MIA'
          ELSE first_name
END);

UPDATE staff
SET password = 'novaSenha'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE actor
SET first_name = 'GOSTOSO'
WHERE first_name = 'Theus';

SELECT * FROM category;

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM film;

UPDATE film
SET rental_rate = 25.00
WHERE length > 100 AND (rating = 'G' OR rating = 'PG' OR  rating = 'PG-13') AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
  CASE 
    WHEN length BETWEEN 0 AND 100 THEN 10
      ELSE 20
END);

SELECT * FROM film;

USE sakila;
