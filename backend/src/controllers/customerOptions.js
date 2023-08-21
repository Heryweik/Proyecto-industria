const conection = require('../config/connection')//requerimos la conexion a la BD 
const controller = {} //definicion de controller que guardara las rutas
const nodemailer = require('nodemailer')
const fs= require('fs').promises
const fs2= require('fs')
const path = require('path')
const { text } = require('body-parser')
const { Console } = require('console')

//funcion de prueba
controller.test = (req,res) => {
    res.send('get routes')
}

controller.getDepartament = (req,res) =>{
    let sql =`select * from DEPARTMENT`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}

controller.getCategory = (req,res) =>{
    let sql =`select * from PRODUCT_CATEGORY`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}

controller.getComplaintCategories = (req,res) =>{
    let sql =`select * from COMPLAINT_CATEGORY`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}

//funcion para insertar un producto /// Sin las imagenes
controller.postProduct = (req,res) =>{
    const {fk_id_user, fk_id_department, fk_id_product_category, fk_id_product_status, var_name, text_description, dou_price} = req.body
    let sql=`insert into PRODUCT(fk_id_user, fk_id_department, fk_id_product_category, fk_id_product_status, var_name,
        int_views, text_description, dou_price, publication_date, expiration_date) 
        values(${fk_id_user},${fk_id_department}, ${fk_id_product_category}, ${fk_id_product_status}, '${var_name}',
        0,'${text_description}',${dou_price},CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval (SELECT fn_getExpiryTime()) day))`

    let sql1=`select last_insert_id() AS id`
    
    conection.query(sql,(err,rows,fields)=>{
        if(err){ res.send({status: '0', id:""})
            console.log(err)
        } //error en consulta
        else{
            conection.query(sql1,(err,rows,fields)=>{
                console.log(rows[0])
                res.json({status: '200', id:rows[0].id}) // Consulta correcta retorna el id del producto
            })
        }
    })    
}

//Funcion para dar formato a los precios
function formatoPrecio(precio){

    var centavos = ""
    var entero = ""

    arregloPrecio = ("" + precio).split(".")
  
    if(arregloPrecio.length>1){
       
        if(arregloPrecio[1].length>2){
            centavos = arregloPrecio[1].substring(0,2);
        }else if(arregloPrecio[1].length==2){
            centavos = arregloPrecio[1]
        }else if(arregloPrecio[1].length==1){
            centavos = arregloPrecio[1] + "0"
        }else{
            centavos = "00"
        }
        
    }else{
        centavos = "00"
    }

    if(arregloPrecio[0].length%3!=0 && arregloPrecio[0].length>3){
        entero = arregloPrecio[0].substring(0, arregloPrecio[0].length%3) + ","
    }else if(arregloPrecio[0].length%3!=0){
        entero = arregloPrecio[0].substring(0, arregloPrecio[0].length%3)
    }

    let cont=0
    for(var i = (arregloPrecio[0].length%3); i < arregloPrecio[0].length ; i++){


        if(cont%3==0 && cont!=0){
            entero += ","
        }
        entero += arregloPrecio[0].substring(i,i+1)
        cont++

    }

    return entero +"."+ centavos;

}

controller.productFiltering = (req,res) =>{
    const{fk_id_department,fk_id_product_category,dou_price,id_user}=req.body
    let sql1 = `SELECT product.id_product,if(wl.fk_id_user is NULL,"false","true") as whishlist,photographs.id_photographs,`
        +`photographs.var_name AS var_name_photo,product.fk_id_user,product.fk_id_department,product.var_name,text_description,dou_price,publication_date`
        + ` from product LEFT OUTER JOIN  photographs ON photographs.fk_id_product=product.id_product `
        +`LEFT OUTER JOIN  wish_list wl ON wl.fk_id_product=product.id_product AND wl.fk_id_user=${id_user}`+
        ` INNER JOIN user ON user.id_user = product.fk_id_user where `
    if(fk_id_department!="") sql1 += `product.fk_id_department = ${fk_id_department} AND `
    if(fk_id_product_category!="")  sql1 += `product.fk_id_product_category=${fk_id_product_category} AND `
    if(dou_price!="") sql1 +=  `product.dou_price <= ${dou_price} AND `
    sql1 += `bit_availability = 1 and user.bit_status=1 group by product.id_product ORDER BY publication_date DESC`
    
    
    conection.query(sql1,(err,rows,fields)=>{
        if(err) res.json(err);//posible error en consulta
        else{
            
            
            //Funcion para dar formato a los precios

            const rows2 = rows
                .map(row => ({
                    ...row,
                    dou_price: formatoPrecio(row.dou_price)

                }))

            res.json(rows2)//todo salio bien
        }
        })
}

