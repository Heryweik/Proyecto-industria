use plazitanet;
SET GLOBAL log_bin_trust_function_creators = 1; #Para la creacion de finciones deterministas

#funcion que crea un codigo aleatorio dato un tamaño 
DELIMITER $$
CREATE FUNCTION `RandString`(length SMALLINT(3)) RETURNS varchar(100) CHARSET UTF8MB4
begin
    SET @returnStr = '';
    SET @allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopkrstuwxyz';
    SET @i = 0;

    WHILE (@i < length) DO
        SET @returnStr = CONCAT(@returnStr, substring(@allowedChars, FLOOR(Rand() * LENGTH(@allowedChars) + 1), 1));
        SET @i = @i + 1;
    END WHILE;

    RETURN @returnStr;
END$$

#Procedimiento almacenado que actualiza el codigo en la tabla User
DELIMITER $$
create procedure createCode (email_user VARCHAR(100))
BEGIN
    UPDATE user SET var_code = (SELECT RandString(7)) where  var_email = email_user;
	select * from user where var_email = email_user;
END$$

#ejemplo de uso del procedimiento
#Call createCode("joseK@gmail.com");

-- Producto Almacenado 
delimiter //
create  procedure vistaProduc(id int)
BEGIN
update PRODUCT set int_views=(PRODUCT.int_views)+1 where id_product=id; 
end//

## LISTAR COMENTARIOS
DELIMITER &&
CREATE PROCEDURE obtenerComentarios(IN id int)
BEGIN
     SELECT user.var_name, user.var_lastname, commentary.text_contents, commentary.tim_date 
		FROM commentary 
		INNER JOIN user ON user.id_user=commentary.fk_id_user
		WHERE commentary.fk_id_product = id ORDER BY commentary.tim_date DESC;
END&&

##PROMEDIO DE CALIFICACION
DELIMITER &&
CREATE PROCEDURE prom(IN id int)
BEGIN
    SELECT CAST(AVG(tin_score)  AS DECIMAL(10,1)) AS PROMEDIO FROM qualification WHERE fk_id_user_qualified=id;
END&&


-- Producto Almacenado Lista de mensajes
drop procedure if exists listMessage;
delimiter //
create  procedure listMessage(id int,idUser int)
BEGIN
 UPDATE MESSAGE SET bit_status=1 WHERE fk_id_chat = id AND fk_id_user=idUser;
 SELECT date_format(tim_date,'%d/%m/%Y') as dateMessenge,time_format(tim_date,'%H:%i') as hourMessenge, if(bit_status=0,0,1) as bit_status, text_contents, fk_id_user FROM MESSAGE where fk_id_chat=id order by tim_date asc; 
end//

call listMessage(4,1);

-- Otra forma de listar mensajes
/*
delimiter //
create  procedure listMessage2(id int,id2 int)
BEGIN
 SELECT*FROM MESSAGE where fk_id_chat=id and fk_id_user=id2  order by tim_date asc; 
end//

call listMessage2(4,3);
*/


-- Funcion para crear un chat vacio
drop procedure if exists sp_newChat;
delimiter $$
create procedure sp_newChat(id_product BIGINT UNSIGNED, id_user_buyer BIGINT UNSIGNED, id_user_seller BIGINT UNSIGNED)
BEGIN
	DECLARE id BIGINT UNSIGNED;
    DECLARE status TINYINT UNSIGNED;

	SELECT id_chat INTO id FROM CHAT WHERE fk_id_product = id_product AND fk_id_user_buyer = id_user_buyer AND fk_id_user_seller = id_user_seller;
	
    IF id THEN
		SELECT 202 INTO status; 
		SELECT id AS id_chat, status;
    ELSE
		INSERT INTO CHAT (modification_date, fk_id_product, fk_id_user_buyer, fk_id_user_seller) 
			VALUES(CURRENT_TIMESTAMP(),id_product,id_user_buyer,id_user_seller);
		
        SELECT 200 INTO status;
		SELECT last_insert_id() AS id_chat, status;
    END IF;
	
end$$

CALL sp_newChat(101, 1, 3);

-- Mensaje nuevo
drop procedure if exists sp_sendMessage;
delimiter $$
create procedure sp_sendMessage(contents TEXT, id_chat BIGINT UNSIGNED, id_user BIGINT UNSIGNED)
BEGIN
	INSERT INTO MESSAGE(tim_date, bit_status, text_contents, fk_id_chat, fk_id_user) 
		VALUES(CURRENT_TIMESTAMP() ,0 , contents, id_chat, id_user);
	UPDATE CHAT SET modification_date = CURRENT_TIMESTAMP() WHERE CHAT.id_chat = id_chat;
	SELECT date_format(tim_date,'%d/%m/%Y') as dateMessenge,time_format(tim_date,'%H:%i') as hourMessenge,if(bit_status=0,0,1) as bit_status, text_contents, fk_id_user FROM MESSAGE where fk_id_chat=id_chat order by tim_date asc;

