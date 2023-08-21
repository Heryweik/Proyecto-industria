
DROP DATABASE IF EXISTS PLAZITANET;

CREATE DATABASE PLAZITANET CHARACTER SET utf8;

USE PLAZITANET;

CREATE TABLE PRODUCT_CATEGORY(
	id_product_category SERIAL PRIMARY KEY,
    var_name VARCHAR(50) NOT NULL COMMENT "Nombre de la categoria del producto"

) COMMENT "Categoria del producto";

CREATE TABLE PRODUCT_STATUS(
	id_product_status SERIAL PRIMARY KEY,
    var_name VARCHAR(50) NOT NULL COMMENT "Nombre del estado del producto"

) COMMENT "Estado del producto o anuncio [Usado, Nuevo]";

CREATE TABLE DEPARTMENT (
	id_department SERIAL PRIMARY KEY,
    var_name VARCHAR(150) NOT NULL COMMENT "Nombre del departamento"

) COMMENT "Ubicación";

CREATE TABLE COMPLAINT_CATEGORY(
	id_complaint_category SERIAL PRIMARY KEY,
    var_name VARCHAR(50) NOT NULL COMMENT "Nombre de la categoria de denuncia"

) COMMENT "CATEGORÍA DE DENUNCIA";

CREATE TABLE USER(
    id_user SERIAL PRIMARY KEY,
    fk_id_department BIGINT UNSIGNED NOT NULL COMMENT "Determina de que departamento es el usuario",
    FOREIGN KEY (fk_id_department) REFERENCES DEPARTMENT(id_department),
    var_code VARCHAR(7) NULL COMMENT "Codigo de recuperacion de credenciales",
    var_email VARCHAR(100) NOT NULL UNIQUE COMMENT "Correo electronico",
    var_name VARCHAR(50) NOT NULL COMMENT "Nombre del Usuario",
    var_lastname VARCHAR(50) NOT NULL COMMENT "Apellido",
    tex_password TEXT NOT NULL COMMENT "Contraseña",
    bit_rol BIT(1) DEFAULT 1 NOT NULL COMMENT "Un rol que identifica que tipo de usuario entra al sistema: 0 Administrador | 1 Usuario Normal",
    bit_status BIT(1) NOT NULL COMMENT "Identifica el estado de usuario: 0 Eliminado | 1 Activo",
    var_phone VARCHAR(10) COMMENT "Numero de telefono"
) COMMENT "Usuarios";

CREATE TABLE PRODUCT(
    id_product SERIAL PRIMARY KEY,
    fk_id_user BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a los usuarios",
    FOREIGN KEY (fk_id_user) REFERENCES USER(id_user),
    
    fk_id_department BIGINT UNSIGNED NOT NULL COMMENT "Determina de que departamento es el articulo",
    FOREIGN KEY (fk_id_department) REFERENCES DEPARTMENT(id_department),
    
    fk_id_product_category BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a la categoria del producto",
    FOREIGN KEY (fk_id_product_category) REFERENCES PRODUCT_CATEGORY(id_product_category)
    ON DELETE CASCADE,
    
    fk_id_product_status BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a el estado del producto",
    FOREIGN KEY (fk_id_product_status) REFERENCES PRODUCT_STATUS(id_product_status),
    
    var_name VARCHAR(150) NOT NULL COMMENT "Nombre del producto",
    int_views BIGINT UNSIGNED NOT NULL COMMENT "Cantidad de vistas del producto",
    text_description TEXT NOT NULL COMMENT "Descripción",
    dou_price DOUBLE NOT NULL COMMENT "Precio del articulo",
    bit_availability BIT(1) NOT NULL COMMENT "Identifica el estado del articulo: 0 No disponible | 1 Disponible",
    publication_date timestamp NOT NULL COMMENT "Fecha de publicacion del articulo",
    expiration_date timestamp NOT NULL COMMENT "Fecha de expiración del articulo"
    

) COMMENT "Anuncios";

CREATE TABLE PHOTOGRAPHS(
	id_photographs SERIAL PRIMARY KEY,
    var_name VARCHAR(150) COMMENT "Nombre del archivo",
    var_extension VARCHAR(10) COMMENT "Extensión del archivo",
    
	fk_id_product BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al producto",
    FOREIGN KEY (fk_id_product) REFERENCES PRODUCT(id_product)
    ON DELETE CASCADE

) COMMENT "FOTOGRAFÍAS";

CREATE TABLE COMMENTARY(
	id_commentary SERIAL PRIMARY KEY,
    
	fk_id_user BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a los usuarios",
    FOREIGN KEY (fk_id_user) REFERENCES USER(id_user),
    
    fk_id_product BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a los productos (Anuncios)",
    FOREIGN KEY (fk_id_product) REFERENCES PRODUCT(id_product)
    ON DELETE CASCADE,
    
    text_contents TEXT NOT NULL COMMENT "Contenido",
    tim_date timestamp NOT NULL COMMENT "Fecha de creación del comentario"

) COMMENT "Comentarios que deja el usuario a algun producto";