/*
{
    "fk_id_department":"",
    "fk_id_product_category":"",
    "dou_price":""
}
*/

//Funcion para eliminar producto dado un id
controller.deleteProduct = (req,res)=>{
    const {id} = req.params

    let sql = `SELECT var_name FROM plazitanet.photographs WHERE fk_id_product =${id}`
    let sql2 =`delete from PRODUCT where id_product =${id}`
    
    conection.query(sql,(err,rows,fields)=>{
        if(err) res.json({status:'1', msg:sqlMessage});
        else{
            
            //Elimina todas las imagenes que contiene el producto del servidor
            const files = []

            for(var index in rows){
                console.log(index + "--------------------")
                console.log(rows[index].var_name)
                files.push("src/dbimagesProducts/" + rows[index].var_name)

            }

            Promise.all(files.map(file => fs.unlink(file)))
            .then(() => {
                console.log('Todos los archivos se eliminaron del servidor')
            })
            .catch(err => {
                console.error('Ocurrio un error al borrar los archivos', err)
            })

            //Elimina el producto
            conection.query(sql2,(err,rows,fields)=>{
                if(err) res.json({status:'0', msg:err.sqlMessage});
                else{
                    res.json({status:'200', msg:'Producto Eliminado'})
                }
            })

        }
    })

}


controller.postImage = (req,res) =>{

    const{id} = req.params
    const name = req.file.filename
    const extension = req.file.mimetype

    let sql= `INSERT INTO photographs(var_name, var_extension, fk_id_product)
        VALUES('${name}','${extension}',${id})`

    conection.query(sql, (err, rows) => {
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            res.send({status:'200', msg:'Imagen agregada al producto'})
        }
        
    })
    
}


controller.getProducto=(req,res)=>{
    const{id_producto}=req.params

    let sql1=`SELECT prod.id_product, prod.fk_id_user, prod.var_name AS titulo, prod.text_description, prod.int_views, prod.dou_price, 
    u.var_name AS nombre, u.var_lastname AS apellido, cat.var_name AS categoria, dep.var_name AS departamento, stat.var_name AS estado FROM product prod 
    INNER JOIN user u ON prod.fk_id_user=u.id_user
    INNER JOIN product_category cat ON prod.fk_id_product_category=cat.id_product_category
    INNER JOIN department dep ON prod.fk_id_department=dep.id_department
    INNER JOIN product_status stat ON prod.fk_id_product_status=stat.id_product_status
    WHERE id_product=${id_producto}`

    conection.query(sql1,(err,rows,fields)=>{
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            
            //Funcion para dar formato a los precios
            rows[0].dou_price = formatoPrecio(rows[0].dou_price)

            res.json(rows)
        }
    })
}

controller.getProductImages=(req,res)=>{
    const{id_producto}=req.params

    let sql1=  `SELECT var_name,var_extension  FROM photographs WHERE fk_id_product=${id_producto} `

    conection.query(sql1,(err,rows,fields)=>{
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            res.json(rows)
        }
    })
}

controller.productUser = (req, res) => {
    const { id } = req.params
    let sql1 = `SELECT product.id_product,photographs.id_photographs,photographs.var_name AS var_name_photo,fk_id_user,fk_id_department,`
        + ` product.var_name,text_description,dou_price,publication_date, expiration_date, bit_availability, product_category.var_name AS categoria`
        + ` from product LEFT OUTER JOIN  photographs ON photographs.fk_id_product=product.id_product INNER JOIN product_category ON product_category.id_product_category= product.fk_id_product_category where `
    sql1 += `product.fk_id_user=${id} group by product.id_product ORDER BY publication_date DESC`

    conection.query(sql1, (err, rows, fields) => {
        if (err) res.json(err);//posible error en consulta
        else {

            //console.log(rows[0].bit_availability[0])

            const isAvailable = (dato)=>{
                if(dato == 0){
                    return false
                }else{
                    return true
                }
            }

            const rows2 = rows
                .map(row => ({
                    ...row,
                    dou_price: formatoPrecio(row.dou_price),
                    expiration_date: new Date(row.expiration_date).toLocaleString(),
                    bit_availability: isAvailable(row.bit_availability[0])
                }))

            res.json(rows2)//todo salio bien
        }
    })
}

