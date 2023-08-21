const conection = require('../config/connection')
const controller = {}//definicion de controller que guardara las rutas

//funcion de prueba
controller.test = (req,res) => {
    res.send('get routes admin')
}

controller.productsCategory = (req,res) =>{
    const {fk_id_product_category} = req.params
    let sql = `SELECT var_name,int_views FROM product as pp where fk_id_product_category=${fk_id_product_category}`
    +` and bit_availability=1 order by int_views DESC LIMIT 10;`

    if (fk_id_product_category=='0') {
        sql = `SELECT var_name,int_views FROM product as pp where `
        +` bit_availability=1 order by int_views DESC LIMIT 10;`
    }

    conection.query(sql,(err,rows,fields)=>{
        if (err) {
            res.json({status:'0', msg:err.sqlMessage});
        }
        let chartLabel=[];
        let chartData=[];
        rows.map(data=>{
            chartLabel.push(data.var_name)
            chartData.push(data.int_views)
        })

        res.json({status:'200', 'labels':chartLabel, 'data':chartData})
    })
}

//agregar categoria
controller.addCategory=(req,res)=>{
    const {var_name} =req.body;
    //console.log( typeof var_name)
    let sql=`INSERT INTO product_category (var_name) VALUES ("${var_name}")`
    let sql1=`SELECT * FROM product_category WHERE var_name="${var_name}"`
    
    //console.log(var_name)

    conection.query(sql1,(err,rows)=>{
        if(err) res.json({status:"0", msg: err.sqlMessage})
        else {
            if(rows.length==0){
                conection.query(sql,(err,rows)=>{
                    if(err) res.json({status:"0", msg:err.sqlMessage})
                    else{
                        res.json({status:"200", msg:"Se ha guardado la categoria "+ var_name})
                    }
                })
            }else{
                res.json({status:"201", msg:"Ya existe la categoria"})
            }
            }
        })
    }
//actualizar categoria
controller.updateCategory=(req,res)=>{
    
    const {var_name, id_product_category} =req.body;
    //console.log(id_product_category +" "+ var_name)
    let sql=`UPDATE product_category SET var_name= "${var_name}" WHERE id_product_category=${id_product_category}`
    let sql1=`SELECT * FROM product_category WHERE var_name="${var_name}"`
    
    

    conection.query(sql1,(err,rows)=>{
        if(err) res.json({status:"0", msg: err.sqlMessage})
        else {
            if(rows.length==0){
                conection.query(sql,(err,rows)=>{
                    if(err) res.json({status:"0", msg:err.sqlMessage})
                    else{
                        res.json({status:"200", msg:"Cambios actualizados"+ var_name})
                    }
                })
            }else{
                res.json({status:"201", msg:"Ya existe la categoria"})
            }
            }
        })
}

//traer una categoria
controller.getOneCategory=(req,res)=>{
    const{id_product_category}=req.params
    let sql=`SELECT * from product_category WHERE id_product_category=${id_product_category}`

    conection.query(sql,(err,rows)=>{
        if(err){ res.json({status:"0", msg:err.sqlMessage})}
        else{
            res.json(rows)
        }
    })

}

// eliminar categoria : Actualiza la categoria del producto a indefinida y elimina la categoria


controller.deleteCategory=(req,res)=>{
    const {id_product_category, var_name}=req.body

    //console.log(id_product_category)
    //console.log(var_name)
    sql1=`call updateCategory(${id_product_category})`
    sql2=`DELETE from product_category WHERE id_product_category=${id_product_category}`

    conection.query(sql1,(err,rows)=>{
        if(err) return res.json ({status:"01", msg: err.sqlMessage})
        else{
            conection.query(sql2,(err,rows)=>{
                if(err) return res.json ({status:"02", msg: err.sqlMessage})
                else{
                    return res.json({status:"200", msg: "Se ha eliminado la categoria"})
                }
            })
        }
    })

}

controller.amountUserRegister = (req,res) =>{
    const {firstDate,lastDate} = req.body

    let sql = `SELECT COUNT(*) as amount, date_format(u.registration_date,'%d/%m/%Y') as date from plazitanet.user as u `
    +`WHERE u.bit_status=1 AND u.bit_rol=1 AND u.registration_date between '${firstDate}'`
    +` AND '${lastDate}' group by date order by u.registration_date`

    if (lastDate=='current') {
        sql = `SELECT COUNT(*) as amount, date_format(u.registration_date,'%d/%m/%Y') as date from plazitanet.user as u `
        +`WHERE u.bit_status=1 AND u.bit_rol=1 AND u.registration_date between '${firstDate}'`
        +` AND current_timestamp() group by date order by u.registration_date`
    }

    conection.query(sql,(err,rows,fields)=>{
        if (err) {
            res.json({status:'0', msg:err.sqlMessage});
        }
        if (rows.length<1) {
            res.json({status:'200', 'labels':[], 'data':[], 'up':{label:"",value:0}, 'down':{label:"",value:0}})
        }else{
            let chartLabel=[];
            let chartData=[];
            let up ={
                label:"",
                value:-1
            }
            let down ={
                label:rows[0].date,
                value:rows[0].amount
            }
            rows.map(data=>{
                chartLabel.push(data.date)
                chartData.push(data.amount)
                if (data.amount>up.value) {
                    up={
                        label:data.date,
                        value:data.amount
                    }
                }
                if (data.amount<=down.value) {
                    down={
                        label:data.date,
                        value:data.amount
                    }
                }
            })

            res.json({status:'200', 'labels':chartLabel, 'data':chartData, 'up':up, 'down':down})
        }
        
    })
}

