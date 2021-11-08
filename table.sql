
create table fruit_basket ( 
  id serial not null primary key,
  fruit_name text, 
  quantity int, 
  price decimal (10,2));

-- insert into fruit_basket ( fruit_name ,quantity,price) values('Apple',2,2.00);
-- insert into fruit_basket ( fruit_name ,quantity,price) values('Peach',2,3.00);
-- insert into fruit_basket ( fruit_name ,quantity,price) values('Pear',2,5.00);
insert into fruit_basket ( fruit_name ,quantity,price) values('Orange',5,3.00);
insert into fruit_basket ( fruit_name ,quantity,price) values('Orange',10,30.00);

-- update fruit_basket set quantity = 5 where fruit_name = 'Orange';