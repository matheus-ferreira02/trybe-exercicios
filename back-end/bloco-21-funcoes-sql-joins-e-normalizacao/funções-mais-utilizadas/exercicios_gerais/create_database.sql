use hr;

select max(SALARY) from employees;

select max(SALARY) - min(SALARY) from employees;

select JOB_ID, avg(SALARY) as average_salary from employees
group by JOB_ID
order by average_salary desc;

select sum(SALARY) from employees;

select
round(max(SALARY) ,2) as higher_salary,
round(min(SALARY), 2) as lower_salary,
round(sum(SALARY), 2) as sum_salary,
round(avg(SALARY), 2) as average_salary
from employees;

select JOB_ID, count(JOB_ID) from employees
group by JOB_ID
having JOB_ID = 'IT_PROG';

select JOB_ID, sum(SALARY) from employees
group by JOB_ID;

select JOB_ID, sum(SALARY) from employees
group by JOB_ID
having JOB_ID = 'IT_PROG';

select JOB_ID, avg(SALARY) from employees
group by JOB_ID
having JOB_ID <> 'IT_PROG';

select
DEPARTMENT_ID, avg(salary) as average_salary, count(*) as qnt_employes
from employees
group by DEPARTMENT_ID having qnt_employes > 10;


select * from employees;
update employees
set PHONE_NUMBER = concat(777, substring(PHONE_NUMBER, 4))
where left(PHONE_NUMBER, 3) = 515;

select * from employees
where char_length(FIRST_NAME) >= 8;

select EMPLOYEE_ID, FIRST_NAME, year(HIRE_DATE) from employees;

select EMPLOYEE_ID, FIRST_NAME, day(HIRE_DATE) from employees;

select EMPLOYEE_ID, FIRST_NAME, month(HIRE_DATE) from employees;

select ucase(concat(FIRST_NAME, ' ', LAST_NAME)) from employees;

select LAST_NAME, HIRE_DATE from employees
where month(HIRE_DATE) = 7;

select concat(FIRST_NAME, ' ', LAST_NAME) as fullname,
datediff(current_date(), HIRE_DATE) as days_worked
from employees;
