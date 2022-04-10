use sakila;

select round(avg(length)) as `Média de Duração` from film;

select min(length) as `Duração Mínima` from film;

select max(length) as `Duração Máxima` from film;

select sum(length) as `Tempo de Exibição Total` from film;


select count(film_id) as `Filmes registrados` from film;
