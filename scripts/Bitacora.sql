-- Se crea la tabla bitacora con registros
CREATE TABLE user_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha_hora DATETIME NOT NULL,
  id_user INT NOT NULL,
  accion VARCHAR(255) NOT NULL,
  descripcion TEXT
);

-- Insertar un usuario en la tabla USER
INSERT INTO USER (registration_date, fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone)
VALUES ('2022-07-08 01:29:54', 4, 'alejandra27@flickr.com', 'Alejandr', 'Camisas', 'TB5dN1F', 1, '9997916982');

-- Obtiene el ID del usuario recién insertado
SET @user_id = LAST_INSERT_ID();

-- Inserta los datos a la tabla Registro 
INSERT INTO user_log (fecha_hora, id_user, accion, descripcion)
VALUES (CURRENT_TIMESTAMP(), @user_id, 'Creación de usuario', CONCAT('Usuario creado'));