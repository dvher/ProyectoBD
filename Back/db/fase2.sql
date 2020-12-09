--Creación Base

CREATE DATABASE Noxus;

--Creación Tablas

CREATE TABLE Empresa(

	ID_Empresa serial PRIMARY KEY,
	Nombre_Empresa VARCHAR (50) NOT NULL,
	Rut_Empresa VARCHAR(10) NOT NULL

);

CREATE TABLE Persona(

	ID_Persona serial PRIMARY KEY,
	Nombre VARCHAR(50) NOT NULL,
	Apellido VARCHAR(50) NOT NULL,
	Rut VARCHAR(30) NOT NULL,
	Tiene_Deuda BOOLEAN NOT NULL,
	Deuda INT NOT NULL,
	Sexo VARCHAR(10) NOT NULL,
	Arrendatario BOOLEAN NOT NULL

);	

CREATE TABLE Arquitecto (

	Correo_Empresa VARCHAR ( 50 ) PRIMARY KEY,
	ID_Persona INT NOT NULL,
	ID_Empresa INT NOT NULL,
Obras_disenadas INT NOT NULL,
Ano_egreso INT NOT NULL,
FOREIGN KEY (ID_Persona)
REFERENCES Persona (ID_Persona),
FOREIGN KEY (ID_Empresa )
REFERENCES Empresa(ID_Empresa )
);

CREATE TABLE Ingeniero (
	Correo_Empresa VARCHAR (50) PRIMARY KEY,
	ID_Persona INT NOT NULL,
	Obras_Supervisadas INT NOT NULL,
	Ano_egreso INT NOT NULL,
	ID_Empresa INT NOT NULL,
	FOREIGN KEY (ID_Persona)
		REFERENCES Persona (ID_Persona),
	FOREIGN KEY (ID_Empresa)
		REFERENCES Empresa (ID_Empresa)
);

CREATE TABLE Constructor (

	Correo_Empresa VARCHAR(50) PRIMARY KEY,
	ID_Persona INT NOT NULL,
	ID_Empresa INT NOT NULL,
	Obras_construidas INT NOT NULL,
	FOREIGN KEY (ID_Persona)
		REFERENCES Persona (ID_Persona),
	FOREIGN KEY (ID_Empresa)
		REFERENCES Empresa (ID_Empresa)

);

CREATE TABLE Casa (

	ID_Casa serial PRIMARY KEY,
	ID_Empresa INT NOT NULL,
	ID_Persona INT NOT NULL,
	Precio_Arriendo INT NOT NULL,
	Direccion VARCHAR ( 50 ) NOT NULL,
	Tamano INT NOT NULL,
	Segundo_Piso BOOLEAN NOT NULL,
	Numero_de_piezas INT NOT NULL,
	Precio_Compra INT NOT NULL,
	FOREIGN KEY (ID_Empresa)
		REFERENCES Empresa (ID_Empresa),
	FOREIGN KEY (ID_Persona)
		REFERENCES Persona (ID_Persona)

);

CREATE TABLE CasaPersona (

  ID_CasaPersona serial PRIMARY KEY,
  ID_Persona INT NOT NULL,
  ID_Casa INT NOT NULL,
  FOREIGN KEY (ID_Casa)
		REFERENCES Casa (ID_Casa),
  FOREIGN KEY (ID_Persona)
    REFERENCES Persona (ID_Persona)  
    
);

--Inserción en tabla Empresa

INSERT INTO Empresa (ID_Empresa , Nombre_Empresa , Rut_Empresa)
VALUES(12345, 'Soquimich', '12345678-3');

--Inserción en tabla Persona

INSERT INTO Persona ( ID_Persona, Nombre , Apellido , Rut ,Tiene_Deuda , Deuda , Sexo , Arrendatario )
VALUES(22234, 'Martin' , 'NoGutierrez' , '18234687-5' , True , 200 , 'Hombre' , False );

--Inserción en tabla Arquitecto

INSERT INTO Persona (ID_Persona, Nombre, Apellido, Rut, Tiene_Deuda, Deuda, Sexo, Arrendatario)
VALUES (72364, 'Ricardo', 'Milos', '16852534-9', False, 0, 'Hombre', True);

INSERT INTO Arquitecto (Correo_Empresa, ID_Persona,  ID_Empresa, Obras_disenadas, Ano_egreso)
VALUES('bob2@soquimich.cl', 72364, 12345, 12, 2012);

--Inserción en tabla Ingeniero

INSERT INTO Persona (ID_Persona, Nombre, Apellido, Rut, Tiene_Deuda, Deuda, Sexo, Arrendatario)
VALUES ( 646456, 'Camila', 'Flores', '26551832-8', True, 5000, 'Mujer', True);

INSERT INTO Ingeniero (Correo_Empresa, ID_Persona, Obras_supervisadas, Ano_egreso, ID_Empresa)
VALUES ('ing1@soquimich.cl', 646456, 5, 2020, 12345);

--Inserción en tabla Constructor

INSERT INTO Persona (ID_Persona, Nombre, Apellido, Rut, Tiene_Deuda, Deuda, Sexo, Arrendatario)
VALUES (26351, 'Chayanne', 'Figueroa', '20496822-9', True, 10, 'Hombre', True);

INSERT INTO Constructor (Correo_Empresa, ID_Persona,  ID_Empresa, Obras_construidas)
VALUES('chayanne@soquimich.cl', 26351, 12345, 7);

