const conection = require('../config/connection')
const fs= require('fs')
const path = require('path')
const SQLconsults = require('./SQLconsults')
const {enviarCorreoGmail,enviarCorreoOut} = require('./sendEmail')

function sendEmail() {
    conection.query(SQLconsults.sqlGetUsers, (err, rows, fields) => {
        if (err) res.send(err.sqlMessage);
        else {
            for (let index = 0; index < rows.length; index++) {
                try{
                    fs.access(//comprueba que el archivo exista
                        path.join(__dirname,'../documentPDF/'+rows[index].id_user+"_suscription.pdf"), 
                        fs.F_OK, 
                        (err) => {
                        console.log('\n> Checking Permission for reading the file');
                        if (err) {
                            console.error("No existe el archivo")
                        }else{
                            //evaluar smtp provider
                            let n = rows[index].var_email.search('gmail.com')
                            let n2 = rows[index].var_email.search('outlook.com')
                            let n3 = rows[index].var_email.search('hotmail.com')
    
                            if (n2 != -1) {
                                console.log('outlook')
                                enviarCorreoOut(rows[index].var_email, rows[index].id_user);
                            } else {
                                if (n3 != -1) {
                                    enviarCorreoGmail(rows[index].var_email, rows[index].id_user);
                                } else {
                                    if (n != -1) {
                                        enviarCorreoGmail(rows[index].var_email, rows[index].id_user);
                                    }
                                }
                            }
                        }
                    })
                }catch(errr){
                    console.log("=>1010");
                }
            }
        }
    })
}

module.exports = {sendEmail}