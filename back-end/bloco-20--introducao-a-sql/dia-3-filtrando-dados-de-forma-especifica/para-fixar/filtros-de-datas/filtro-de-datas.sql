USE sakila;

SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) BETWEEN '2005/07/01' AND '2005/08/22';


SELECT 
DATE(rental_date), DAY(rental_date), YEAR(rental_date), MONTH(rental_date),
HOUR(rental_id), MINUTE(rental_id), SECOND(rental_id)
FROM rental
WHERE rental_id = 10330;


SELECT * FROM payment
WHERE DATE(payment_date) = '2005/07/28'
AND HOUR(payment_date) > 22;

