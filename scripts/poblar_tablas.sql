USE PLAZITANET;

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(101,6,15,7,2,"Seagate ST2000DM006","Series:Barracuda,Type:7200RPM,Capacity:2TB,Cache:64MB",1470.93,447,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("1.jpg","jpg",101);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(102,3,12,7,2,"Gigabyte X299 AORUS Gaming 3","CPU:LGA2066,Form Factor:ATX,RAM Slots:8,Max RAM:128GB",2270.48,133,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("2.jpg","jpg",102);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(103,5,5,7,2,"Intel Xeon E5-2698 V3 (OEM/Tray)","Speed:2.3GHz,Cores:16,TDP:135W",2035.18,354,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("3.jpg","jpg",103);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(104,5,18,7,2,"Kingston SV300S37A/120G","Series:SSDNow V300 Series,Type:SSD,Capacity:120GB,Cache:N/A",450.93,308,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("4.jpg","jpg",104);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(105,3,4,7,2,"Audífonos Xiaomi","Los audífonos True Wireless Redmi Buds 3 Lite de Xiaomi tienen reconocimiento automático de dispositivos y conexiones inalámbricas simples.",700,446,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("5.jpg","jpg",105);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(106,2,5,1,1,"Organizador","Quattro Organizador para tocador QTTORG004 3 niveles",1350.0,162,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("6.jpg","jpg",106);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(107,2,11,1,1,"Juegos de ollas","Hamilton Beach Batería de cocina HCW601A 8 Piezas",3397.0,252,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("7.jpg","jpg",107);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(108,6,17,1,2,"Sarten","Hamilton Beach Sartén de Aluminio PD-HBW106 Antiadherente",597.0,390,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("8.jpg","jpg",108);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(109,5,18,1,2,"Quattro Cojín","QTTCS037 / Rayado",400.0,267,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("9.jpg","jpg",109);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(110,5,17,1,2,"Tetera","Mr. Coffee Tetera Claredale / 10807401 / 2.08 L",467.0,382,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("10.jpg","jpg",110);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(111,5,7,2,2,"Pañales Huggies","Pañales hechos con fibras naturales, suaves como algodón y sin quimicos",577.9,100,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("11.jpg","jpg",111);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(112,5,13,2,1,"Leche En Polvo","Leche En Polvo Arla Milex Kinder Descremada 800 Gr",218.9,315,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("12.jpg","jpg",112);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(113,2,9,2,2,"Ropa recien nacido","Estuche regalo recién nacido con 3 prendas - verde claro liso con motivos",1000,457,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13.jpg","jpg",113);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_1.jpg","jpg",113);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_2.jpg","jpg",113);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_3.jpg","jpg",113);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(114,5,9,2,1,"Biberón","Philips AVENT Biberón anticólico con ventilación sin aire, 4 onzas, 1 paquete, transparente",250,406,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("14.jpg","jpg",114);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(115,2,5,2,1,"Carriola","Graco Coche LiteRider Daphne con portabebé / 2075293 / Respaldo ajustable",6847.0,372,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("15.jpg","jpg",115);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(116,2,15,3,2,"Collar para perro","Multiple Colors, Soft Padded Breathable Nylon Pet Collar, Adjustable Martingale Collar Increased Control",250.0,249,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("16.jpg","jpg",116);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(117,6,9,3,1,"Casa para perros","Ram Quality Products Innovadora casa para mascotas al aire libre grande impermeable",2700.0,351,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("17.jpg","jpg",117);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(118,6,14,3,1,"Jaula para aves","Yaheetech Jaula de pájaros de techo abierto con ruedas de 57 pulgadas para loros de tamaño medio",2500,480,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("18.jpg","jpg",118);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(119,5,16,3,1,"Caja de arena","Cajas de arena para gatos autolimpiables automáticas originales",1500,302,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("19.jpg","jpg",119);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(120,4,3,3,2,"Acuario para peces","Marineland ML90609 Retrato Acuario Kit, 5 galones",1600,218,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("20.jpg","jpg",120);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(121,3,10,4,1,"Decibal Mueble de cocina","Con 4 diferentes estantes para organizar tus utensilios de cocina.",3497.0,161,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("21.jpg","jpg",121);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(122,6,1,4,1,"Dida Mueble de Cocina","fabricado en un clásico color café con estilo contemporáneo; Este chinero de 3 cuerpos, 3 patas inferiores y 3 patas superiores con vidrio",8497,359,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("22.jpg","jpg",122);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(123,6,4,4,1,"Quattro Mueble multifunción","Posee elegante diseño en colores blanco y nogal, este versátil mueble cuenta con 3 estantes y un perchero te permitirá bien ser utilizado para tus prendas de ropa o para colocar tus pertenecías o adornos.",1697,420,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("23.jpg","jpg",123);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(124,2,8,4,2,"Commodity Sillón Reclinable","Diseño Reclinable, con tejido antiderrames, cuero sintetico. Comprá desde la comodidad de tu casa a un clic.",7000,142,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("24.jpg","jpg",124);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(125,5,5,4,1,"Silla de oficina","Ergonómica de malla con ruedas, silla de estudio de altura ajustable para estudiantes, adolescentes, hombres y mujeres, para dormitorio, hogar, oficina, color negro.",540,434,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("25.jpg","jpg",125);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(126,5,10,5,2,"Camioneta kia sorento 2014","Tres filas de asiento de tela, Motor 2.4, 4 cilindros",300000,166,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("26.jpg","jpg",126);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(127,2,10,5,1,"Honda Recon 250","Honda recon motor 250 Año 2006, Papeles en regla, Llantas nuevas, Parrillas en ambos lados, Modificada, a Semi automática, Matrícula al día",100000,426,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("27.jpg","jpg",127);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(128,4,14,5,1,"Mitsubishi eclipse","Automático caja al 100 , Año 99, Motor al 100 ",123456,436,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("28.jpg","jpg",128);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(129,2,10,5,1,"Moto Génesis 250","todo en regla Con rines de magnesio con llantas de goma impunchable",24000,3,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("29.jpg","jpg",129);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(130,6,17,5,1,"Casco redondo DOT Brisera","polarisada Mate y brillo V. Colores",1300,204,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("30.jpg","jpg",130);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(131,6,1,6,2,"Cardigan Dama","Color: LT.GREEN",325,249,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("31.jpg","jpg",131);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(132,3,11,6,1,"Polo Caballero","Colores: ROYAL BLUE,  GREEN",285,371,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("32.jpg","jpg",132);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("32_1.jpg","jpg",132);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(133,5,1,6,1,"Taco de futbol Nike","Mercurial Superfly 8",1700,213,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("33.jpg","jpg",133);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(134,2,4,6,1,"Pañoleta","Tela de Cachemira Suave",125,494,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("34.jpg","jpg",134);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(135,6,11,6,2,"Camiseta Messi","Camiseta Stadium de la 1ª equipación del PSG",2500,438,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("35.jpg","jpg",135);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(136,6,10,8,2,"ELECTRICISTA LAS 24 HORAS","Miraflores, San Isidro,Surco,San Borja, Barranco,La Molina Surquillo,Lince,Pueblo Libre,San Miguel,Magdalena.",1500,271,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("36.jpg","jpg",136);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(137,3,6,8,2,"Carpintería & Melamines","Precios de fabrica, misma calidad y a tu medida. Escritorios modernos, minimalistas y funcionales",3000,327,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("37.jpg","jpg",137);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(138,3,8,8,2,"Pintamos casas","Gastar en pintar ya sea tu interior o exterior siempre sera una buena inversion",2000,389,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("38.jpg","jpg",138);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(139,6,2,8,2,"Clases de guitarra","Principiantes, intermedios, avanzados, Interpretación, Teoría Musical, Estilos Variados, Lectura Musical",1200,401,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("39.jpg","jpg",139);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(140,3,6,8,1,"Car Wash To Go","Lavado de autos, te lavamos el motor a presión",500,122,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("40.jpg","jpg",140);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(141,2,2,9,2,"Don Quijote de la Mancha","Nominada por los estadounidenses como una de las 100 mejores novelas en la serie de PBS The Great American Read",350,83,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("41.jpg","jpg",141);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(142,3,11,9,2,"Consola RetroNes","HDMI de 821 juegos, Envíos a todo el País",1300,83,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("42.jpg","jpg",142);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(143,3,8,9,1,"Control de xbox","Xbox Series X-S Inalámbrico",1200,105,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("43.jpg","jpg",143);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(144,5,5,9,2,"Kindle Paperwhite","(8 GB): ahora con una pantalla de 6.8” y luz cálida ajustable, con anuncios",4200,313,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("44.jpg","jpg",144);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(145,2,10,9,2,"LEGO Star Wars","Y-Wing Microfighter 75162 - Kit de construcción",600,332,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("45.jpg","jpg",145);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(146,2,4,10,1,"Mochila True Rider","Diseñada para ajustarse al cuerpo del conductor para mayor estabilidad.",736,495,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("46.jpg","jpg",146);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(147,2,4,10,2,"Libretas personalizadas","Puede personalizar su libreta como más le guste",250,240,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("47.jpg","jpg",147);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(148,4,13,10,2,"Regla T","Ludwig Precision Regla T de 12 a 48 pulgadas resistente de aluminio, 24 - pulgadas",600,311,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("48.jpg","jpg",148);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(149,3,15,10,2,"Colores Faber-Castell","Faber-Castell World Colors Ecopencils, 27 unidades, lápices de colores diversos para niños",200,123,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("49.jpg","jpg",149);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(150,4,3,10,1,"Lápiz Tinta","Lápiz Tinta con Stylus, Colores Disponibles: Negro, Plateado, Azul, Verde Claro, Verde Oscuro y Rojo",10,98,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("50.jpg","jpg",150);


#======================================= llenado 2 =================================================================

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(151,2,1,7,2,"Hp Deskjet 2375","Multifuncional Hp Deskjet 2375, Inkjet Cartucho, USB, Tintas 653-667",1232.03,447,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("c.jpg","jpg",151);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(152,2,1,7,2,"Epson Powerlite e10","Tecnología 3LCD Resolución XGA 3600 Lumenes",21170.48,133,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("d1.jpg","jpg",152);
    INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("d2.jpg","jpg",152);
    INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("d3.jpg","jpg",152);
    INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("d4.jpg","jpg",152);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(153,2,1,7,2,"TV Samsung Led 43″ 4K UHD","Resolución 3,840 x 2,160, Motor de imágenes Procesador Crystal 4K, PQI 2100, HDR, RHDR 10+Soporte, Gran contraste, Q-Symphony ,Salida de sonido (RMS) 20W",12990,304,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("f1.jpg","jpg",153);
    INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("f2.jpg","jpg",153);
    INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("f3.jpg","jpg",153);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(154,2,1,7,2,"Audifonos xtech inalambricos","Audifono Xtech 3.5 C/Microfono InalambricoRosa/MoradoCtrol VolumenLed Xth-650",616.93,108,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("e.jpg","jpg",154);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(155,2,1,7,2,"HP 15pulg I3-8Gb-256Gb Ssd","8GB de Ram, 256 GB SSD, 14 Pulgadas, Windows 10 H",16500,206,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("g1.png","png",155);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(156,2,5,1,1,"Organizador","Quattro Organizador para tocador QTTORG004 3 niveles",1350.0,162,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("6.jpg","jpg",156);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(157,2,11,1,1,"Juegos de ollas","Hamilton Beach Batería de cocina HCW601A 8 Piezas",3397.0,252,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("7.jpg","jpg",157);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(158,6,17,1,2,"Sarten","Hamilton Beach Sartén de Aluminio PD-HBW106 Antiadherente",597.0,390,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("8.jpg","jpg",158);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(159,5,18,1,2,"Quattro Cojín","QTTCS037 / Rayado",400.0,267,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("9.jpg","jpg",159);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(160,5,17,1,2,"Tetera","Mr. Coffee Tetera Claredale / 10807401 / 2.08 L",467.0,382,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("10.jpg","jpg",160);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(161,5,7,2,2,"Pañales Huggies","Pañales hechos con fibras naturales, suaves como algodón y sin quimicos",577.9,100,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("11.jpg","jpg",161);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(162,5,13,2,1,"Leche En Polvo","Leche En Polvo Arla Milex Kinder Descremada 800 Gr",218.9,315,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("12.jpg","jpg",162);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(163,2,9,2,2,"Ropa recien nacido","Estuche regalo recién nacido con 3 prendas - verde claro liso con motivos",1000,457,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13.jpg","jpg",163);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_1.jpg","jpg",163);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_2.jpg","jpg",163);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_3.jpg","jpg",163);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(164,5,9,2,1,"Biberón","Philips AVENT Biberón anticólico con ventilación sin aire, 4 onzas, 1 paquete, transparente",250,406,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("14.jpg","jpg",164);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(165,2,5,2,1,"Carriola","Graco Coche LiteRider Daphne con portabebé / 2075293 / Respaldo ajustable",6847.0,372,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("15.jpg","jpg",165);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(166,2,15,3,2,"Collar para perro","Multiple Colors, Soft Padded Breathable Nylon Pet Collar, Adjustable Martingale Collar Increased Control",250.0,249,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("16.jpg","jpg",166);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(167,6,9,3,1,"Casa para perros","Ram Quality Products Innovadora casa para mascotas al aire libre grande impermeable",2700.0,351,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("17.jpg","jpg",167);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(168,6,14,3,1,"Jaula para aves","Yaheetech Jaula de pájaros de techo abierto con ruedas de 57 pulgadas para loros de tamaño medio",2500,480,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("18.jpg","jpg",168);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(169,5,16,3,1,"Caja de arena","Cajas de arena para gatos autolimpiables automáticas originales",1500,302,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("19.jpg","jpg",169);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(170,4,3,3,2,"Acuario para peces","Marineland ML90609 Retrato Acuario Kit, 5 galones",1600,218,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("20.jpg","jpg",170);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(171,3,10,4,1,"Decibal Mueble de cocina","Con 4 diferentes estantes para organizar tus utensilios de cocina.",3497.0,161,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("21.jpg","jpg",171);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(172,6,1,4,1,"Dida Mueble de Cocina","fabricado en un clásico color café con estilo contemporáneo; Este chinero de 3 cuerpos, 3 patas inferiores y 3 patas superiores con vidrio",8497,359,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("22.jpg","jpg",172);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(173,6,4,4,1,"Quattro Mueble multifunción","Posee elegante diseño en colores blanco y nogal, este versátil mueble cuenta con 3 estantes y un perchero te permitirá bien ser utilizado para tus prendas de ropa o para colocar tus pertenecías o adornos.",1697,420,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("23.jpg","jpg",173);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(174,2,8,4,2,"Commodity Sillón Reclinable","Diseño Reclinable, con tejido antiderrames, cuero sintetico. Comprá desde la comodidad de tu casa a un clic.",7000,142,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("24.jpg","jpg",174);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(175,5,5,4,1,"Silla de oficina","Ergonómica de malla con ruedas, silla de estudio de altura ajustable para estudiantes, adolescentes, hombres y mujeres, para dormitorio, hogar, oficina, color negro.",540,434,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("25.jpg","jpg",175);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(176,5,10,5,2,"Camioneta kia sorento 2014","Tres filas de asiento de tela, Motor 2.4, 4 cilindros",300000,166,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("26.jpg","jpg",176);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(177,2,10,5,1,"Honda Recon 250","Honda recon motor 250 Año 2006, Papeles en regla, Llantas nuevas, Parrillas en ambos lados, Modificada, a Semi automática, Matrícula al día",100000,426,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("27.jpg","jpg",177);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(178,4,14,5,1,"Mitsubishi eclipse","Automático caja al 100 , Año 99, Motor al 100 ",123456,436,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("28.jpg","jpg",178);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(179,2,10,5,1,"Moto Génesis 250","todo en regla Con rines de magnesio con llantas de goma impunchable",24000,3,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("29.jpg","jpg",179);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(180,6,17,5,1,"Casco redondo DOT Brisera","polarisada Mate y brillo V. Colores",1300,204,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("30.jpg","jpg",180);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(181,6,1,6,2,"Cardigan Dama","Color: LT.GREEN",325,249,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("31.jpg","jpg",181);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(182,3,11,6,1,"Polo Caballero","Colores: ROYAL BLUE,  GREEN",285,371,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("32.jpg","jpg",182);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("32_1.jpg","jpg",182);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(183,5,1,6,1,"Taco de futbol Nike","Mercurial Superfly 8",1700,213,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("33.jpg","jpg",183);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(184,2,4,6,1,"Pañoleta","Tela de Cachemira Suave",125,494,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("34.jpg","jpg",184);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(185,6,11,6,2,"Camiseta Messi","Camiseta Stadium de la 1ª equipación del PSG",2500,438,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("35.jpg","jpg",185);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(186,6,10,8,2,"ELECTRICISTA LAS 24 HORAS","Miraflores, San Isidro,Surco,San Borja, Barranco,La Molina Surquillo,Lince,Pueblo Libre,San Miguel,Magdalena.",1500,271,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("36.jpg","jpg",186);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(187,3,6,8,2,"Carpintería & Melamines","Precios de fabrica, misma calidad y a tu medida. Escritorios modernos, minimalistas y funcionales",3000,327,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("37.jpg","jpg",187);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(188,3,8,8,2,"Pintamos casas","Gastar en pintar ya sea tu interior o exterior siempre sera una buena inversion",2000,389,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("38.jpg","jpg",188);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(189,6,2,8,2,"Clases de guitarra","Principiantes, intermedios, avanzados, Interpretación, Teoría Musical, Estilos Variados, Lectura Musical",1200,401,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("39.jpg","jpg",189);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(190,3,6,8,1,"Car Wash To Go","Lavado de autos, te lavamos el motor a presión",500,122,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("40.jpg","jpg",190);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(191,2,2,9,2,"Don Quijote de la Mancha","Nominada por los estadounidenses como una de las 100 mejores novelas en la serie de PBS The Great American Read",350,83,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("41.jpg","jpg",191);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(192,3,11,9,2,"Consola RetroNes","HDMI de 821 juegos, Envíos a todo el País",1300,83,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("42.jpg","jpg",192);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(193,3,8,9,1,"Control de xbox","Xbox Series X-S Inalámbrico",1200,105,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("43.jpg","jpg",193);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(194,5,5,9,2,"Kindle Paperwhite","(8 GB): ahora con una pantalla de 6.8” y luz cálida ajustable, con anuncios",4200,313,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("44.jpg","jpg",194);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(195,2,10,9,2,"LEGO Star Wars","Y-Wing Microfighter 75162 - Kit de construcción",600,332,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("45.jpg","jpg",195);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(196,2,4,10,1,"Mochila True Rider","Diseñada para ajustarse al cuerpo del conductor para mayor estabilidad.",736,495,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("46.jpg","jpg",196);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(197,2,4,10,2,"Libretas personalizadas","Puede personalizar su libreta como más le guste",250,240,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("47.jpg","jpg",197);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(198,4,13,10,2,"Regla T","Ludwig Precision Regla T de 12 a 48 pulgadas resistente de aluminio, 24 - pulgadas",600,311,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("48.jpg","jpg",198);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(199,3,15,10,2,"Colores Faber-Castell","Faber-Castell World Colors Ecopencils, 27 unidades, lápices de colores diversos para niños",200,123,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("49.jpg","jpg",199);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(200,4,3,10,1,"Lápiz Tinta","Lápiz Tinta con Stylus, Colores Disponibles: Negro, Plateado, Azul, Verde Claro, Verde Oscuro y Rojo",10,98,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("50.jpg","jpg",200);
    
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (16, 'vbiggen0@jigsy.com', 'Vida', 'Biggen', 'mgtjRstOYaCq', 1, '2244556288');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (16, 'iselwyne1@ameblo.jp', 'Inessa', 'Selwyne', 'WkhJdSvZWg', 1, '7385435194');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (9, 'tgraber2@cyberchimps.com', 'Thaddeus', 'Graber', 'pS34D2QV', 1, '3344117981');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (1, 'fdeatta3@ask.com', 'Freddi', 'De Atta', 'LmnA0Ym', 1, '6582367845');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (13, 'ffarnon4@nature.com', 'Floyd', 'Farnon', 'x6wxkGSW', 1, '6435613818');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (12, 'cbirchill5@list-manage.com', 'Colene', 'Birchill', 'SctHZ2kcY', 1, '4596380194');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (3, 'rbourgourd6@technorati.com', 'Rowena', 'Bourgourd', 'bGUhK4SeG', 1, '7689958345');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (13, 'bbrixham7@homestead.com', 'Beau', 'Brixham', 'M1f6xk', 1, '9499911393');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (11, 'ecorrao8@nbcnews.com', 'Elwyn', 'Corrao', 'Ghg05n7dNswz', 1, '1669930402');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (8, 'flyster9@cornell.edu', 'Fremont', 'Lyster', 'vYeihRx3p', 1, '8034482102');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (10, 'swissona@apple.com', 'Stace', 'Wisson', 'he1dY5LNQiU', 1, '5733867229');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (7, 'cdowlingb@gravatar.com', 'Chaddy', 'Dowling', 'IJIwfBtV', 1, '5924362470');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (15, 'gsalmondc@wp.com', 'Galen', 'Salmond', 'eRkIIG', 1, '2104583754');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (11, 'ekemelld@hexun.com', 'Edita', 'Kemell', 'wxQ9hoK44Rl', 1, '5438240906');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (9, 'dpechane@webnode.com', 'Debbi', 'Pechan', 'GAQIlE159fFs', 1, '8549327334');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (14, 'ccondyf@slideshare.net', 'Coletta', 'Condy', 'XkSnDCx2', 1, '2452140082');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (4, 'bartissg@ezinearticles.com', 'Brigid', 'Artiss', 'UQdmPl24I', 1, '9166087642');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (2, 'chartburnh@noaa.gov', 'Cristen', 'Hartburn', 'wVPOmQiL0', 1, '3502378391');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (14, 'minklesi@xrea.com', 'Melicent', 'Inkles', '5Qh7AtZKB', 1, '1815422938');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (18, 'lpennycockj@i2i.jp', 'Lalo', 'Pennycock', 'TrDCGAJHzs', 1, '1827202751');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (10, 'kcreerk@discovery.com', 'Kristan', 'Creer', 'QRWRQAOy', 1, '6301341018');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (6, 'jlynasl@360.cn', 'Janeen', 'Lynas', 'xJtYSouNOy', 1, '7013095052');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (16, 'fcraighillm@amazon.co.jp', 'Farr', 'Craighill', 'Ut2bEkI', 1, '8304231279');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (11, 'kcorwinn@dion.ne.jp', 'Keir', 'Corwin', 'DL1Xi1', 1, '8796688079');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (2, 'hnevinso@tmall.com', 'Hermy', 'Nevins', 'n6Yqwk2', 1, '7247379180');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (15, 'lcleerep@skype.com', 'Loise', 'Cleere', 'dOb30T', 1, '5844843151');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (8, 'xgammillq@businessinsider.com', 'Xena', 'Gammill', 'fzTpBthTPe1', 1, '7013332731');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (3, 'hshintonr@goodreads.com', 'Hans', 'Shinton', 'xR7pjz0VE81s', 1, '9592348421');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (1, 'tsteffans@paypal.com', 'Tine', 'Steffan', 'vg95Isfyk', 1, '3216945923');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (3, 'szanazzit@google.ru', 'Shae', 'Zanazzi', 'vtQrT7B', 1, '8909972273');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (11, 'mcorradeschiu@free.fr', 'Mattie', 'Corradeschi', '84PmMWN', 1, '4724796740');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (4, 'ewalrondv@discovery.com', 'Eachelle', 'Walrond', 'gNgrkckf', 1, '2982891162');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (10, 'msheeresw@studiopress.com', 'Milena', 'Sheeres', '6fRcTY4X06', 1, '4191505911');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (10, 'akeerix@fotki.com', 'Antony', 'Keeri', 'PCWTEc', 1, '9103090190');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (13, 'clamzedy@pcworld.com', 'Claudelle', 'Lamzed', 'D3YpMsZe', 1, '6879121441');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (1, 'lpenticootz@google.co.uk', 'Lamond', 'Penticoot', '3vUsoCxN', 1, '6375327238');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (13, 'zcotsford10@feedburner.com', 'Zared', 'Cotsford', 'I68MSQA', 1, '3535547147');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (6, 'bputman11@nsw.gov.au', 'Burnaby', 'Putman', 'kKyJyG8i1', 1, '8862094794');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (8, 'nditchburn12@furl.net', 'Nick', 'Ditchburn', 'rQS2R3fcZNB', 1, '1533099410');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (7, 'glatliff13@accuweather.com', 'Gibb', 'Latliff', 'Hlxr0Uq', 1, '4454279427');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (1, 'mlabbett14@blogspot.com', 'Marie-ann', 'Labbett', 'ZGBNkT', 1, '6658025373');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (9, 'mgirard15@bloglines.com', 'Marna', 'Girard', 'zurkIlt', 1, '7149483265');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (7, 'jjerg16@hp.com', 'Joya', 'Jerg', 'kryQnuHq', 1, '7491492556');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (7, 'ntaveriner17@weebly.com', 'Nilson', 'Taveriner', 'RDcB2xi', 1, '7932450394');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (17, 'lschober18@dmoz.org', 'Lem', 'Schober', '68eWSjXwVj', 1, '4135934098');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (16, 'mclixby19@google.fr', 'Maison', 'Clixby', 'JZeT6dMb', 1, '5455931420');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (7, 'sscogin1a@mapy.cz', 'Skip', 'Scogin', 'Wve0BEI', 1, '7081049987');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (15, 'yrutt1b@tripod.com', 'Yule', 'Rutt', 'YP6BZ2L', 1, '5641987710');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (10, 'sgogay1c@home.pl', 'Serene', 'Gogay', 'Zk0FhFCg', 1, '5267996872');
insert into USER (fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone) values (14, 'jterbruggen1d@java.com', 'Johnath', 'Terbruggen', 'D0gXB1do26Vb', 1, '7989053743');

INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =108), 46, 108, 7, 0, 'Disfrutamos muchísimo la primera semana. Sin embargo, después de eso experimentamos una serie de problemas.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =159), 33, 159, 9, 0, 'Lamento decir que me decepcionó mucho', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =132), 34, 132, 6, 0, 'Debemos insistir en un reemplazo inmediato/reembolso completo.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =124), 23, 124, 3, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =165), 41, 165, 4, 0, 'En vista de las muchas formas en que no coincidía con las afirmaciones hechas en su publicidad,...', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =145), 39, 145, 11, 0, 'Para empeorar las cosas, es una estafa', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =140), 10, 140, 1, 0, 'Debemos insistir en un reemplazo inmediato/reembolso completo.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =104), 26, 104, 12, 0, 'creo que tengo derecho a un reemplazo', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =121), 39, 121, 12, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =179), 13, 179, 9, 0, 'En primer lugar me falto el respeto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =171), 35, 171, 6, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =166), 39, 166, 5, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =164), 23, 164, 8, 0, 'también fue inaceptable', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =196), 18, 196, 12, 0, 'Estaría agradecido si usted hace algo al respecto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =166), 29, 166, 3, 0, '¿Podría hacer arreglos para que reciba un nuevo?', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =115), 15, 115, 3, 0, 'No hay nada a la venta, No solo pero tambien es molesto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =105), 14, 105, 4, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =180), 12, 180, 8, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =165), 9, 165, 6, 0, 'Lamento decir que me decepcionó mucho', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =108), 28, 108, 12, 0, 'no tendré más remedio que cancelar mi pedido.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =109), 28, 109, 7, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =195), 11, 195, 8, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =131), 45, 131, 8, 0, 'En segundo lugar En segundo lugar', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =114), 9, 114, 10, 0, 'Exijo un reembolso un reemplazo inmediato', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =181), 35, 181, 8, 0, 'Además Además de esto, me descrimina', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =147), 23, 147, 5, 0, 'Exijo un reembolso un reemplazo inmediato', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =124), 11, 124, 3, 0, 'Para empeorar las cosas, es una estafa', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =176), 46, 176, 2, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =104), 39, 104, 9, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =157), 4, 157, 4, 0, 'no tendré más remedio que cancelar mi pedido.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =171), 30, 171, 1, 0, 'Lamento decir que me decepcionó mucho', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =180), 50, 180, 6, 0, 'A menos que reciba los productos a finales de esta semana', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =161), 46, 161, 8, 0, 'Espero que se ocupe de este asunto con prontitud, ya que me está causando muchos inconvenientes.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =130), 49, 130, 6, 0, 'Además Además de esto, me descrimina', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =118), 48, 118, 9, 0, 'A menos que reciba los productos a finales de esta semana', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =155), 20, 155, 10, 0, 'En segundo lugar En segundo lugar', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =107), 32, 107, 9, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =181), 11, 181, 11, 0, 'Espero que se ocupe de este asunto con prontitud, ya que me está causando muchos inconvenientes.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =195), 36, 195, 7, 0, 'Debemos insistir en un reemplazo inmediato/reembolso completo.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =185), 47, 185, 9, 0, 'Además Además de esto, me descrimina', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =193), 3, 193, 11, 0, 'Para empeorar las cosas, es una estafa', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =158), 24, 158, 10, 0, 'también fue inaceptable', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =144), 14, 144, 5, 0, 'No hay nada a la venta, No solo pero tambien es molesto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =188), 34, 188, 7, 0, '¿Podría hacer arreglos para que reciba un nuevo?', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =125), 20, 125, 1, 0, 'Me gustaría que investigaras este asunto y me hicieras saber tu decisión.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =144), 36, 144, 1, 0, 'Espero que este asunto se pueda solucionar.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =137), 13, 137, 3, 0, 'Espero que se ocupe de este asunto con prontitud, ya que me está causando muchos inconvenientes.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =101), 37, 101, 10, 0, 'A menos que tenga noticias suyas antes de mañana, me veré obligado a llevar las cosas un paso más allá.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =130), 5, 130, 6, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =106), 33, 106, 2, 0, 'Mi primera inquietud queja es esto', current_timestamp());

INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =108), 46, 108, 7, 0, 'Disfrutamos muchísimo la primera semana. Sin embargo, después de eso experimentamos una serie de problemas.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =159), 33, 159, 9, 0, 'Lamento decir que me decepcionó mucho', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =132), 34, 132, 6, 0, 'Debemos insistir en un reemplazo inmediato/reembolso completo.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =124), 23, 124, 3, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =165), 41, 165, 4, 0, 'En vista de las muchas formas en que no coincidía con las afirmaciones hechas en su publicidad,...', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =145), 39, 145, 11, 0, 'Para empeorar las cosas, es una estafa', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =140), 10, 140, 1, 0, 'Debemos insistir en un reemplazo inmediato/reembolso completo.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =104), 26, 104, 12, 0, 'creo que tengo derecho a un reemplazo', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =121), 39, 121, 12, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =179), 13, 179, 9, 0, 'En primer lugar me falto el respeto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =171), 35, 171, 6, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =166), 39, 166, 5, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =164), 23, 164, 8, 0, 'también fue inaceptable', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =196), 18, 196, 12, 0, 'Estaría agradecido si usted hace algo al respecto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =166), 29, 166, 3, 0, '¿Podría hacer arreglos para que reciba un nuevo?', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =115), 15, 115, 3, 0, 'No hay nada a la venta, No solo pero tambien es molesto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =105), 14, 105, 4, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =180), 12, 180, 8, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =165), 9, 165, 6, 0, 'Lamento decir que me decepcionó mucho', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =108), 28, 108, 12, 0, 'no tendré más remedio que cancelar mi pedido.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =109), 28, 109, 7, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =195), 11, 195, 8, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =131), 45, 131, 8, 0, 'En segundo lugar En segundo lugar', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =114), 9, 114, 10, 0, 'Exijo un reembolso un reemplazo inmediato', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =181), 35, 181, 8, 0, 'Además Además de esto, me descrimina', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =147), 23, 147, 5, 0, 'Exijo un reembolso un reemplazo inmediato', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =124), 11, 124, 3, 0, 'Para empeorar las cosas, es una estafa', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =176), 46, 176, 2, 0, 'Me gustaría un reembolso total o parcial lo antes posible.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =104), 39, 104, 9, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =157), 4, 157, 4, 0, 'no tendré más remedio que cancelar mi pedido.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =171), 30, 171, 1, 0, 'Lamento decir que me decepcionó mucho', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =180), 50, 180, 6, 0, 'A menos que reciba los productos a finales de esta semana', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =161), 46, 161, 8, 0, 'Espero que se ocupe de este asunto con prontitud, ya que me está causando muchos inconvenientes.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =130), 49, 130, 6, 0, 'Además Además de esto, me descrimina', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =118), 48, 118, 9, 0, 'A menos que reciba los productos a finales de esta semana', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =155), 20, 155, 10, 0, 'En segundo lugar En segundo lugar', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =107), 32, 107, 9, 0, 'Dadas las circunstancias, siento que se debe ofrecer una disculpa.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =181), 11, 181, 11, 0, 'Espero que se ocupe de este asunto con prontitud, ya que me está causando muchos inconvenientes.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =195), 36, 195, 7, 0, 'Debemos insistir en un reemplazo inmediato/reembolso completo.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =185), 47, 185, 9, 0, 'Además Además de esto, me descrimina', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =193), 3, 193, 11, 0, 'Para empeorar las cosas, es una estafa', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =158), 24, 158, 10, 0, 'también fue inaceptable', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =144), 14, 144, 5, 0, 'No hay nada a la venta, No solo pero tambien es molesto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =188), 34, 188, 7, 0, '¿Podría hacer arreglos para que reciba un nuevo?', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =125), 20, 125, 1, 0, 'Me gustaría que investigaras este asunto y me hicieras saber tu decisión.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =144), 36, 144, 1, 0, 'Espero que este asunto se pueda solucionar.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =137), 13, 137, 3, 0, 'Espero que se ocupe de este asunto con prontitud, ya que me está causando muchos inconvenientes.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =101), 37, 101, 10, 0, 'A menos que tenga noticias suyas antes de mañana, me veré obligado a llevar las cosas un paso más allá.', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =130), 5, 130, 6, 0, 'Mi primera inquietud queja es esto', current_timestamp());
INSERT INTO COMPLAINT
	(fk_id_user, fk_id_user_complaining, fk_id_product, fk_id_complaint_category, bit_status, text_description, tim_date)
VALUES
	((SELECT fk_id_user FROM PRODUCT WHERE id_product =106), 33, 106, 2, 0, 'Mi primera inquietud queja es esto', current_timestamp());

insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (31, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (55, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (13, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (8, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (53, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (24, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (37, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (49, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (33, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (34, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (36, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (15, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (30, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (49, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (7, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (26, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (25, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (6, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (13, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (13, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (42, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (23, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (28, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (44, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (48, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (49, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (40, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (39, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (9, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (50, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (22, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (11, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (40, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (43, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (39, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (49, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (6, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (45, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (21, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (38, 3);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (6, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (53, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (43, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (49, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (43, 3);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (18, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (51, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (46, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (19, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (33, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (32, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (51, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (10, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (35, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (53, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (13, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (31, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (55, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (10, 3);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (54, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (54, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (11, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (29, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (47, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (38, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (38, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (52, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (50, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (23, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (6, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (24, 3);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (35, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (43, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (44, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (9, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (25, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (31, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (48, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (36, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (30, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (20, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (16, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (26, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (41, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (33, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (10, 8);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (31, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (9, 10);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (33, 4);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (10, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (32, 9);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (36, 5);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (12, 6);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (7, 2);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (55, 3);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (8, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (41, 3);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (18, 1);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (44, 7);
insert into SUBSCRIPTION (fk_id_user, fk_id_product_category) values (46, 1);

insert into WISH_LIST (fk_id_user, fk_id_product) values (2, 109);
insert into WISH_LIST (fk_id_user, fk_id_product) values (19, 170);
insert into WISH_LIST (fk_id_user, fk_id_product) values (15, 194);
insert into WISH_LIST (fk_id_user, fk_id_product) values (45, 126);
insert into WISH_LIST (fk_id_user, fk_id_product) values (3, 163);
insert into WISH_LIST (fk_id_user, fk_id_product) values (28, 118);
insert into WISH_LIST (fk_id_user, fk_id_product) values (17, 195);
insert into WISH_LIST (fk_id_user, fk_id_product) values (40, 147);
insert into WISH_LIST (fk_id_user, fk_id_product) values (7, 115);
insert into WISH_LIST (fk_id_user, fk_id_product) values (1, 165);
insert into WISH_LIST (fk_id_user, fk_id_product) values (40, 167);
insert into WISH_LIST (fk_id_user, fk_id_product) values (8, 141);
insert into WISH_LIST (fk_id_user, fk_id_product) values (19, 123);
insert into WISH_LIST (fk_id_user, fk_id_product) values (14, 199);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 137);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 158);
insert into WISH_LIST (fk_id_user, fk_id_product) values (8, 189);
insert into WISH_LIST (fk_id_user, fk_id_product) values (49, 188);
insert into WISH_LIST (fk_id_user, fk_id_product) values (38, 152);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 164);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 135);
insert into WISH_LIST (fk_id_user, fk_id_product) values (36, 148);
insert into WISH_LIST (fk_id_user, fk_id_product) values (3, 121);
insert into WISH_LIST (fk_id_user, fk_id_product) values (8, 167);
insert into WISH_LIST (fk_id_user, fk_id_product) values (43, 181);
insert into WISH_LIST (fk_id_user, fk_id_product) values (17, 137);
insert into WISH_LIST (fk_id_user, fk_id_product) values (15, 168);
insert into WISH_LIST (fk_id_user, fk_id_product) values (36, 187);
insert into WISH_LIST (fk_id_user, fk_id_product) values (32, 186);
insert into WISH_LIST (fk_id_user, fk_id_product) values (7, 183);
insert into WISH_LIST (fk_id_user, fk_id_product) values (28, 141);
insert into WISH_LIST (fk_id_user, fk_id_product) values (42, 168);
insert into WISH_LIST (fk_id_user, fk_id_product) values (29, 127);
insert into WISH_LIST (fk_id_user, fk_id_product) values (43, 167);
insert into WISH_LIST (fk_id_user, fk_id_product) values (8, 169);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 132);
insert into WISH_LIST (fk_id_user, fk_id_product) values (1, 129);
insert into WISH_LIST (fk_id_user, fk_id_product) values (45, 103);
insert into WISH_LIST (fk_id_user, fk_id_product) values (31, 116);
insert into WISH_LIST (fk_id_user, fk_id_product) values (46, 185);
insert into WISH_LIST (fk_id_user, fk_id_product) values (37, 144);
insert into WISH_LIST (fk_id_user, fk_id_product) values (23, 112);
insert into WISH_LIST (fk_id_user, fk_id_product) values (10, 112);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 164);
insert into WISH_LIST (fk_id_user, fk_id_product) values (28, 186);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 141);
insert into WISH_LIST (fk_id_user, fk_id_product) values (21, 104);
insert into WISH_LIST (fk_id_user, fk_id_product) values (14, 154);
insert into WISH_LIST (fk_id_user, fk_id_product) values (8, 120);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 151);
insert into WISH_LIST (fk_id_user, fk_id_product) values (28, 150);
insert into WISH_LIST (fk_id_user, fk_id_product) values (25, 102);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 152);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 168);
insert into WISH_LIST (fk_id_user, fk_id_product) values (17, 143);
insert into WISH_LIST (fk_id_user, fk_id_product) values (15, 200);
insert into WISH_LIST (fk_id_user, fk_id_product) values (46, 111);
insert into WISH_LIST (fk_id_user, fk_id_product) values (6, 133);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 114);
insert into WISH_LIST (fk_id_user, fk_id_product) values (30, 192);
insert into WISH_LIST (fk_id_user, fk_id_product) values (20, 185);
insert into WISH_LIST (fk_id_user, fk_id_product) values (32, 175);
insert into WISH_LIST (fk_id_user, fk_id_product) values (42, 180);
insert into WISH_LIST (fk_id_user, fk_id_product) values (22, 110);
insert into WISH_LIST (fk_id_user, fk_id_product) values (2, 156);
insert into WISH_LIST (fk_id_user, fk_id_product) values (38, 130);
insert into WISH_LIST (fk_id_user, fk_id_product) values (24, 185);
insert into WISH_LIST (fk_id_user, fk_id_product) values (44, 167);
insert into WISH_LIST (fk_id_user, fk_id_product) values (22, 106);
insert into WISH_LIST (fk_id_user, fk_id_product) values (17, 147);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 144);
insert into WISH_LIST (fk_id_user, fk_id_product) values (6, 141);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 190);
insert into WISH_LIST (fk_id_user, fk_id_product) values (50, 124);
insert into WISH_LIST (fk_id_user, fk_id_product) values (26, 142);
insert into WISH_LIST (fk_id_user, fk_id_product) values (48, 142);
insert into WISH_LIST (fk_id_user, fk_id_product) values (44, 112);
insert into WISH_LIST (fk_id_user, fk_id_product) values (29, 151);
insert into WISH_LIST (fk_id_user, fk_id_product) values (19, 125);
insert into WISH_LIST (fk_id_user, fk_id_product) values (29, 146);
insert into WISH_LIST (fk_id_user, fk_id_product) values (7, 142);
insert into WISH_LIST (fk_id_user, fk_id_product) values (31, 146);
insert into WISH_LIST (fk_id_user, fk_id_product) values (25, 184);
insert into WISH_LIST (fk_id_user, fk_id_product) values (37, 158);
insert into WISH_LIST (fk_id_user, fk_id_product) values (19, 139);
insert into WISH_LIST (fk_id_user, fk_id_product) values (16, 105);
insert into WISH_LIST (fk_id_user, fk_id_product) values (22, 101);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 157);
insert into WISH_LIST (fk_id_user, fk_id_product) values (21, 188);
insert into WISH_LIST (fk_id_user, fk_id_product) values (16, 106);
insert into WISH_LIST (fk_id_user, fk_id_product) values (6, 181);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 147);
insert into WISH_LIST (fk_id_user, fk_id_product) values (16, 125);
insert into WISH_LIST (fk_id_user, fk_id_product) values (1, 122);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 128);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 177);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 160);
insert into WISH_LIST (fk_id_user, fk_id_product) values (50, 191);
insert into WISH_LIST (fk_id_user, fk_id_product) values (9, 155);
insert into WISH_LIST (fk_id_user, fk_id_product) values (48, 145);
insert into WISH_LIST (fk_id_user, fk_id_product) values (21, 108);
insert into WISH_LIST (fk_id_user, fk_id_product) values (15, 139);
insert into WISH_LIST (fk_id_user, fk_id_product) values (4, 122);
insert into WISH_LIST (fk_id_user, fk_id_product) values (26, 172);
insert into WISH_LIST (fk_id_user, fk_id_product) values (26, 194);
insert into WISH_LIST (fk_id_user, fk_id_product) values (1, 183);
insert into WISH_LIST (fk_id_user, fk_id_product) values (45, 122);
insert into WISH_LIST (fk_id_user, fk_id_product) values (46, 153);
insert into WISH_LIST (fk_id_user, fk_id_product) values (38, 113);
insert into WISH_LIST (fk_id_user, fk_id_product) values (48, 108);
insert into WISH_LIST (fk_id_user, fk_id_product) values (50, 193);
insert into WISH_LIST (fk_id_user, fk_id_product) values (7, 143);
insert into WISH_LIST (fk_id_user, fk_id_product) values (22, 152);
insert into WISH_LIST (fk_id_user, fk_id_product) values (21, 140);
insert into WISH_LIST (fk_id_user, fk_id_product) values (5, 190);
insert into WISH_LIST (fk_id_user, fk_id_product) values (9, 172);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 169);
insert into WISH_LIST (fk_id_user, fk_id_product) values (36, 161);
insert into WISH_LIST (fk_id_user, fk_id_product) values (26, 108);
insert into WISH_LIST (fk_id_user, fk_id_product) values (8, 142);
insert into WISH_LIST (fk_id_user, fk_id_product) values (5, 142);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 114);
insert into WISH_LIST (fk_id_user, fk_id_product) values (18, 126);
insert into WISH_LIST (fk_id_user, fk_id_product) values (3, 159);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 146);
insert into WISH_LIST (fk_id_user, fk_id_product) values (45, 108);
insert into WISH_LIST (fk_id_user, fk_id_product) values (44, 155);
insert into WISH_LIST (fk_id_user, fk_id_product) values (33, 186);
insert into WISH_LIST (fk_id_user, fk_id_product) values (4, 172);
insert into WISH_LIST (fk_id_user, fk_id_product) values (30, 119);
insert into WISH_LIST (fk_id_user, fk_id_product) values (7, 168);
insert into WISH_LIST (fk_id_user, fk_id_product) values (37, 151);
insert into WISH_LIST (fk_id_user, fk_id_product) values (38, 176);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 167);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 174);
insert into WISH_LIST (fk_id_user, fk_id_product) values (29, 197);
insert into WISH_LIST (fk_id_user, fk_id_product) values (46, 146);
insert into WISH_LIST (fk_id_user, fk_id_product) values (40, 187);
insert into WISH_LIST (fk_id_user, fk_id_product) values (49, 141);
insert into WISH_LIST (fk_id_user, fk_id_product) values (6, 117);
insert into WISH_LIST (fk_id_user, fk_id_product) values (47, 121);
insert into WISH_LIST (fk_id_user, fk_id_product) values (10, 110);
insert into WISH_LIST (fk_id_user, fk_id_product) values (2, 105);
insert into WISH_LIST (fk_id_user, fk_id_product) values (32, 169);
insert into WISH_LIST (fk_id_user, fk_id_product) values (42, 131);
insert into WISH_LIST (fk_id_user, fk_id_product) values (10, 122);
insert into WISH_LIST (fk_id_user, fk_id_product) values (49, 101);
insert into WISH_LIST (fk_id_user, fk_id_product) values (13, 164);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 106);
insert into WISH_LIST (fk_id_user, fk_id_product) values (27, 159);
insert into WISH_LIST (fk_id_user, fk_id_product) values (45, 151);
insert into WISH_LIST (fk_id_user, fk_id_product) values (48, 123);
insert into WISH_LIST (fk_id_user, fk_id_product) values (36, 153);
insert into WISH_LIST (fk_id_user, fk_id_product) values (17, 136);
insert into WISH_LIST (fk_id_user, fk_id_product) values (26, 135);
insert into WISH_LIST (fk_id_user, fk_id_product) values (40, 173);
insert into WISH_LIST (fk_id_user, fk_id_product) values (33, 141);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 196);
insert into WISH_LIST (fk_id_user, fk_id_product) values (26, 148);
insert into WISH_LIST (fk_id_user, fk_id_product) values (7, 131);
insert into WISH_LIST (fk_id_user, fk_id_product) values (20, 125);
insert into WISH_LIST (fk_id_user, fk_id_product) values (17, 144);
insert into WISH_LIST (fk_id_user, fk_id_product) values (4, 185);
insert into WISH_LIST (fk_id_user, fk_id_product) values (44, 182);
insert into WISH_LIST (fk_id_user, fk_id_product) values (47, 151);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 125);
insert into WISH_LIST (fk_id_user, fk_id_product) values (48, 138);
insert into WISH_LIST (fk_id_user, fk_id_product) values (49, 104);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 162);
insert into WISH_LIST (fk_id_user, fk_id_product) values (18, 192);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 111);
insert into WISH_LIST (fk_id_user, fk_id_product) values (5, 138);
insert into WISH_LIST (fk_id_user, fk_id_product) values (50, 126);
insert into WISH_LIST (fk_id_user, fk_id_product) values (10, 166);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 175);
insert into WISH_LIST (fk_id_user, fk_id_product) values (4, 196);
insert into WISH_LIST (fk_id_user, fk_id_product) values (47, 138);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 174);
insert into WISH_LIST (fk_id_user, fk_id_product) values (16, 109);
insert into WISH_LIST (fk_id_user, fk_id_product) values (6, 197);
insert into WISH_LIST (fk_id_user, fk_id_product) values (1, 127);
insert into WISH_LIST (fk_id_user, fk_id_product) values (13, 108);
insert into WISH_LIST (fk_id_user, fk_id_product) values (48, 160);
insert into WISH_LIST (fk_id_user, fk_id_product) values (21, 148);
insert into WISH_LIST (fk_id_user, fk_id_product) values (24, 128);
insert into WISH_LIST (fk_id_user, fk_id_product) values (12, 155);
insert into WISH_LIST (fk_id_user, fk_id_product) values (11, 125);
insert into WISH_LIST (fk_id_user, fk_id_product) values (10, 129);
insert into WISH_LIST (fk_id_user, fk_id_product) values (35, 158);
insert into WISH_LIST (fk_id_user, fk_id_product) values (25, 167);
insert into WISH_LIST (fk_id_user, fk_id_product) values (33, 131);
insert into WISH_LIST (fk_id_user, fk_id_product) values (37, 145);
insert into WISH_LIST (fk_id_user, fk_id_product) values (25, 111);
insert into WISH_LIST (fk_id_user, fk_id_product) values (41, 172);
insert into WISH_LIST (fk_id_user, fk_id_product) values (32, 130);
insert into WISH_LIST (fk_id_user, fk_id_product) values (16, 103);
insert into WISH_LIST (fk_id_user, fk_id_product) values (15, 126);
insert into WISH_LIST (fk_id_user, fk_id_product) values (31, 129);
insert into WISH_LIST (fk_id_user, fk_id_product) values (28, 190);
insert into WISH_LIST (fk_id_user, fk_id_product) values (13, 123);







