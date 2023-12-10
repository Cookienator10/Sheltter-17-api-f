CREATE DATABASE db_sheltter_17_ts;
USE db_sheltter_17_ts;

CREATE TABLE posts  (
    id_perro INT (2) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    raza TEXT NOT NULL,
    edad INT NOT NULL,
    hora_llegada TIMESTAMP
);

 DESCRIBE posts;