CREATE TABLE QUALIFICATION(
	id_QUALIFICATION SERIAL PRIMARY KEY,
    fk_id_user_review BIGINT UNSIGNED NOT NULL COMMENT "Usuario que califica",
    FOREIGN KEY (fk_id_user_review) REFERENCES USER(id_user),
    
    fk_id_user_qualified BIGINT UNSIGNED NOT NULL COMMENT "Usuario calificado",
    FOREIGN KEY (fk_id_user_qualified) REFERENCES USER(id_user),
    
     tin_score TINYINT UNSIGNED NOT NULL COMMENT "Puntuación"
    

) COMMENT "Calificación";

CREATE TABLE COMPLAINT(
	id_COMPLAINT SERIAL PRIMARY KEY,
    fk_id_user BIGINT UNSIGNED NOT NULL COMMENT "Usuario que denuncia",
    FOREIGN KEY (fk_id_user) REFERENCES USER(id_user),
    
    fk_id_user_complaining BIGINT UNSIGNED NOT NULL COMMENT "Usuario denunciado",
    FOREIGN KEY (fk_id_user_complaining) REFERENCES USER(id_user),
    
	fk_id_product BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al producto del que se hizo la denuncia",
    FOREIGN KEY (fk_id_product) REFERENCES PRODUCT(id_product)
    ON DELETE CASCADE,
    
    fk_id_complaint_category BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a la categoria de la denuncia",
    FOREIGN KEY (fk_id_complaint_category) REFERENCES COMPLAINT_CATEGORY(id_complaint_category),
    
    bit_status BIT(1) NOT NULL COMMENT "0 Sin revisar | 1 Aprobada",
    text_description TEXT NOT NULL COMMENT "Descripción",
    tim_date timestamp NOT NULL COMMENT "Fecha de creación de la denuncia"

) COMMENT "Denuncia";

CREATE TABLE CHAT(
	id_chat SERIAL PRIMARY KEY,
    modification_date timestamp NOT NULL COMMENT "Esto almacena la fecha y la hora de publicacion del mensaje",
    fk_id_product BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al producto en el que se abre un chat",
    FOREIGN KEY (fk_id_product) REFERENCES PRODUCT(id_product)
    ON DELETE CASCADE,
    
    fk_id_user_buyer BIGINT UNSIGNED NOT NULL COMMENT "Usuario Comprador",
    FOREIGN KEY (fk_id_user_buyer) REFERENCES USER(id_user),
    
    fk_id_user_seller BIGINT UNSIGNED NOT NULL COMMENT "Usuario Vendedor",
    FOREIGN KEY (fk_id_user_seller) REFERENCES USER(id_user)
    

) COMMENT "CHAT";

CREATE TABLE MESSAGE(
	id_message SERIAL PRIMARY KEY,
    tim_date timestamp NOT NULL COMMENT "Esto almacena la fecha y la hora de publicacion del mensaje",
    bit_status BIT(1) NOT NULL COMMENT "Estado del mensaje: 0 Sin leer | 1 Leido",
    text_contents TEXT NOT NULL COMMENT "Contenido del mensaje",
    
    fk_id_chat BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al chat que pertenece este mensaje",
    FOREIGN KEY (fk_id_chat) REFERENCES CHAT(id_chat)
    ON DELETE CASCADE,
    
    fk_id_user BIGINT UNSIGNED NOT NULL COMMENT "Usuario que escribio el mensaje",
    FOREIGN KEY (fk_id_user) REFERENCES USER(id_user)

) COMMENT "MENSAJES";


CREATE TABLE WISH_LIST(

	fk_id_user BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al Usuario",
	FOREIGN KEY (fk_id_user) REFERENCES USER(id_user),
    
    fk_id_product BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al Producto",
    FOREIGN KEY (fk_id_product) REFERENCES PRODUCT(id_product)
    ON DELETE CASCADE

) COMMENT "LISTA DE DESEOS O FAVORITOS";

-- Crear una llave primaria compuesta con dos llaves foraneas de la tabla WISH_LIST
ALTER TABLE WISH_LIST
	ADD CONSTRAINT pk_wish_list PRIMARY KEY CLUSTERED (fk_id_user, fk_id_product);

CREATE TABLE SUBSCRIPTION(

	fk_id_user BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia al Usuario",
	FOREIGN KEY (fk_id_user) REFERENCES USER(id_user),
    
    fk_id_product_category BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a las categorias",
    FOREIGN KEY (fk_id_product_category) REFERENCES PRODUCT_CATEGORY(id_product_category)
    ON DELETE CASCADE

) COMMENT "SUBSCRIPCIONES A LAS CATEGORIAS";

-- Crear una llave primaria compuesta con dos llaves foraneas de la tabla SUBSCRIPTION
ALTER TABLE SUBSCRIPTION
	ADD CONSTRAINT pk_subscription PRIMARY KEY CLUSTERED (fk_id_user, fk_id_product_category);

