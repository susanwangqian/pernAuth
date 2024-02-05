-- user table
create table users (
    user_id serial primary key, -- serial: increment by 1
    email varchar(255) unique not null, -- max 255 characters
    password varchar(255) not null,
    created_at date default current_date
);