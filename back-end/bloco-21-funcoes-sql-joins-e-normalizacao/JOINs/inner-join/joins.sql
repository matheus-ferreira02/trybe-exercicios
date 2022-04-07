use sakila;

select ac.actor_id, CONCAT(ac.first_name, ' ', ac.last_name) as actor_fullname, fac.film_id from actor ac
inner join film_actor fac
on ac.actor_id = fac.actor_id;


select concat(func.first_name, ' ', func.last_name) as fullname, ad.address
from staff func
inner join address ad
on func.address_id = ad.address_id;


select cu.customer_id, concat(cu.first_name, ' ', cu.last_name) as fullname, cu.email, ad.address_id, ad.address
from customer cu
inner join address ad
on cu.address_id = ad.address_id
order by first_name desc
limit 100;


select concat(cu.first_name, ' ', cu.last_name)as fullname, cu.email, cu.address_id, ad.address, ad.district
from customer cu
inner join address ad
on cu.address_id = ad.address_id
where ad.district = 'California' and first_name like '%rene%';


select cu.first_name, count(ad.address) as `quantidade de endereços`
from customer cu
inner join address ad
on cu.address_id = ad.address_id
where cu.active = 1
group by cu.customer_id
order by first_name desc, last_name desc;
