if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}//configuracion para la utilizacion de variables de entorno

//Llama la dependencia de Mysql
const mysql= require('mysql');
//Crea todos los parametros que se requieren para la conexion
const conexion=mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    port:process.env.portdb,
    database:process.env.database
});

conexion.connect((err)=>{
    if(err){
        console.log('A ocurrido un error: '+err)
    }else{
        console.log('la base de Datos se conecto')
    }
});


//Exportamos la conexion
module.exports=conexion;