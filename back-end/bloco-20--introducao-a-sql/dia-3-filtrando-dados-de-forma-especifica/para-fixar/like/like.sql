USE sakila;

SELECT title FROM film
WHERE title LIKE '%ace%';


SELECT description FROM film
WHERE description LIKE '%china';


SELECT title, description FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord' LIMIT 2;


SELECT title FROM film
WHERE title LIKE '___gon%';


SELECT title FROM film
WHERE title LIKE '___gon%' AND description LIKE '%documentary%';


SELECT title FROM film
WHERE title LIKE 'mosquito%' OR title LIKE '%academy';


SELECT title, description FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%' LIMIT 6;
