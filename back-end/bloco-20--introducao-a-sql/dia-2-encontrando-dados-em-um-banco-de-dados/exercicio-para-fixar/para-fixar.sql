SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;
SELECT last_name, first_name FROM sakila.actor
ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language WHERE name <> 'English';
SELECT * FROM sakila.film;

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost LIMIT 20;