//////////////////////LISTAR PRODUCTOS FAVORITOS/////////////////////////////////
controller.getWishlist = (req, res) => {
    const { id_user } = req.params

    sql1 = `SELECT * FROM user WHERE id_user=${id_user}`


    sql3 = `SELECT pr.id_product,pr.var_name, pr.text_description, pr.dou_price, ph.id_photographs,ph.var_name as var_name_photo FROM product pr
        INNER JOIN wish_list ON pr.id_product= wish_list.fk_id_product 
        INNER JOIN photographs ph ON  pr.id_product=ph.fk_id_product
        INNER JOIN user ON user.id_user = pr.fk_id_user
        WHERE wish_list.fk_id_user=${id_user} AND bit_availability = 1 and user.bit_status=1 group by pr.id_product ORDER BY pr.publication_date DESC`

    conection.query(sql1, (err, rows, fields) => {
        if (err) res.json({ status: '0', error: err.sqlMessage })
        else {
            if (rows.length != 0) { //encontro al usuario
                conection.query(sql3, (err, rows, fields) => {
                    if (err) res.json({ status: '0', error: err.sqlMessage })//posible error en consulta a BDD
                    else {
                        if (rows.length != 0) {
                                const rows2 = rows
                                .map(row => ({
                                    ...row,
                                    dou_price: formatoPrecio(row.dou_price)
                
                                }))

                            res.json({ status: '200', msg: rows2 })
                        }
                        else { res.json({ status: '202', msg: "No hay productos en la lista de deseos" }) }
                    }
                })
            } else { res.json({ status: '201', msg: "Usuario no existe o es incorrecto" }) }
        }
    })
}


controller.editProduct=(req,res)=>{
    const{id_product}=req.params
    const{var_name, dou_price, text_description, 
        fk_id_product_category, fk_id_product_status, fk_id_department}=req.body;

    let sql1= `UPDATE product SET 
    var_name="${var_name}", dou_price=${dou_price}, text_description="${text_description}", 
    fk_id_product_category=${fk_id_product_category}, 
    fk_id_product_status=${fk_id_product_status}, fk_id_department=${fk_id_department}
    WHERE id_product=${id_product}`

    conection.query(sql1,(err,rows, fields)=>{
        if(err)
            return res.json({status:'0', msg:err.sqlMessage})
        else
        return res.json({status:'200', msg:'El producto se ha actualizado correctamente'})
       
    })
}

controller.updatePhotos=(req,res)=>{
    arr=req.body
    filesArr=[]
    for(var index in arr){
        console.log(arr[index].nm)
        filesArr.push("src/dbimagesProducts/" + arr[index].nm)
        conection.query(`call deletePhotos("${arr[index].nm}")`,(err,rows, fields)=>{
            if(err)
                console.log(err.sqlMessage)
            else
             console.log('Fotos actualizadas')
           
        })

        }
        console.log(filesArr)
       // return res.end({status:'201', msg:'borrado'})
        Promise.all(filesArr.map(file => fs.unlink(file)))
        .then(() => {
            console.log('Todos los archivos se eliminaron del servidor')
        })
        .catch(err => {
            console.error('Ocurrio un error al borrar los archivos', err)
        })

}

//Version 2 traer un producto al modal para editar 

controller.getProductoModal=(req,res)=>{
    const{id_producto}=req.params

    let sql1=`SELECT p.id_product,  p.var_name , p.text_description,  p.dou_price, 
    p.fk_id_product_category, p.fk_id_product_status, p.fk_id_department , product_category.var_name AS categoria FROM product p INNER JOIN product_category ON product_category.id_product_category= p.fk_id_product_category
    WHERE id_product=${id_producto}`

    conection.query(sql1,(err,rows,fields)=>{
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            res.json(rows)
        }
    })
}

controller.imagenes=(req,res)=>{
    const{fk_id_product}=req.params
    let data=[]
    let sql=`SELECT var_name from photographs WHERE fk_id_product=${fk_id_product}`
    let arr=[]
    conection.query(sql,(err,rows,fields)=>{
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            for(i in rows){
                data.push( rows[i].var_name)
            }
           res.send(data)
           }
       
        
    })
    
  //  const data= fs2.readFileSync(path.join(__dirname, '..\\dbimagesProducts\\'+))
}

controller.views=(req,res)=>{
    let sql=`CALL verifiacionVisitas()`
    conection.query(sql,(err,rows,fields)=>{
        if(err) res.json({status:'0', msg:err.sqlMessage});
        else{
            res.json({status:'200', msg:'Vista agregada'})
        }
    })
}

module.exports = controller