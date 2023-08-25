
USE PLAZITANET;
#select * from user;
INSERT INTO DEPARTMENT(var_name) VALUES('Atlántida');
INSERT INTO DEPARTMENT(var_name) VALUES('Colón');
INSERT INTO DEPARTMENT(var_name) VALUES('Comayagua');
INSERT INTO DEPARTMENT(var_name) VALUES('Copán');
INSERT INTO DEPARTMENT(var_name) VALUES('Cortés');
INSERT INTO DEPARTMENT(var_name) VALUES('Choluteca');
INSERT INTO DEPARTMENT(var_name) VALUES('El Paraíso');
INSERT INTO DEPARTMENT(var_name) VALUES('Francisco Morazán');
INSERT INTO DEPARTMENT(var_name) VALUES('Gracias a Dios');
INSERT INTO DEPARTMENT(var_name) VALUES('Intibucá');
INSERT INTO DEPARTMENT(var_name) VALUES('Islas de la Bahía');
INSERT INTO DEPARTMENT(var_name) VALUES('La Paz');
INSERT INTO DEPARTMENT(var_name) VALUES('Lempira');
INSERT INTO DEPARTMENT(var_name) VALUES('Ocotepeque');
INSERT INTO DEPARTMENT(var_name) VALUES('Olancho');
INSERT INTO DEPARTMENT(var_name) VALUES('Santa Bárbara');
INSERT INTO DEPARTMENT(var_name) VALUES('Valle');
INSERT INTO DEPARTMENT(var_name) VALUES('Yoro');

INSERT INTO PRODUCT_STATUS(var_name) VALUES('Nuevo');
INSERT INTO PRODUCT_STATUS(var_name) VALUES('Usado');
    
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Hogar');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Futuros Padres');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Mascotas');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Inmuebles');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Vehiculos');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Moda');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Electronica');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Servicios');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Entretenimiento');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Utiles');


INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Discriminación");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Estafa");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Producto para adultos");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Producto o material peligroso");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Trata de personas");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Servicios sexuales");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Drogas");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Productos defectuosos");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Productos robados");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Armas");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Ningún artículo a la venta");
INSERT INTO COMPLAINT_CATEGORY(var_name) VALUES("Otro");



-- INSERTAR EL USUARIO ADMINISTRADOR CORREO: admin@admin.com CONTRASEÑA: 1234567

INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(8, 'admin@admin.com', 'admin', 'plazitanet', '1234567', 0, 1, '99000000');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(2, 'mariadb@gmail.com', 'Maria', 'Gonzales', 'Hola1234//', 1, 1, '89676545');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(1, 'joseK@gmail.com', 'Jose', 'Kalix', 'joseK-123', 1, 1, '56243142');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(15, 'kevin_manuel@hotmail.com', 'Kevin', 'Manuel', 'KevinManuel1/', 1, 1, '98786756');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(7, 'delmerespinal2@gmail.com', 'Delmer', 'Espinal', 'Hola123.', 1, 1, '98776654');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(13, 'guillermodiaz@gmail.com', 'Guillermo', 'Diaz', 'Hello/777', 1, 1, '33445577');


INSERT INTO PRODUCT(fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (1,1,7,1,"Disco duro externo portátil",1,"250 GB de almacenamiento y 5 meses de garantia",1024,1,"2022-07-02","2022-08-12");
INSERT INTO PRODUCT(fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (1,1,7,1,"Disco duro externo portátil",1,"480 GB de almacenamiento y 5 meses de garantia",2024,1,"2022-07-06","2022-08-15");
INSERT INTO PRODUCT(fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (1,2,7,1,"Disco duro externo portátil",1,"1 TB de almacenamiento y 5 meses de garantia",4024,1,"2022-07-01","2022-07-14");
INSERT INTO PRODUCT(fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (3,1,7,1,"Disco duro externo portátil",1,"1.5 TB de almacenamiento y 5 meses de garantia",6024,1,"2022-07-03","2022-08-16");

INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product) VALUES("iJhsg37391jksnjiBnGG.jpg","jpg",1);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product) VALUES("ISJS9sjsiIjn9hJKJ98dG.jpg","jpg",2);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product) VALUES("Jhus73J78UUUJmk8Jk.jpg","jpg",3);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product) VALUES("jioIHU83Hi8Uj7hsiIOI.jpg","jpg",4);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product) VALUES("JS8Gsg3782y72hJnOG.jpg","jpg",4);