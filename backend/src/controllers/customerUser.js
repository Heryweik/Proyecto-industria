const conection = require('../config/connection')//requerimos la conexion a la BD 
const controller = {} //definicion de controller que guardara las rutas
const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')
const { connect } = require('../config/connection')

//////////////////////////outlook createCode
function enviarCorreoOut(destinatario, codigo, res) {
    let config = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: '',
            pass: ''
        }
    });
    const opc = {
        from: '"Plazita Net" <>',
        subject: "Recuperacion de cuenta",
        to: `${destinatario}`,
        text: `Hola, a continuacion te proporcionamos el codigo de verificacion para el cambio de contraseña:   ${codigo}`
    };

    config.sendMail(opc, function (error, result,) {
        if (error) { return res.json({ status: '10' }) } //error el enviar email
        else { return res.json({ status: '200' }) }    //correcto
    })
}

/////////////////////// gmail - hotmail //////////////////////////////////////////

function enviarCorreoGmail(destinatario, codigo, res) {
    let config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: ''
        }
    });
    const opc = {
        from: '"Plazita Net" <>',
        subject: "Recuperacion de cuenta",
        to: `${destinatario}`,
        text: `Hola, a continuacion te proporcionamos el codigo de verificacion para el cambio de contraseña:   ${codigo}`
    };

    config.sendMail(opc, function (error, result,) {
        if (error) { return res.json({ status: '10' }) } //error el enviar email
        else { return res.json({ status: '200' }) }    //correcto
    })                                   /////////////////////////////////
}




//funcion de prueba
controller.test = (req, res) => {
    res.send('get routes')
}


//funcion para obtener un usuario por el id
controller.getUser = (req, res) => {
    const { id } = req.params
    let sql = `select var_phone,bit_status,var_lastname,var_name,var_email,fk_id_department from USER where id_user=${id}`
    conection.query(sql, (err, rows, fields) => {
        if (err) res.send(err.sqlMessage);
        else {
            res.json(rows)
        }
    })
}

controller.getRol = (req, res) => {
    const { id } = req.params
    let sql = `select bit_rol from USER where id_user=${id}`
    conection.query(sql, (err, rows, fields) => {
        if (err) res.json({rol:false, msg:err.sqlMessage});
        else {
            if(rows[0].bit_rol[0] == 0){
                res.json({rol:true, msg:"Tiene privilegios administrador"})
            }else{
                res.json({rol:false, msg:"No tiene privilegios de administrador"})
            }
        }
    })

}

//funcion para insertar un usuario
controller.postUser = (req, res) => {
    const { fk_id_department, var_email, var_name, var_lastname, tex_password, bit_status, var_phone } = req.body
    let sql1 = `SELECT id_user from USER where var_email='${var_email}'`
    //verificar que el correo no ha sido registrado
    let sql = `insert into USER(registration_date,fk_id_department,var_email,var_name,var_lastname,tex_password,bit_rol,bit_status,var_phone) values(CURRENT_TIMESTAMP(),${fk_id_department},'${var_email}','${var_name}',
    '${var_lastname}','${tex_password}',1,${bit_status},'${var_phone}')`
    conection.query(sql1, (err, rows, fields) => {
        if (err) res.send({ status: '0', id: "" }); //error en consulta
        else if (rows.length == 0) {
            conection.query(sql, (err, rows, fields) => {
                if (err) res.send({ status: '2', id: "" });//error al insertar
                else {
                    conection.query(sql1, (err, rows, fields) => {
                        if (err) res.send({ status: '3', id: "" });//error al consultar id
                        else {
                            res.json({ status: '200', id: rows[0].id_user })
                        }
                    })
                }
            })
        } else {
            res.json({ status: '1', id: "" })//correo ya existente
        }
    })

}

//Funcion para eliminar usuario dado un id
controller.deleteUser = (req, res) => {
    const { id } = req.params

    let sql = `delete from USER where id_user =${id}`
    conection.query(sql, (err, rows, fields) => {
        if (err) res.send(err.sqlMessage);
        else {
            res.json({ status: 'Usuario Eliminado' })
        }
    })

}

