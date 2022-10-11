create table brands
(
	id int auto_increment
		primary key,
	name varchar(45) not null
);

create table products
(
	id int auto_increment
		primary key,
	name varchar(45) not null,
	rating tinyint(1) null,
	description varchar(250) null,
	brand_id int not null,
	active tinyint(1) default 1 null,
	constraint fk_products_brand1
		foreign key (brand_id) references brands (id)
);

create table images_products
(
	id int auto_increment
		primary key,
	path varchar(250) null,
	product_id int not null,
	constraint fk_images_products_products1
		foreign key (product_id) references products (id)
			on delete cascade
);

create index fk_images_products_products1_idx
	on images_products (product_id);

create index fk_products_brand1_idx
	on products (brand_id);

create table products_grames
(
	id int auto_increment
		primary key,
	product_id int not null,
	grames int not null,
	price decimal(10,2) not null,
	constraint fk_products_grames_products1
		foreign key (product_id) references products (id)
);

create index fk_products_grames_products1_idx
	on products_grames (product_id);

create table roles
(
	id int auto_increment
		primary key,
	name varchar(45) null
);

create table type_grindings
(
	id int auto_increment
		primary key,
	name varchar(45) null,
	constraint name_UNIQUE
		unique (name)
);

create table products_type_grindings
(
	id int auto_increment
		primary key,
	product_id int not null,
	type_grinding_id int not null,
	active tinyint(1) default 1 null,
	constraint fk_products_has_type_grindings_products1
		foreign key (product_id) references products (id),
	constraint fk_products_has_type_grindings_type_grindings1
		foreign key (type_grinding_id) references type_grindings (id)
);

create index fk_products_has_type_grindings_products1_idx
	on products_type_grindings (product_id);

create index fk_products_has_type_grindings_type_grindings1_idx
	on products_type_grindings (type_grinding_id);

create table users
(
	id int auto_increment
		primary key,
	firstName varchar(45) null,
	lastName varchar(45) null,
	email varchar(45) not null,
	password varchar(250) not null,
	role_id int not null,
	image varchar(250) null,
	phone varchar(45) null,
	constraint email_UNIQUE
		unique (email),
	constraint phone_UNIQUE
		unique (phone),
	constraint fk_users_roles1
		foreign key (role_id) references roles (id)
);

create table carts
(
	id int auto_increment
		primary key,
	user_id int not null,
	constraint fk_cart_users1
		foreign key (user_id) references users (id)
);

create index fk_cart_users1_idx
	on carts (user_id);

create table detail_cart
(
	id int auto_increment
		primary key,
	cart_id int not null,
	quantity int null,
	product_grame_id int not null,
	product_type_grinding_id int not null,
	constraint fk_cart_has_products_cart1
		foreign key (cart_id) references carts (id),
	constraint fk_detail_cart_products_grames1
		foreign key (product_grame_id) references products_grames (id),
	constraint fk_detail_cart_products_type_grindings1
		foreign key (product_type_grinding_id) references products_type_grindings (id)
);

create index fk_cart_has_products_cart1_idx
	on detail_cart (cart_id);

create index fk_detail_cart_products_grames1_idx
	on detail_cart (product_grame_id);

create index fk_detail_cart_products_type_grindings1_idx
	on detail_cart (product_type_grinding_id);

create table directions
(
	id int auto_increment
		primary key,
	name varchar(45) not null,
	street varchar(250) not null,
	city varchar(250) null,
	region varchar(250) null,
	country varchar(250) null,
	address_code varchar(250) not null,
	user_id int not null,
	`default` tinyint(1) default 0 not null,
	active tinyint(1) default 1 null,
	constraint fk_directions_users1
		foreign key (user_id) references users (id)
);

create index fk_directions_users1_idx
	on directions (user_id);

create table sales
(
	id int auto_increment
		primary key,
	user_id int not null,
	date datetime null,
	direction_id int not null,
	constraint fk_sales_users1
		foreign key (user_id) references users (id),
	constraint sales_directions__fk_1
		foreign key (direction_id) references directions (id)
);

create table detail_sales
(
	id int auto_increment
		primary key,
	sale_id int not null,
	quantity int null,
	product_grame_id int not null,
	product_type_grinding_id int not null,
	constraint fk_detail_sales_products_grames1
		foreign key (product_grame_id) references products_grames (id),
	constraint fk_detail_sales_products_type_grindings1
		foreign key (product_type_grinding_id) references products_type_grindings (id),
	constraint fk_sales_has_products_sales1
		foreign key (sale_id) references sales (id)
);

create index fk_detail_sales_products_grames1_idx
	on detail_sales (product_grame_id);

create index fk_detail_sales_products_type_grindings1_idx
	on detail_sales (product_type_grinding_id);

create index fk_sales_has_products_sales1_idx
	on detail_sales (sale_id);

create index fk_sales_users1_idx
	on sales (user_id);

create index fk_users_roles1_idx
	on users (role_id);

