SELECT * from sakila.staff;
USE sakila;
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username, last_update)
VALUES ('Marcelo', 'Moraes', 7, 3, 1, 'Mahh', NOW());

INSERT INTO staff (first_name, last_name, address_id, store_id, active, username, last_update)
VALUES
('Marcelo', 'Moraes', 7, 2, 1, 'Mahh', NOW()),
('Matheus', 'Ferreira', 7, 2, 1, 'Teus', NOW());

INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

SELECT * FROM actor;
SELECT * FROM category;
INSERT INTO category (name)
VALUES
('Teste'),
('Comedia');

SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id)
VALUES (4, 2);