end$$

DROP FUNCTION IF EXISTS fn_evaluateName;
delimiter $$
CREATE FUNCTION fn_evaluateName(user_id BIGINT UNSIGNED, buyer_id BIGINT UNSIGNED, seller_id BIGINT UNSIGNED)
	RETURNS VARCHAR(50)
BEGIN
	DECLARE user_name VARCHAR(50);
	IF user_id = buyer_id THEN
		SELECT CONCAT(var_name,' ',var_lastname) INTO user_name FROM USER WHERE id_user = seller_id;
		RETURN user_name;
    ELSE
		SELECT CONCAT(var_name,' ',var_lastname) INTO user_name FROM USER WHERE id_user = buyer_id;
		RETURN user_name;
	END IF;
END$$

DROP FUNCTION IF EXISTS fn_unread_messages;
delimiter $$
CREATE FUNCTION fn_unread_messages(id_chat BIGINT UNSIGNED, id_user BIGINT UNSIGNED)
	RETURNS INTEGER
BEGIN
	DECLARE unread_messages INTEGER;
	SELECT COUNT(*) INTO unread_messages FROM MESSAGE WHERE fk_id_chat = id_chat AND bit_status = 0 AND fk_id_user != id_user;
    RETURN unread_messages;
END$$

DROP FUNCTION IF EXISTS fn_last_message;
delimiter $$
CREATE FUNCTION fn_last_message(id_chat BIGINT UNSIGNED)
	RETURNS TEXT
BEGIN
	DECLARE last_message TEXT;
    SELECT text_contents INTO last_message FROM MESSAGE WHERE fk_id_chat=id_chat ORDER BY MESSAGE.id_message DESC LIMIT 1;
    RETURN last_message;

END$$

DROP FUNCTION IF EXISTS fn_determineRole;
delimiter $$
CREATE FUNCTION fn_determineRole(user_id BIGINT UNSIGNED, buyer_id BIGINT UNSIGNED, seller_id BIGINT UNSIGNED)
	RETURNS VARCHAR(10)
BEGIN
	DECLARE user_rol VARCHAR(10);
	IF user_id = buyer_id THEN
		SELECT "Vendedor" INTO user_rol;
		RETURN user_rol;
    ELSE
		SELECT "Cliente" INTO user_rol;
		RETURN user_rol;
	END IF;
END$$

-- Traer datos de los chats
drop procedure if exists sp_chatData;
delimiter $$
create procedure sp_chatData(id BIGINT UNSIGNED)
BEGIN
	SELECT CHAT.id_chat,(SELECT user.var_name FROM USER where id_user = CHAT.fk_id_user_buyer) AS fk_id_user_buyer,
    (SELECT user.var_name FROM USER where id_user = CHAT.fk_id_user_seller) AS fk_id_user_seller, fn_unread_messages(CHAT.id_chat, USER.id_user) AS no_leidos, fn_last_message(CHAT.id_chat) AS ultimo_mensaje, fn_determineRole(USER.id_user, CHAT.fk_id_user_seller, CHAT.fk_id_user_buyer) AS Rol ,
	fn_evaluateName(USER.id_user, CHAT.fk_id_user_seller, CHAT.fk_id_user_buyer) AS Nombre, CHAT.fk_id_user_buyer AS id_comprador, CHAT.fk_id_user_seller AS id_vendedor,
	CHAT.fk_id_product, PRODUCT.var_name AS Producto, PHOTOGRAPHS.var_name AS Foto
	FROM USER
    INNER JOIN CHAT ON USER.id_user = CHAT.fk_id_user_seller OR USER.id_user = CHAT.fk_id_user_buyer
    INNER JOIN PRODUCT ON PRODUCT.id_product = CHAT.fk_id_product
    INNER JOIN PHOTOGRAPHS ON PHOTOGRAPHS.fk_id_product = PRODUCT.id_product
    where USER.id_user = id
    GROUP BY product.id_product order by CHAT.modification_date DESC;
end$$

##BORRAR IMAGENES EN EDICION DE PRODUCTO

DELIMITER //
CREATE PROCEDURE deletePhotos(IN nombre VARCHAR(200))
BEGIN
	DELETE p.* FROM photographs p WHERE id_photographs IN
		(SELECT id_photographs FROM 
				(SELECT id_photographs FROM photographs WHERE var_name=nombre)x);
END //


delimiter //
create  procedure listDenuncias12(id int)
BEGIN
 SELECT*FROM COMPLAINT where fk_id_user_complaining=id order by tim_date asc;
end//

call listDenuncias12(2);



