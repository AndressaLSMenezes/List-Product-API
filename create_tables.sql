CREATE EXTENSION IF NOT EXISTS "id-ossp";

CREATE TABLE IF NOT EXISTS categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id id PRIMARY KEY DEFAULT id_generate_v4(),
    name VARCHAR(200) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
     category_id INTEGER DEFAULT NULL,
     FOREIGN KEY (category_id) REFERENCES categories(id)
);