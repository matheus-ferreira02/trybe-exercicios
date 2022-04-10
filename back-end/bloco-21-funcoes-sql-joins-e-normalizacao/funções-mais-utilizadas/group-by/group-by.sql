select first_name, min(first_name) from actor
group by first_name;

select store_id, active as status, count(active) as qnt from customer
group by store_id, active;

select rating, avg(rental_duration) as average from film
group by rating
order by average desc;

select district, count(address) as `qnt address` from address
group by district
order by `qnt address` desc;