SET GLOBAL event_scheduler = ON; #Para la aceptacion de eventos en el servido de bd
use plazitanet;

#creacion del evento para la comprobacion de la expiracion de los productos
CREATE EVENT insertion_event
ON SCHEDULE EVERY '3' minute 
DO UPDATE PRODUCT SET bit_availability = 0 WHERE expiration_date < now();

SHOW events;