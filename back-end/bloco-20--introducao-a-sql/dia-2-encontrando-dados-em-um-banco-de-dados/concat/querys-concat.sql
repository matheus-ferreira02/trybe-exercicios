USE sakila;
SELECT concat(title, ' - ', release_year) AS 'lançamento do filme' FROM film;
SELECT concat(title, ' - ', rating) AS 'classificação' FROM film;
SELECT concat(address, ' - ', district) AS 'classificação' FROM address;