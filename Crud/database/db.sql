CREATE DATABASE db_libros;
USE database_libros;

CREATE TABLE usuario(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE usuario 
MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE libros(
    id INT(11) NOT NULL,
    tittle VARCHAR(50) NOT NULL,
    texto VARCHAR(50) NOT NULL,
    fecha VARCHAR(50),
    usuario_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    Constraint fk_user FOREIGN KEY(usuario_id) references usuario(id));

ALTER TABLE usuario 
ADD PRIMARY KEY(ID);

ALTER TABLE libros ADD PRIMARY KEY (id);
ALTER TABLE libros
MODIFY id INT(11) NOT NULL AUTO_INCREMENT;