const nodemailer = require('nodemailer')

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}//configuracion para la utilizacion de variables de entorno

//////////////////////////outlook//////////////////////////////
function enviarCorreoOut(destinatario, id_user) {
    let config = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: process.env.secretEmailOutlook,
            pass: process.env.secretPasword
        }
    });
    const opc = {
        from: '"Plazita Net" <>',
        subject: "Productos disponibles de esta semana",
        to: `${destinatario}`,
        text: `Mira los nuevos productos publicados cerca de ti.\nTodos estos y mucho más, disponibles en PlazitaNet. \nTu marketplaze de confianza.`,
        attachments: [
            {
                filename:"Pazitanet.pdf",
                path: 'src/documentPDF/' + id_user + "_suscription.pdf",
            }
        ]
    };

    config.sendMail(opc, function (error, result) {
        if (error) { console.log(error) } //error el enviar email
        else { console.log("=>Correo enviado a " + destinatario) }    //correcto
    })
}

/////////////////////// gmail - hotmail //////////////////////////////////////////

function enviarCorreoGmail(destinatario, id_user) {
    let config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.secretEmailGmail,
            pass: process.env.secretPasword
        }
    });
    const opc = {
        from: '"Plazita Net" <>',
        subject: "Productos disponibles de esta semana",
        to: `${destinatario}`,
        text: `Mira los nuevos productos publicados cerca de ti.\nTodos estos y mucho más, disponibles en PlazitaNet. \nTu marketplaze de confianza.`,
        attachments: [
            {
                filename:"Pazitanet.pdf",
                path: 'src/documentPDF/' + id_user + "_suscription.pdf",
            }
        ]
    };

    config.sendMail(opc, function (error, result,) {
        if (error) { console.log(error) } //error el enviar email
        else { console.log("=>Correo enviado a " + destinatario) }    //correcto
    })                                  
}

module.exports = 
{
    enviarCorreoGmail,
    enviarCorreoOut
}