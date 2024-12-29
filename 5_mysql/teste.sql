-- BANCO
SHOW DATABASES;
DROP DATABASE 1_sistemaDeCadastro;
CREATE DATABASE 1_sistemaDeCadastro;

USE DATABASE 1_sistemaDeCadastro;

-- TABELA
SHOW TABLES;
DROP TABLE USUARIO;
CREATE TABLE USUARIO(
    nome    VARCHAR(50) not null,
    email   VARCHAR(50) not null,
    idade   INT         not null
);

-- MÉTODO INSERT
INSERT INTO USUARIO (nome, email, idade)
    VALUES ('Demétrio Atra', 'demetrio.atra@teste', 20);
INSERT INTO USUARIO (nome, email, idade)
    VALUES ('Carolina Braz', 'carolina.braz@teste', 20);
INSERT INTO USUARIO (nome, email, idade)
    VALUES ('João Pedro', 'joao.pedro@teste', 10);

-- MÉTODO SELECT
SELECT * FROM USUARIO;
SELECT * FROM USUARIO WHERE idade>=20;

-- MÉTODO UPDATE
UPDATE USUARIO SET idade=24 where idade=20;

-- MÉTODO DELETE
DELETE FROM USUARIO WHERE nome='João Pedro';