//auth
controller.auth = (req, res) => {
    const { var_email, tex_password } = req.body
    console.log(var_email && tex_password)
    console.log(req.body)
    if (var_email && tex_password) {
        let sql = `SELECT id_user,var_email,tex_password,id_user,bit_rol,bit_status from USER where var_email='${var_email}'`
        conection.query(sql, (err, rows, fields) => {
            if (rows.length != 0) {//sino ecuentra el email o las claves no coinciden
                if (tex_password == rows[0].tex_password) {
                    if (rows[0].bit_status[0] == 1) {
                        res.json({ status: '200', id: rows[0].id_user })
                    } else {
                        res.json({ status: '1', id: '-1' })//es usuario eliminado o dado de baja
                    }
                } else {
                    res.json({ status: '0', id: '-1' })//el correo o contraseña son incorrectos
                }
            } else {
                res.json({ status: '0', id: '-1' }) //el correo o contraseña son incorrectos
            }
        })
    } else {
        if (!var_email) {
            res.json({ status: '3', id: '-1' })// no especifico el correo
        }
        if (!tex_password) {
            res.json({ status: '4', id: '-1' })//no especifico la contraseña
        }

    }
}

//actualizar pass

controller.updatePasswordUser = (req, res) => {
    const { var_email, tex_password } = req.body

    let sql1 = `SELECT * from USER where var_email = '${var_email}'`
    let sql2 = `update USER set var_code = null WHERE var_email = '${var_email}'`
    let sql = `update USER set ` +
        `tex_password='${tex_password}' ` +
        `where var_email = '${var_email}'`
    conection.query(sql1, (err, rows, fields) => {
        if (err) res.json({ status: '0' });//posible error en consulta
        else {
            if (rows[0].var_code != null) {
                conection.query(sql2, (err2, rows, fields) => {
                    if (err2) res.json({ status: '2' });//error al actualizar el codigo a null
                    else {
                        conection.query(sql, (err1, rows1, fields1) => {
                            if (err1) res.json({ status: '3' });//error al no poder actualizar la contraseña
                            else {
                                res.json({ status: '200' })//todo salio bien
                            }
                        })
                    }
                })

            } else {
                res.json({ status: '1' })//el codigo es null, no hubo peticion de codigo
            }
        }
    })
}

/////////////////////generar codigo aleatorio y enviar correo/////////////////////////////

