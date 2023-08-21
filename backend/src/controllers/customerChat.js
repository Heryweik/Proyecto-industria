const conection = require('../config/connection')//requerimos la conexion a la BD
const controller = {} //definicion de controller que guardara las rutas

/*
controller.newChat = (req,res) => {
    const {fk_id_product, fk_id_user_buyer, fk_id_user_seller} = req.body
*/
function newChat(req, res){
    const {fk_id_product, fk_id_user_buyer, fk_id_user_seller} = req
  
    let sql1 = `SELECT * FROM PRODUCT WHERE id_product = ${fk_id_product}`
    let sql2 = `SELECT * FROM USER WHERE id_user = ${fk_id_user_buyer}`
    let sql3 = `SELECT * FROM USER WHERE id_user = ${fk_id_user_seller}`
    let sql = `CALL sp_newChat(${fk_id_product},${fk_id_user_buyer},${fk_id_user_seller})`

    if (fk_id_user_buyer==fk_id_user_seller) {
        //console.log('hola, son iguales')
        res.emit('newchatresponse', {status:'201',msg: "No se puede mandar mensajes a su propio usuario"})
    }else{
    conection.query(sql1,(err,rows,fields)=>{ // Comprueba si existe el producto
        if(err){
            res.emit('newchatresponse', {status:'1',msg: err.sqlMessage})
        }else{
            //console.log("hola user:"+fk_id_user_buyer+"   user:"+fk_id_user_seller+"   product"+fk_id_product)
            if(rows.length!=0){ 
                conection.query(sql2,(err,rows,fields)=>{ // Comprueba si existe el usuario comprador
                    if(err){
                        res.emit('newchatresponse', {status:'2',msg: err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            if(rows.length!=0){
                                conection.query(sql3,(err,rows,fields)=>{ // Comprueba si existe el usuario vendedor
                                    if(err){
                                        res.emit('newchatresponse', {status:'3',msg: err.sqlMessage})
                                    }else{
                                        if(rows.length!=0){
                                            conection.query(sql,(err,rows,fields)=>{
                                                if(err){
                                                    res.emit('newchatresponse', {status:'4',msg: err.sqlMessage})
                                                }else{
                                                    if(rows[0][0].status == 200){
                                                        res.emit('newchatresponse', {status:'200',msg: "El nuevo chat vacio ha sido creado", id_chat: rows[0][0].id_chat, messenge: []})
                                                    }else{
                                                        res.emit('newchatresponse', {status:'202',msg: "Ya existe este chat", id_chat: rows[0][0].id_chat})
                                                    }
                                                }
                                            })
                                            /*
                                            conection.query(sql4,(err,rows,fields)=>{ // Comprueba si ya existe ese chat
                                                if(err){
                                                    res.emit('newchatresponse', {status:'4',msg: err.sqlMessage})
                                                }else{
                                                    if(rows.length!=0){
                                                        res.emit('newchatresponse', {status:'202',msg: "Ya existe este chat"})
                                                        
                                                    }else{
                                                        conection.query(sql,(err,rows,fields)=>{
                                                            if(err){
                                                                res.emit('newchatresponse', {status:'4',msg: err.sqlMessage})
                                                            }else{
                                                                
                                                                res.emit('newchatresponse', {status:'200',msg: "El nuevo chat vacio ha sido creado"})
                                                            }
                                                        })
                                                    }
                                                }

                                            })*/       
                            
                                        }else{
                                            res.emit('newchatresponse', {status:'0',msg:'El usuario vendedor no se encuentra'})
                                        }
                            
                                    }
                            
                                })
            
                            }else{
                                res.emit('newchatresponse', {status:'0',msg:'El usuario comprador no se encuentra'})
                            }
            
                        }
            
                    }
                })

            }else{
                res.emit('newchatresponse', {status:'0',msg:'El producto no se encuetra'})
            }

        }

    })
    }

}

/*
controller.getChats = (req,res) => {
    const{id_user}=req.params
*/
function getChats(req,res){
    const{id_user}=req

    let sql = `SELECT * FROM USER WHERE id_user = ${id_user}`
    let sql1 = `CALL sp_chatData(${id_user})`

    conection.query(sql,(err,rows,fields)=>{ // Comprueba si existe el usuario
        if(err){
            res.emit('getchatsresponse',({status:'1',msg: err.sqlMessage}))
        }else{
            if(rows.length!=0){
                conection.query(sql1,(err,rows,fields)=>{ // Trae el nombre del vendedor, id del producto, nombre del producto, id del chat, 
                
                    res.emit('getchatsresponse',{status:'200' , msg: rows[0]})
                })
              
            }else{
                res.emit('getchatsresponse',({status:'0',msg:'No se encontro el usuario'}))
            }

        }

    })

}

//Crear Mensaje
function addMessage(req, res){
    const{fk_id_chat,fk_id_user,text_contents}=req
    //console.log(fk_id_chat+"    "+fk_id_user+"    "+text_contents);
    let sql27 = `SELECT * FROM CHAT WHERE id_chat = ${fk_id_chat}`
    let sql28 = `SELECT * FROM user WHERE id_user = ${fk_id_user}`
    let sql29 = `CALL sp_sendMessage('${text_contents}',${fk_id_chat},${fk_id_user})`
    let sql1 = `CALL sp_chatData(${fk_id_user})`
    //Conexion 1 sql27
    conection.query(sql27,( err,rows,fields)=>{
        if(err){
            res.emit('addMessageResponse',{status:'0', msg: err.sqlMessage})
        }else{
            if(rows.length!=0){
                //conexion 2 sql 28
                conection.query(sql28,(err,rows,fields)=>{
                    if(err){
                        res.emit('addMessageResponse',{status:'1',msg:err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            //conexion 3 sql 29
                            conection.query(sql29,(err,rows,fields)=>{
                                if(err){
                                    res.emit('addMessageResponse',{status:'2', msg:err.sqlMessage})
                                }else{
                                    conection.query(sql1,(err1,rows1,fields)=>{
                                        if(err1){
                                            res.emit('addMessageResponse',{status:'2', msg:err1.sqlMessage})
                                        }else{
                                            res.emit('addMessageResponse',{status:'200' , msg: rows[0], msgChat: rows1[0], info: 'Se envio el mensaje'})
                                            res.broadcast.emit('addMessageResponse',{status:'200' , msg:'si', info: 'Se envio el mensaje'})
                                        }
                                    })
                                }
                            })

                        }else{
                             res.emit('addMessageResponse',{status:'3' ,msg:'No se encuentra el usuario'})
                        }

                    }
                })
            }else{
                 res.emit('addMessageResponse',{status:'4' ,msg:'No se encuentra el chat'})
                 
            }
        }
    })

}

//Listado de mensaje
function listMessages(req, res){
    //console.log(req)
    const{id,idUser} = req
    let sql27=`call listMessage(${id},${idUser})`
    conection.query(sql27, (err,rows, fields)=>{
        if(err){
            res.emit('listmessagesResponse',{ status:'0', msg: err.sqlMessage})
        }else{
            res.emit('listmessagesResponse',{ status:'200', msg:rows[0]})
            res.broadcast.emit('listmessagesResponseUsers',{ status:'200', msg:id})
        }
    })
}

//Listado de mensaje v2
function listMessagesv2(req, res){
    //console.log(req)
    const{id,idUser} = req
    let sql27=`call listMessage(${id},${idUser})`
    conection.query(sql27, (err,rows, fields)=>{
        if(err){
            res.emit('listmessagesResponse',{ status:'0', msg: err.sqlMessage})
        }else{
            res.emit('listmessagesResponse',{ status:'200', msg:rows[0]})
        }
    })
}

//Listado de mensaje v2
function listMessagesv3(req, res){
    //console.log(req)
    const{id,idUser} = req
    let sql27=`call listMessage(${id},${idUser})`
    conection.query(sql27, (err,rows, fields)=>{
        if(err){
            res.emit('listmessagesResponse',{ status:'0', msg: err.sqlMessage})
        }else{
            res.emit('listmessagesResponse',{ status:'201', msg:rows[0]})
        }
    })
}



//exportacion de modulos
module.exports = { 
    newChat, 
    getChats,
    addMessage,
    listMessages,
    listMessagesv2,
    listMessagesv3
}