--Inserción en tabla Casa

INSERT INTO Casa ( ID_Casa , ID_Empresa , ID_Persona , Precio_Arriendo , Direccion , Tamano ,  Segundo_Piso , Numero_de_piezas , Precio_Compra )
VALUES ( 23566, 12345 , 22234 , 500 , 'Punta Arenas 222' , 234 , False , 2 ,4500 );

INSERT INTO Casa ( ID_Casa , ID_Empresa , ID_Persona , Precio_Arriendo , Direccion , Tamano ,  Segundo_Piso , Numero_de_piezas , Precio_Compra )
VALUES ( 23566, 12345 , 22234 , 500 , 'Punta Arenas 222' , 234 , False , 2 ,4500 );

--Ejemplos ALTER

ALTER TABLE Casa
ADD Inquilinos;

ALTER TABLE Casa
ALTER COLUMN Inquilinos TYPE VARCHAR(20);

ALTER TABLE Casa
RENAME COLUMN Inquilinos
TO Habitantes;

ALTER TABLE Casa
DROP COLUMN Habitantes;

--Ejemplos UPDATE

UPDATE CASA 
SET Precio_Compra = 7000
WHERE Numero_de_piezas = 2;

UPDATE CASA 
SET Precio_Arriendo = 1000
WHERE Direccion= 'Punta Arenas 222';

--Ejemplos DELETE

INSERT INTO Casa ( ID_Casa , ID_Empresa , ID_Persona , Precio_Arriendo , Direccion , Tamano ,  Segundo_Piso , Numero_de_piezas , Precio_Compra )
VALUES ( 1, 12345 , 22234 , 500 , 'Pio Nono 430' , 234 , True, 3 ,7000 );

DELETE FROM CASA
WHERE ID_Casa = 1;



CREATE OR REPLACE FUNCTION ConsultaUno(id INT) RETURNS INT
LANGUAGE plpgsql
AS $$
    DECLARE 

	    suma INT;

    BEGIN

      SELECT SUM(deuda) INTO suma FROM Persona WHERE ID_Casa = id;

      RETURN suma;
        
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaDos() RETURNS INT
LANGUAGE plpgsql
AS $$
    DECLARE 

	    cantidad INT;
      
    BEGIN

      SELECT COUNT(DISTINCT ID_Persona) INTO cantidad FROM Arquitecto WHERE Ano_egreso = 2010 AND Obras_disenadas >= 42;

      RETURN cantidad;
        
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaTres(fecha INT) returns table( Nombre_Ingeniero VARCHAR(50), Apellido_Ingeniero VARCHAR(50) )
LANGUAGE plpgsql
AS $$
    DECLARE 

	    fecha INT;

    BEGIN

      RETURN QUERY SELECT p.Nombre, p.Apellido FROM Ingeniero AS i , Persona AS p 
        WHERE i.ID_Persona = p.ID_Persona AND i.Ano_egreso - fecha < 5;
        
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaCuatro() RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
    DECLARE 

      cantidad INT;

    BEGIN

      SELECT COUNT(*) INTO cantidad FROM Arquitecto AS a, Constructor AS co, Ingeniero AS i, Casa as ca WHERE (a.ID_Empresa = ca.ID_Empresa AND a.ID_Persona = ca.ID_Persona) OR (co.ID_Empresa = ca.ID_Empresa AND co.ID_Persona = ca.ID_Persona) OR (i.ID_Empresa = ca.ID_Empresa AND i.ID_Persona = ca.ID_Persona);

      IF cantidad != 0 THEN
        RETURN TRUE;
      ELSE
        RETURN FALSE;
      END IF;
        
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaCinco() RETURNS INT
LANGUAGE plpgsql
AS $$
    DECLARE 

	    suma INT;

    BEGIN

      SELECT SUM(Precio_Compra) INTO suma FROM Casa;
      RETURN suma;
        
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaSeis(calle VARCHAR(50)) RETURNS INT
LANGUAGE plpgsql
AS $$
    DECLARE 
      
	    cantidad INT;
      
    BEGIN
       
       SELECT COUNT(*) INTO cantidad FROM Casa WHERE Direccion LIKE CONCAT(calle, '%');
       RETURN cantidad;
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaSiete() RETURNS INT
LANGUAGE plpgsql
AS $$
    DECLARE 

	    n INT;

    BEGIN

   SELECT COUNT(tmp.r) into n
        FROM (
            SELECT c.Segundo_Piso as r, c.Precio_Compra as q, c.Numero_de_piezas as l 
            FROM Casa as c
            WHERE r = TRUE  
            AND q < 70000000
            AND l = 7  
            GROUP BY c.ID_Casa
        ) as tmp;
        
        RETURN n;


    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaOcho(id INT) RETURNS table(Direccion VARCHAR(50))
LANGUAGE plpgsql
AS $$
    BEGIN

       RETURN QUERY SELECT c.Direccion FROM Casa AS c WHERE c.ID_Empresa = id;
        
    END;

$$;

CREATE OR REPLACE FUNCTION ConsultaNueve() RETURNS INT
LANGUAGE plpgsql
AS $$
    DECLARE 

	    n INT;

    BEGIN
    SELECT COUNT( ID_Persona) maximo INTO n
    FROM Casa AS c
    GROUP BY c.ID_Persona
    ORDER BY maximo DESC LIMIT 1;
   
        
        RETURN n;


    END;

$$;
