use sakila;

select rating, round(avg(length), 2) as average
from film
group by rating
having average between 115.0 and 121.50
order by average desc;


select rating, sum(replacement_cost) as sum_replace
from film
group by rating
having sum_replace > 3950.50
order by sum_replace;