controller.amountCategory = (req,res) =>{

    let sql = `SELECT count(*) as amount, c.var_name FROM plazitanet.subscription as s, plazitanet.product_category as c where`
    +` s.fk_id_product_category=c.id_product_category group by c.var_name order by amount desc`

    conection.query(sql,(err,rows,fields)=>{
        if (err) {
            res.json({status:'0', msg:err.sqlMessage});
        }
        if (rows.length<1) {
            res.json({status:'200', 'labels':[], 'data':[]})
        }else{
            let chartLabel=[];
            let chartData=[];
            rows.map(data=>{
                chartLabel.push(data.var_name)
                chartData.push(data.amount)
            })

            res.json({status:'200', 'labels':chartLabel, 'data':chartData})
        }
        
    })
}


//Listar Denuncias
controller.listarDenuncia =(req, res)=>{
    const{id}=req.params
    
    let sql28=`call listUsuarioDenuncia(${id})`

    conection.query(sql28, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json(rows[0])
        }
    })
    
}

/*Modificar Estado*/
controller.cambiarEstado =(req, res)=>{
    const{id}=req.params

    let sql13=`call modificarEstado(${id})`

    conection.query(sql13, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200', msg:rows})
        }
    })
    
}
//
/*
controller.listadoUsuario =(req, res)=>{
    const{id}=req.params

    let sql14=`call ListadoUsuarios(${id})`

    conection.query(sql14, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200', msg:rows})
        }
    })
     
}*/

//Lista de  usuarios con denuncia
controller.listadoUsuario =(req, res)=>{
    
    let sql15=`call ListadoUsuarios();`

    conection.query(sql15, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json(rows[0])
        }
    })
     
}
//Listado de usuarios por numero de denuncia
controller.listadoUsuarioDenun =(req, res)=>{
    const{id}=req.params
    
    let sql16=`call ListadoUsuarioNumDenu(${id});`

    conection.query(sql16, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json(rows[0])
        }
    })
     
}

//Eliminar Denuncia de Usuario
//Listar Denuncias
controller.eliminarDenuncia =(req, res)=>{
    const{id}=req.params
    
    let sql17=`call eliminarDenuncia(${id})`

    conection.query(sql17, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200', msg:rows})
        }
    })
    
}







controller.getExpiryTime =(req, res)=>{

    sql = `SELECT fn_getExpiryTime() AS days`
    conection.query(sql, (err,rows)=>{
        if(err){
            res.sendjson({status:-2,msg:"ERROR"})
        }else{
            res.json({status:-1, msg:rows[0].days})
        }
    })

}

controller.setExpiryTime =(req, res)=>{
    const{days} = req.params
    //console.log(req.params)
    if(days>0 && days<10000){
        sql = `CALL sp_updateExpiryTime(${days})`
        conection.query(sql, (err,rows)=>{
            if(err){
                res.json({status:-2,msg:err})
            }else{
                res.json({status:200,msg:"El plazo de expiración de los anuncios se ha actualizado"})
            }
        })
    }else{
        res.json({status:-1,msg:"Fuera del rango permitido"})
    }
    
}

controller.getViews =(req, res)=>{
    
    const {firstDate,lastDate} = req.body

    let sql = `SELECT amount_views,date_format(date_views,'%d/%m/%Y') as date_views FROM plazitanet.views WHERE date_views BETWEEN '${firstDate}'`
    +` AND '${lastDate}'`

    if (lastDate=='current') {
        sql = `SELECT amount_views,date_format(date_views,'%d/%m/%Y') as date_views FROM plazitanet.views WHERE date_views BETWEEN '${firstDate}'`
        +` AND current_timestamp()`
    }

    conection.query(sql,(err,rows,fields)=>{
        if (err) {
            res.json({status:'0', msg:err.sqlMessage});
        }
        if (rows.length<1) {
            res.json({status:'200', 'labels':[], 'data':[], 'up':{label:"",value:0}, 'down':{label:"",value:0}})
        }else{
            let chartLabel=[];
            let chartData=[];
            let up ={
                label:"",
                value:-1
            }
            let down ={
                label:rows[0].date_views,
                value:rows[0].amount_views
            }
            rows.map(data=>{
                chartLabel.push(data.date_views)
                chartData.push(data.amount_views)
                if (data.amount_views>up.value) {
                    up={
                        label:data.date_views,
                        value:data.amount_views
                    }
                }
                if (data.amount_views<=down.value) {
                    down={
                        label:data.date_views,
                        value:data.amount_views
                    }
                }
            })

            res.json({status:'200', 'labels':chartLabel, 'data':chartData, 'up':up, 'down':down})
        }
        
    })
     
}


module.exports = controller