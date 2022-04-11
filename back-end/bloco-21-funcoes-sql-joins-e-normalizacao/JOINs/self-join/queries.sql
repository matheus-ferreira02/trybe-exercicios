use hr;

select
  concat(em.FIRST_NAME, ' ', em.last_name) as employee,
  concat(ma.FIRST_NAME, ' ', ma.LAST_NAME) as manager
from
  employees as em
inner join
  employees as ma on ma.DEPARTMENT_ID <> em.DEPARTMENT_ID;

select * from employees;
select
  concat(ma.FIRST_NAME, ' ', ma.LAST_NAME) as fullname,
  count(em.FIRST_NAME) as qnt_employees
from
  employees as ma
inner join
  employees as em on em.MANAGER_ID = ma.EMPLOYEE_ID
group by
  fullname
order by
  qnt_employees;