<?php

namespace Classes;
use PHPMailer\PHPMailer\PHPMailer;

class Email{
    public $email;
    public $nombre;
    public $token;
    public function __construct($nombre, $email, $token){
        $this->nombre = $nombre;
        $this->email = $email;
        $this->token = $token;
    }

    public function enviarConfirmacion(){

        // Crear el objeto de email
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '23689161b27f64';
        $mail->Password = '2cf8290d312b70';

        $mail->setFrom('cuentas@appsalon.com');
        $mail->addAddress('cuentas@appsalon.com','AppSalon.com');
        $mail->Subject = 'Confirma tu cuenta';

        // Set HTML
        $mail->isHTML(TRUE);
        $mail->CharSet = 'UTF-8';

        $contenido = "<html>";
        $contenido .= " <p><strong>Hola " .$this->nombre. "</strong> Has creado tu cuenta en AppSalon,
        solo debes confirmala presionando el siguiente enlace</p>";
        $contenido .= "<p>Presiona aqui: <a href='http://localhost:3000/confirmar-cuenta?token=". $this->token. "'>Confirmar Cuenta </a> </p>";
        $contenido .= "<p>Si tu no solicitaste esta cuenta, puedes ignorar el mensaje </p>";
        $contenido .= "</html>";

        $mail->Body = $contenido;

        // Enviar el email
        $mail->send();
    }

    public function enviarInstrucciones(){
        // Crear el objeto de email
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '23689161b27f64';
        $mail->Password = '2cf8290d312b70';

        $mail->setFrom('cuentas@appsalon.com');
        $mail->addAddress('cuentas@appsalon.com','AppSalon.com');
        $mail->Subject = 'Restablece tu password';

        // Set HTML
        $mail->isHTML(TRUE);
        $mail->CharSet = 'UTF-8';

        $contenido = "<html>";
        $contenido .= " <p><strong>Hola " .$this->nombre. "</strong> Has solicitado reestablecer tu password,
        sigue el siguien enlace para hacerlo.</p>";
        $contenido .= "<p>Presiona aqui: <a href='http://localhost:3000/recuperar?token=". 
        $this->token. "'>Recuperar Password </a> </p>";

        $contenido .= "<p>Si tu no solicitaste este cambio, puedes ignorar el mensaje </p>";
        $contenido .= "</html>";

        $mail->Body = $contenido;

        // Enviar el email
        $mail->send();
    }
}


?>