controller.envioCodigoCorreo = (req, res) => {
    const { var_email } = req.body

    let sql1 = `SELECT * FROM user WHERE var_email='${var_email}'`
    let sql2 = `SELECT bit_status from USER WHERE var_email='${var_email}'`
    let getToken = `SELECT var_code FROM user WHERE var_email='${var_email}'`

    conection.query(sql1, (err, rows, fields) => {
        if (err) res.json({ status: '0', error: err.sqlMessage });//posible error en consulta
        else {
            if (rows.length != 0) {//si encontro una fila con el email dado
                conection.query(sql2, (err, rows, fields) => { //consultamos si no ha sido dado de baja--bit status

                    if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                    else {
                        if (rows[0].bit_status[0] != 0) { //si no ha sido dado de baja
                            let generateToken = `CALL createCode('${var_email}')` //GENERAMOS EL TOKEN al usuario

                            conection.query(generateToken, (err, rows, fields) => {
                                if (err) res.json({ status: '0', error: err.sqlMessage }) //posible error en la consulta a bdd
                                else {

                                    conection.query(getToken, (err, rows, fields) => { //ahora tomamos el token de la bd
                                        if (err) res.json({ status: '0', error: err.sqlMessage }) //posible error en la consulta a bdd
                                        else {

                                            //evaluar smtp provider
                                            let n = var_email.search('gmail.com')
                                            let n2 = var_email.search('outlook.com')
                                            let n3 = var_email.search('hotmail.com')

                                            if (n2 != -1) {
                                                console.log('outlook')
                                                enviarCorreoOut(var_email, rows[0].var_code, res);
                                            } else {
                                                if (n3 != -1) {
                                                    enviarCorreoGmail(var_email, rows[0].var_code, res);
                                                } else {
                                                    if (n != -1) {
                                                        enviarCorreoGmail(var_email, rows[0].var_code, res);
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            })
                        } else { res.json({ status: '2' }) } //status 2: usuario dado de baja sin acceso al sistema
                    }
                })
            } else { res.json({ status: '1' }) } //status 1: correo invalido
        }
    })
}
//routers.post('/credential', customerU.envioCodigoCorreo )


/////////////////confirmar codigo////////////////////////

controller.confirmaCodigo = (req, res) => {
    const { var_code, var_email } = req.body;


    let consulta = `select * from USER where var_code='${var_code}' and var_email='${var_email}'`

    conection.query(consulta, (err, rows, fields) => {
        if (err) res.json({ status: '0', error: err.sqlMessage });//0:posible error en consulta
        else {
            if (rows.length != 0) { //si encontro una usuario que corresponde con el codigo e email
                res.json({ status: '200' }) //200: todo salio  bien
            } else {
                res.json({ status: '1' }) //1:codigo invalido
            }
        }
    })
}

//funcion para actualizar un usuario dado un id
controller.updateUser = (req, res) => {
    const { id } = req.params
    const { fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone } = req.body

    let sql = `update USER set fk_id_department=${fk_id_department}, ` +
        `var_email='${var_email}', ` +
        `var_name='${var_name}', ` +
        `var_lastname='${var_lastname}', ` +
        `tex_password='${tex_password}', ` +
        `bit_rol=${bit_rol}, ` +
        `bit_status=${bit_status}, ` +
        `var_phone='${var_phone}' where id_user = ${id}`

    conection.query(sql, (err, rows, fields) => {
        if (err) res.send(err.sqlMessage);
        else {
            res.json({ status: 'Usuario Modificado' })
        }
    })
}

/////////////////SUSCRIBIR USUARIO A CATEGORIA/////////////////////////

controller.subscribeUser = (req, res) => {
    console.log(req.body)
    const { fk_id_user, fk_id_product_category } = req.body;

    let sql1 = `SELECT * FROM user WHERE id_user = ${fk_id_user}`
    let sql2 = `SELECT * FROM product_category WHERE id_product_category=${fk_id_product_category}`
    let sql3 = `SELECT * FROM subscription WHERE fk_id_user=${fk_id_user} AND fk_id_product_category=${fk_id_product_category}`
    let sql4 = `INSERT INTO subscription (fk_id_user, fk_id_product_category) VALUES (${fk_id_user}, ${fk_id_product_category})`

    conection.query(sql1, (err, rows, fields) => { //consulta 1
        if (err) res.json({ status: '0', error: err.sqlMessage });//posible error en consulta
        else {
            if (rows.length != 0) {//si encontro una fila con el id user dado

                conection.query(sql2, (err, rows, fields) => {//consulta 2
                    if (err) res.json({ status: '0', error: err.sqlMessage })
                    else {
                        if (rows.length != 0) {//categoria existe en tabla

                            conection.query(sql3, (err, rows, fields) => { //consulta 3
                                if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                else {
                                    if (rows.length == 0) {//no existe una suscripcion previa
                                        conection.query(sql4, (err, rows, fields) => {
                                            if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                            else { res.json({ status: '200', msg: "Suscripcion exitosa" }) }
                                        })
                                    } else { res.json({ status: '203', msg: "Ya existe una suscripcion" }) }
                                }
                            })
                        } else { res.json({ status: '202', msg: "No existe la categoria o es incorrecta" }) }
                    }
                })

            } else { res.json({ status: '201', msg: "Usuario no existe o es incorrecto" }) }
        }
    })
}
//////////////////////////// DAR DE BAJA SUSCRIPCION //////////////////////////////////////////

controller.Unsubscribe = (req, res) => {
    const { fk_id_user, fk_id_product_category } = req.body;

    let sql1 = `SELECT * FROM USER WHERE id_user = ${fk_id_user}`
    let sql2 = `SELECT * FROM product_category WHERE id_product_category=${fk_id_product_category}`
    let sql3 = `SELECT * FROM subscription WHERE fk_id_user=${fk_id_user} AND fk_id_product_category=${fk_id_product_category}`
    let sql4 = `DELETE FROM subscription WHERE fk_id_user= ${fk_id_user} and fk_id_product_category= ${fk_id_product_category}`

    conection.query(sql1, (err, rows, fields) => { //consulta 1
        if (err) res.json({ status: '0', error: err.sqlMessage });//posible error en consulta
        else {
            if (rows.length != 0) {//si encontro una fila con el id user dado

                conection.query(sql2, (err, rows, fields) => {//consulta 2
                    if (err) res.json({ status: '0', error: err.sqlMessage })
                    else {
                        if (rows.length != 0) {//categoria existe en tabla

                            conection.query(sql3, (err, rows, fields) => { //consulta 3
                                if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                else {
                                    if (rows.length != 0) {//existe ;a suscripcion
                                        conection.query(sql4, (err, rows, fields) => {
                                            if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                            else { res.json({ status: '200', msg: "Baja exitosa" }) }
                                        })
                                    } else { res.json({ status: '203', msg: "No existe una suscripcion" }) }
                                }
                            })
                        } else { res.json({ status: '202', msg: "No existe la categoria o es incorrecta" }) }
                    }
                })

            } else { res.json({ status: '201', msg: "Usuario no existe o es incorrecto" }) }
        }
    })
}

///////////////////// LISTAR SUSCRIPCIONES ///////////////////////////
controller.getSubscriptions = (req, res) => {
    const { id_user } = req.params

    sql1 = `SELECT * FROM user WHERE id_user=${id_user}`
    sql2 = `SELECT product_category.var_name, product_category.id_product_category FROM product_category
        INNER JOIN subscription ON product_category.id_product_category=subscription.fk_id_product_category
        WHERE subscription.fk_id_user=${id_user}`

    conection.query(sql1, (err, rows, fields) => {
        if (err) res.json({ status: '0', error: err.sqlMessage })
        else {
            if (rows.length != 0) { //encontro al usuario
                conection.query(sql2, (err, rows, fields) => {
                    if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                    else {
                        if (rows.length != 0) {
                            res.json({ status: '200', msg: rows })
                        }
                        else { res.json({ status: '202', msg: "No existen suscripciones" }) }
                    }
                })
            } else { res.json({ status: '201', msg: "Usuario no existe o es incorrecto" }) }
        }
    })

}

//////////////////////////// DAR DE BAJA FAVORITO //////////////////////////////////////////

controller.deleteFavorite = (req, res) => {
    const { id_user, id_product } = req.body;

    let sql1 = `SELECT * FROM USER WHERE id_user = ${id_user}`
    let sql2 = `SELECT * FROM product WHERE id_product=${id_product}`
    let sql3 = `SELECT * FROM wish_list WHERE fk_id_user=${id_user} AND fk_id_product=${id_product}`

    let sql4 = `DELETE FROM wish_list WHERE fk_id_user= ${id_user} AND fk_id_product= ${id_product}`

    conection.query(sql1, (err, rows, fields) => { //consulta 1
        if (err) res.json({ status: '0', error: err.sqlMessage });//posible error en consulta
        else {
            if (rows.length != 0) {//si encontro una fila con el id user dado

                conection.query(sql2, (err, rows, fields) => {//consulta 2
                    if (err) res.json({ status: '0', error: err.sqlMessage })
                    else {
                        if (rows.length != 0) {//producto existe en tabla

                            conection.query(sql3, (err, rows, fields) => { //consulta 3
                                if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                else {
                                    if (rows.length != 0) {//producto existe en la tabla favoritos
                                        conection.query(sql4, (err, rows, fields) => {
                                            if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                            else { res.json({ status: '200', msg: "Baja exitosa" }) }
                                        })
                                    } else { res.json({ status: '203', msg: "No existe el producto en lista fav" }) }
                                }
                            })
                        } else { res.json({ status: '202', msg: "No existe la el producto o es incorrecto" }) }
                    }
                })

            } else { res.json({ status: '201', msg: "Usuario no existe o es incorrecto" }) }
        }
    })
}

/////////////////AGREGAR PRODUCTO A FAVORITOS/////////////////////////

controller.addFavorite = (req, res) => {
    const { id_user, id_product, } = req.body;

    let sql1 = `SELECT * FROM user WHERE id_user = ${id_user}`
    let sql2 = `SELECT * FROM product WHERE id_product=${id_product}`
    let sql3 = `SELECT * FROM wish_list WHERE fk_id_user=${id_user} AND fk_id_product=${id_product}`
    let sql4 = `INSERT INTO wish_list (fk_id_user, fk_id_product) VALUES (${id_user}, ${id_product})`

    conection.query(sql1, (err, rows, fields) => { //consulta 1
        if (err) res.json({ status: '0', error: err.sqlMessage });//posible error en consulta
        else {
            if (rows.length != 0) {//si encontro una fila con el id user dado

                conection.query(sql2, (err, rows, fields) => {//consulta 2
                    if (err) res.json({ status: '0', error: err.sqlMessage })
                    else {
                        if (rows.length != 0) {//producto existe en tabla

                            conection.query(sql3, (err, rows, fields) => { //consulta 3
                                if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                else {
                                    if (rows.length == 0) {//no existe una suscripcion previa
                                        conection.query(sql4, (err, rows, fields) => {
                                            if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                                            else { res.json({ status: '200', msg: "Se ha anadido a favoritos" }) }
                                        })
                                    } else { res.json({ status: '203', msg: "Ya ha sido agregado" }) }
                                }
                            })
                        } else { res.json({ status: '202', msg: "No existe el producto" }) }
                    }
                })

            } else { res.json({ status: '201', msg: "Usuario no existe o es incorrecto" }) }
        }
    })
}
/*{
    "id_user":"3",
    "fk_id_department":1,
    "var_email":"luis2@gmail.com",
    "var_name":"prueba",
    "var_lastname":"base",
    "tex_password":"12345",
    "bit_rol":1,
    "bit_status":1,
    "var_phone":"98765645"
} */


//==================PROMEDIO DE CALIFICACION======================
controller.avgQualif = (req, res) => {
    const {fk_id_user_qualified} = req.params;
    let sql1=`call prom(${fk_id_user_qualified});`

    conection.query(sql1,(err,rows,fields)=>{
        if (err) 
            res.json({ status: '0', error: err.sqlMessage })
            else 
            res.json(rows[0])
    })
}

//==============Agregar Calificacion==========

controller.qualifications = (req, res) => {
    //constate
    const { fk_id_user_review, fk_id_user_qualified, tin_score } = req.body;
    //variables de consulta

    let sql15 = `SELECT * FROM user WHERE id_user = ${fk_id_user_review}`
    let sql16 = `SELECT * FROM user WHERE id_user=${fk_id_user_qualified} `
    let sql17 = `CALL sp_rateUser(${fk_id_user_review},${fk_id_user_qualified},${tin_score})`

    //conexion de usuario 1 o consulta 1
    conection.query(sql15, (err, rows, fields) => {
        if (err) {
            res.json({ status: '0', error: err.sqlMessage })
            //throw err
        } else {
            if (rows.length != 0) {
                //Conexion de usuario 2
                conection.query(sql16, (err, rows, fields) => {
                    if (err) {
                        res.json({ status: '3', error: err.sqlMessage })
                    } else
                        if (rows.length != 0) {
                            conection.query(sql17, (err, rows, fields) => {
                                if (err) {
                                    res.json({ status: '4', error: err.sqlMessage })
                                } else {
                                    res.json({ status: '200', msg: rows[0][0].msg })
                                }
                            })

                        } else {
                            res.json({ status: '2', msg: 'El vendedos no se encuetra' })
                        }
                })
            } else {
                res.json({ status: '1', msg: 'El cliente no se encuetra' })
            }
        }
    })
}
//============== Traer calificación individual ==========
controller.getOneQualification = (req, res) => {
    const{fk_id_user_review, fk_id_user_qualified} = req.body
    let sql = `SELECT tin_score FROM QUALIFICATION WHERE fk_id_user_review =${fk_id_user_review}
            AND fk_id_user_qualified =${fk_id_user_qualified} LIMIT 1`
    
    conection.query(sql, (err, rows, fields) => {
        if (err) {
            res.json({ status: -1, error: err.sqlMessage })
        }else{
            if (rows.length != 0) {
                res.json({status: 200, msg:""+ rows[0].tin_score})
            }else{
                res.json({status: -2, msg:"Este cliente aun no ha calificado a este vendedor"})
            }
            
        }
    })

}

controller.isQualifying = (req, res) => {
    const{id_chat} = req.params
    let sql = `SELECT fn_isQualifying(${id_chat}) AS isQualifying`
    conection.query(sql, (err, rows, fields) => {
        if (err) {
            res.json({ status: -1, error: err.sqlMessage })
        }else{
            res.json({status: 200, msg:""+rows[0].isQualifying})
        }
    })
}

//=================Crear Denuncias==========================================
controller.denuncia = (req, res) => {

    const { fk_id_user, fk_id_product, fk_id_complaint_category,
        text_description } = req.body
    let sql18 = `SELECT * FROM user WHERE id_user = ${fk_id_user}`
    let sql20 = `SELECT * FROM PRODUCT WHERE id_product=${fk_id_product} `
    let sql21 = `SELECT * FROM COMPLAINT_CATEGORY WHERE id_COMPLAINT_CATEGORY=${fk_id_complaint_category} `

    //conexion de usuario 1
    conection.query(sql18, (err, rows, fields) => {
        if (err) {
            res.json({ status: '0', error: err.sqlMessage })
        } else {
            if (rows.length != 0) {
                //conexion de producto
                conection.query(sql20, (err, rows, fields) => {
                    if (err) {
                        res.json({ status: '2', error: err.sqlMessage })
                    } else {
                        if (rows.length != 0) {
                            const fk_id_user_complaining = rows[0].fk_id_user
                            //Coneccion de categoria
                            conection.query(sql21, (err, rows, fields) => {
                                if (err) {
                                    res.json({ status: '3', error: err.sqlMessage })
                                } else {
                                    if (rows.length != 0) {

                                        let sql22 = `INSERT INTO COMPLAINT(fk_id_user,fk_id_user_complaining,fk_id_product,fk_id_complaint_category,
                                            bit_status,text_description,tim_date) 
                                            VALUES(${fk_id_user},${fk_id_user_complaining},${fk_id_product},${fk_id_complaint_category},
                                            0,"${text_description}",CURRENT_TIMESTAMP)`

                                        //Conexion de insertar datos
                                        conection.query(sql22, (err, rows, fields) => {
                                            if (err) {
                                                res.json({ status: '4', error: err.sqlMessage })
                                            } else {
                                                res.json({ status: '200', msg: 'Se envió la denuncia' })
                                            }
                                        })
                                    } else {
                                        res.json({ status: '2', msg: 'La categoria no se encuetra' })
                                    }

                                }
                            })
                        } else {
                            res.json({ status: '2', msg: 'El producto denunciado no se encuetra' })
                        }
                    }
                })
            } else {
                res.json({ status: '2', msg: 'El usuario no se encuetra' })
            }
        }
    })
}


//====================Crear Comentarios====================

controller.comentario =(req ,res)=>{
    const {fk_id_user, fk_id_product,text_contents}=req.body;

    let sql18=`SELECT * FROM user WHERE id_user = ${fk_id_user}`
    let sql19=`SELECT * FROM product WHERE id_product=${fk_id_product}`
    let sql20=`INSERT INTO COMMENTARY(fk_id_user,fk_id_product,text_contents,tim_date) 
    VALUES(${fk_id_user}, ${fk_id_product},"${text_contents}", CURRENT_TIMESTAMP)`

    conection.query(sql18,(err,rows,fields)=>{
        if(err){
            res.json({status:'0', error: err.sqlMessage})
        }else{
            if(rows.length!=0){
                conection.query(sql19,(err,rows,fields)=>{
                    if(err){
                        res.json({status:'1', error: err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            conection.query(sql20,(err,rows,fields)=>{
                                if(err){
                                    res.json({ status: '2', error: err.sqlMessage });
                                }else{
                                    res.json({ status: '200', msg: 'Se agrego el comentario' })
                                }                 
                            })
                        }else{
                            res.json({status:'3',msg:'el producto comentado no se encuetra'})
                        }
                    }
                })
            }else{
                res.json({status:'4', msg:'no se encuentra el usuario que comento'})
            }
        }
    })

}

//========================== LISTAR COMENTARIOS ==================================
controller.getComments=(req,res)=>{
    const{fk_id_product}=req.params;

    let sql1=`CALL obtenerComentarios(${fk_id_product})`

    conection.query(sql1,(err,rows, fields)=>{
        if(err){
            res.json({status:'0', msg:err.sqlMessage})}
        else{
            res.json(rows[0])
        }
    })           

}

//=================Modificar Vista============================================

controller.vista = (req, res) => {

    const { id } = req.params

    let generateToken = `CALL vistaProduc(${id})` //GENERAMOS EL TOKEN 
    conection.query(generateToken, (err, rows, fields) => {
        if (err) {
            res.json({ status: '0', error: err.sqlMessage })
        } else {
            res.json({ status: '200', msg: 'Se modifico ' })
        }

    })
}
//Crear Mensaje
controller.addMessage = (req, res) => {
    const{fk_id_chat,fk_id_user,text_contents}=req.body
    let sql27 = `SELECT * FROM CHAT WHERE id_chat = ${fk_id_chat}`
    let sql28 = `SELECT * FROM user WHERE id_user = ${fk_id_user}`
    let sql29 = `INSERT INTO MESSAGE(tim_date,bit_status, text_contents,fk_id_chat,fk_id_user) 
    VALUES(CURRENT_TIMESTAMP(),0,'${text_contents}',${fk_id_chat},${fk_id_user})`
    //Conexion 1 sql27
    conection.query(sql27,( err,rows,fields)=>{
        if(err){
            res.json({status:'0', error: err.sqlMessage})
        }else{
            if(rows.length!=0){
                //conexion 2 sql 28
                conection.query(sql28,(err,rows,fields)=>{
                    if(err){
                        res.json({status:'1',error:err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            //conexion 3 sql 29
                            conection.query(sql29,(err,rows,fields)=>{
                                if(err){
                                    res.json({status:'2', error:err.sqlMessage})
                                }else{
                                    res.json({status:'200' ,msg:'Se conecto'})
                                }
                            })

                        }else{
                             res.json({status:'3' ,msg:'No se encuentra el usuario'})
                        }

                    }
                })
            }else{
                 res.json({status:'4' ,msg:'No se encuentra el chat'})
            }
        }
    })

}

//Listado de mensaje
controller.listarMenssage =(req, res)=>{
    const{id} = req.params
    let sql27=`call listMessage(${id})`
    conection.query(sql27, (err,rows, fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200', msg:rows})
        }
    })

}


controller.deleteUserTotal=(req, res)=>{
    const{id}=req.params

    let sql29=`call borrarUs(${id})`

    conection.query(sql29, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200',msg:rows})
        }
    })
}



//exportacion de controler
module.exports = controller