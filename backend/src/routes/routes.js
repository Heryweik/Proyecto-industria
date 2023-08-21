const routers = require('express').Router()//Direccionamiento en express

const customerU = require('../controllers/customerUser')//funciones de llamada por parte del usuario
const customerA = require('../controllers/customerAdmin')//funciones de llamada por parte del administrador
const customerO = require('../controllers/customerOptions')//funciones de llamada por parte del administrador

const path = require('path')
const multer = require('multer')

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../dbimagesProducts/'),
    filename: (req, file, cb) => {
        const{id} = req.params
        let ext = file.originalname.split(".")
        ///Id del producto_Plazitanet_fecha_extension
        cb(null,id + '_plazitanet_' + Date.now() + '.' + ext[ext.length-1])
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')


//Direcciones de prueba
routers.get('/userTest', customerU.test)

routers.get('/adminTest', customerA.test)

//Get User Para recuperar datos a un id Especifico /se debe especificar el id en la ruta/
routers.get('/user/:id',customerU.getUser)

//Get que retorna true si es admin y false si no lo es
routers.get('/userRol/:id',customerU.getRol)

//Agregar usuario (body -> json)
routers.post('/user',customerU.postUser)

//Eliminar usuario dado un id /se debe especificar el id en la ruta/
routers.delete('/user/:id',customerU.deleteUser)

//Modificar usuario dado un id  (body -> json) /se debe especificar el id en la ruta/
routers.put('/user/:id',customerU.updateUser)

//auth
routers.post('/auth', customerU.auth)

//trae todos los departamentos
routers.get('/departament',customerO.getDepartament)

//trae todas las categorias de productos
routers.get('/productCategory',customerO.getCategory)

//trae todas las categorias de denuncias
routers.get('/complaintCategories',customerO.getComplaintCategories)

//Envia la actualizacion de la contraseña body => var_email, tex_password
routers.put('/userPassword',customerU.updatePasswordUser)

//Verificacion del login
routers.get('/auth',customerU.auth)

//enviar correo
routers.post('/credential', customerU.envioCodigoCorreo )

//verificar el codigo que se ha ingresado
routers.post('/credential/confirm', customerU.confirmaCodigo)

//trae los productos disponible segun los diferentes filtros
routers.post('/productFiltering',customerO.productFiltering)

routers.get('/productUser/:id',customerO.productUser)

//Agregar un producto
routers.post('/newProduct',customerO.postProduct)

//Subir imagenes
routers.post('/product/postImage/:id', fileUpload, customerO.postImage)

//Eliminar un producto dado un id // Elimina todas las imagenes del producto
routers.delete('/productDelete/:id',customerO.deleteProduct)

//suscribir usuario
routers.post('/subscribeCategory',customerU.subscribeUser)

//dar de baja suscripcion de usuario
routers.post('/unsubscribeCategory',customerU.Unsubscribe)

//listar suscripciones
routers.get('/getSubscriptions/:id_user', customerU.getSubscriptions)

//dar de baja favorito
routers.post('/deleteFav',customerU.deleteFavorite)
//listar favoritos
routers.get('/getFavs/:id_user', customerO.getWishlist)
//agregar a favoritos
routers.post('/addFav', customerU.addFavorite)

//Agrega calificacion
routers.post('/addcalifications',customerU.qualifications)

//Traer calificación individual
routers.post('/individualScore',customerU.getOneQualification)

//Agregar comentario
routers.post('/adddenuncia',customerU.denuncia)

//Agregar Comentario
routers.post('/addComment',customerU.comentario)

//listar comentarios
routers.get('/comments/:fk_id_product',customerU.getComments)

//Modificar Vista
routers.get('/vista/:id',customerU.vista)

//traer un solo producto
routers.get('/getProducto/:id_producto',customerO.getProducto)

//traer todas las imagenes de un producto
routers.get('/productImages/:id_producto', customerO.getProductImages)

/* Se usan a traves de sockets
//Crear un nuevo chat
routers.post('/chat/newchat',customerC.newChat)

//Traer datos de un chat
routers.get('/chat/:id_user',customerC.getChats)

//Traer ultimo mensaje del chat y la cantidad de mensajes no leidos
routers.get('/chat/lastMessage/:id_chat',customerC.getlastMessage)


//routers.put('/editorImagenes/:id',customerU.PudProducto)

//crear mensaje
routers.post('/addMessage' , customerU.addMessage)

//Lista Mensaje
routers.get('/getMessage/:id',customerU.listarMenssage)
*/

//editar producto
routers.put('/editProduct/:id_product',customerO.editProduct)

//traer un producto version para la edicion del producto del modal
routers.get('/getProdMod/:id_producto',customerO.getProductoModal)


routers.get('/prom/:fk_id_user_qualified', customerU.avgQualif)
//promedio estrellas

routers.get('/imagenes/:fk_id_product', customerO.imagenes)

routers.post('/deleteFiles',customerO.updatePhotos)

//obtener datos de grafica de categorias
routers.get('/categoryChart/:fk_id_product_category',customerA.productsCategory)

//agregar una categoria
routers.post('/admin/addCategory', customerA.addCategory)

//actualizar una categoria
routers.post('/admin/updateCategory', customerA.updateCategory)

//traer una categoria
routers.get('/admin/getCategory/:id_product_category', customerA.getOneCategory)

//eliminar categoria
routers.put('/admin/deleteCategory', customerA.deleteCategory)

//listar denuncias
routers.get('/admin/getDenuncias/:id',customerA.listarDenuncia)

//Eliminar usuario y productos por el id de usuario
routers.delete('/deleUser/:id',customerU.deleteUserTotal)

//Modificar Estado del usuario
routers.delete('/admin/updateEstado/:id',customerA.cambiarEstado)

//ListadoUsuario 
routers.get('/admin/listUser',customerA.listadoUsuario)
//listadoNumeroDenunciasPor usuario
routers.get('/admin/numDenun/:id',customerA.listadoUsuarioDenun)

//Eliminar Denuncia de usuario
routers.delete('/admin/deleteDenuncia/:id',customerA.eliminarDenuncia)

//obtener datos de grafica de registrados
routers.post('/registerChart',customerA.amountUserRegister)

//obtener datos de grafica de categorias
routers.get('/categoryChart',customerA.amountCategory)

//Trae el tiempo de expiración de los productos
routers.get('/product/expiryTime',customerA.getExpiryTime)

//Actualiza el plazo de expiración de los productos
routers.get('/product/expiryTime/:days',customerA.setExpiryTime)

//agregar vista
routers.get('/views',customerO.views)

routers.post('/getviews',customerA.getViews)

//trae si un chat tiene suficientes comentarios para activar la calificación
routers.get('/chat/isQualifying/:id_chat',customerU.isQualifying)



//exportacion de rutas
module.exports = routers

 