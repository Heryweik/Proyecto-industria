import { Component, OnInit } from '@angular/core';

import { EquipoService, filter, traerProducto, getProduct, Images, qualification,
  subscribe, requestSubscriptions,loadComment, subscription, deleteWishlist, reqQualify, Comment, promedio} from '../../SERVICES/equipo.service';

import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { WebSocketsService } from "../../SERVICES/web-sockets.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  producto: getProduct[]=[]
  images: Images[]=[]
  comments :loadComment[]=[]
  qualifyAverage: promedio[]=[]

  firstImage: string=''
  qlfy: qualification ={
    fk_id_user_qualified: 0,
    fk_id_user_review: '', 
    tin_score: 0
  }
  response: reqQualify={
    status:'',
    msg:''
  }
  public toggleButton: boolean = false;
  public paragraph:string=''
  public bool: boolean=true
  public commentBool: boolean=true;
  public token: number=0
  public promedio: number=0;
 public totalComments:  number=0;
 public date:string=new Date().toLocaleString()
 public block:boolean=true;
 public cond1:boolean=false;
  public cond2:boolean=false;
  public cond3:boolean=false;
  public cond4:boolean=false;
  public cond5:boolean=false;
  constructor(
    private equipoService:EquipoService, 
    private router: Router,
    private WebSocketsService:WebSocketsService) {
  }

  ngOnInit(): void {

      this.toggleButton=false
       
      if(localStorage.getItem("token")){
        this.user = Number(localStorage.getItem('token'))
        this.block=false;
      }
      // Traer los departamentos
      this.equipoService.getDepartments().subscribe(res=>{
        this.departments = <any>res
      }, error =>{
        console.log(error) 
      })

      // Traer todas las categorias
      this.equipoService.getProductCategories().subscribe(res=>{
        this.categories = <any>res
      }, error =>{
        console.log(error) 
      })

      // Suscripción
      this.nuevaSuscripcion.fk_id_user = localStorage.getItem('token');
      this.filtro.id_user = localStorage.getItem('token');

      this.updateSubscriptionList()

      // Filtro
      this.filtrar()

      //Denuncia
      this.equipoService.$modalComplaint.subscribe((valor) => {
        this.modalComplaint = valor
      })
      this.modalComplaint = false
  }
  filterForm=new FormGroup({
    ubicacion: new FormControl(''),
    precio: new FormControl(''),
    categoria: new FormControl('')    
  });

  get ubicaControl():FormControl{
    return this.filterForm.get('ubicacion') as FormControl
  }
  get precioControl():FormControl{
    return this.filterForm.get('precio') as FormControl
  }
  get catControl():FormControl{
    return this.filterForm.get('categoria') as FormControl
  }

  lista:traerProducto[]=[]

  filtro: filter={
    fk_id_department:"",
    dou_price:"",
    fk_id_product_category:"",
    id_user:""
    }

  nuevaSuscripcion: subscribe = {
    fk_id_user: "",
    fk_id_product_category: ""
  }

  eliminarSuscripcion: subscribe = {
    fk_id_user: "",
    fk_id_product_category: ""
  }
    
  // Traer lista de suscripciones del usuario
  private updateSubscriptionList(){
    if(this.nuevaSuscripcion.fk_id_user != null){
         
      this.equipoService.getSubscriptions("" + this.nuevaSuscripcion.fk_id_user).subscribe(res=>{
        var request:requestSubscriptions = <any>res
        this.UserSubscription = request.msg

        this.UserSubscriptionID = []
        for(var index in this.UserSubscription){
          this.UserSubscriptionID.push(this.UserSubscription[index].id_product_category)
        }
      }, error =>{
        console.log(error) 
      })
    } 
  }
    
  filtrar(){
    this.nuevaSuscripcion.fk_id_product_category = this.filtro.fk_id_product_category;
    //Aparecer y desaparecer el boton de suscribirse
    if((this.filtro.fk_id_product_category) != "" && this.nuevaSuscripcion.fk_id_user != "" && this.nuevaSuscripcion.fk_id_user != null){
      this.enableSubscription = true

      if(this.UserSubscriptionID.includes(+this.filtro.fk_id_product_category)){
        this.subscribed = true
      }else{
        this.subscribed = false
      }

    }else{
      this.enableSubscription = false
    }

    //Ejecutar funcion 
     this.equipoService.filtrar(this.filtro).subscribe(res=>{
        this.lista=<any>res
        this.router.navigate([`/navigationProducts`])
        console.log(this.lista)
    }, error =>{
      console.log(error)
    })
  }

    ////PAGINACION
  pageSize=12;
  desde:number= 0;
  hasta:number=12;

  enableSubscription:boolean = false
  subscribed:boolean = false
  modalComplaint:boolean = false

  departments:any[] = []
  categories:any[] = []
  UserSubscription:subscription[] = []
  UserSubscriptionID:number[] = []

  suscribirse(){

    if(this.subscribed === false){ /// Si no esta suscrito
      this.equipoService.addsubscription(this.nuevaSuscripcion).subscribe(res=>{
        var info:BookInfo = <any>res

        /// Alerta
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: info.msg,
          showConfirmButton: false,
          timer: 1500
        })

        console.log(info.msg)

        this.subscribed = true
        this.updateSubscriptionList()
      }, error =>{
        console.log(error)
      })

    }else{ /// Si esta suscrito, anular suscripción

      /// Alerta cancelar sub
      Swal.fire({
        title: '¿Anular la suscripción de ' + this.UserSubscription[this.UserSubscriptionID.indexOf(+this.nuevaSuscripcion.fk_id_product_category)].var_name + '?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'No',
        confirmButtonText: 'Anular'
      }).then((result) => {
        if (result.isConfirmed) {

          /// Llama a la funcion de borrar suscripción
          this.equipoService.deleteSubscription(this.nuevaSuscripcion).subscribe(res=>{
            var info:BookInfo = <any>res
            console.log(info.msg)
    
            this.subscribed = false
            this.updateSubscriptionList()
          }, error =>{
            console.log(error)
          })

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Suscripción anulada",
            showConfirmButton: false,
            timer: 1500
          })
        }
      })


    }
    
  }

  cambiarPagina(e:PageEvent){
    console.log(e)
    this.desde=e.pageIndex*e.pageSize;
    this.hasta=this.desde+e.pageSize;
  }

  addWihlist(id:string,item:traerProducto){
    let data:deleteWishlist = {
      id_user:localStorage.getItem("token"),
      id_product:id
    }
    this.equipoService.addWishlist(data).subscribe(
      res=>{
        let afterDelete:after = <any> res
        if (afterDelete.status=="201" ||
          afterDelete.status=="202" ||
          afterDelete.status=="203" ||
          afterDelete.status=="0") {
            window.alert(afterDelete.msg)
        } else{
          item.whishlist="true"
        }
      }
    )
  }

  deleteWihlist(id:string,item:traerProducto){
    let data:deleteWishlist = {
      id_user:localStorage.getItem("token"),
      id_product:id
    }
    this.equipoService.deleteWishlist(data).subscribe(
      res=>{
        let afterDelete:after = <any> res
        if (afterDelete.status=="201" ||
          afterDelete.status=="202" ||
          afterDelete.status=="203" ||
          afterDelete.status=="0") {
            window.alert(afterDelete.msg)
        } else{
          item.whishlist="false"
        }
      }
    )
  }


  

cargarProducto(id_producto:string){
  localStorage.setItem('productToken',id_producto)
  this.equipoService.getOneProduct(id_producto).subscribe(res=>{
    this.producto=<any>res
    this.qlfy.fk_id_user_qualified=this.producto[0].fk_id_user
    this.qlfy.fk_id_user_review=localStorage.getItem('token')
    this.average(this.producto[0].fk_id_user);
    console.log(this.producto)
  })
  }

  cargarImagenes(id_producto:string){
    this.equipoService.getImages(id_producto).subscribe(res=>{
      this.images=<any>res
      this.firstImage=this.images[0].var_name
    })
  }

  calificar(score:number){
    this.qlfy.tin_score=score
    this.equipoService.qualify(this.qlfy).subscribe(res=>{
      this.response=<any>res
      if(this.response.status=='203'){
        this.toggleButton=true
        this.paragraph="Ya has calificado a este vendedor anteriormente"
        console.log('Usuario ya fue calificado')}
        else {
        this.toggleButton=false
        console.log(this.qlfy)
        }
    },
    err=>console.log(err))
  }

  denunciar(){
    this.modalComplaint = true
  }

  sumaVista(id:string|null){ 
    this.equipoService.views(id).subscribe(res=>{
      console.log(res)
    })
  }
  //promedio estrellas
average(id:number){
  this.equipoService.getAVG(id).subscribe(res=>{
    this.qualifyAverage=<any>res
    this.promedio=this.qualifyAverage[0].PROMEDIO
    if(this.promedio >0 && this.promedio<=1){
        this.cond1=true;
    }else if((this.promedio>=1.5 && this.promedio<=2)||(this.promedio>2 && this.promedio<2.5)){
        this.cond1=true; this.cond2=true; 
    }else if((this.promedio>=2.5 && this.promedio<=3) ||( this.promedio>3 && this.promedio<3.5)){
        this.cond1=true; this.cond2=true; this.cond3=true; 
    }else if((this.promedio>=3.5 && this.promedio<=4) || ( this.promedio>4 && this.promedio<4.5)){
        this.cond1=true; this.cond2=true; this.cond3=true;  this.cond4=true;
    }else if(this.promedio>=4.5 && this.promedio<=5){
        this.cond1=true; this.cond2=true; this.cond3=true;  this.cond4=true; this.cond5;
    }else{
      this.cond1=false;
      this.cond2=false;
      this.cond3=false;
      this.cond4=false;
      this.cond5=false;
    }
  })
}
//comentarios
showComment(){
  this.bool=false
}
hideComment(){
  this.bool=true
}

commentForm = new FormGroup({
  comentario: new FormControl('', [Validators.required]),
});

get commentControl(): FormControl {
  return this.commentForm.get('comentario') as FormControl; 
}
comentario:Comment = {
  fk_id_user: "",
  fk_id_product:"",
  text_contents: ""
}

set(id: string){
  localStorage.setItem('idProducto', JSON.stringify(id))
}
addComment(){
    this.comentario.fk_id_user = "" + localStorage.getItem("token")
    this.comentario.fk_id_product=""+localStorage.getItem("idProducto")
    this.equipoService.addComment(this.comentario).subscribe(res => {
        console.log(<any>res)
        this.comentario.text_contents=""
        this.loadComments(this.comentario.fk_id_product)
    },
    err => console.log(err))
    
}

loadComments(id: string|null){
  this.equipoService.getProductComments(id).subscribe(res=>{
    this.comments=<any>res;
    this.totalComments=this.comments.length
    
    console.log(this.date)

    console.log(this.comments)
  })
}

user:number = 0

newChat(idUser:number,idProduct:number){
  this.WebSocketsService.emit("newchat",{"fk_id_product":idProduct, "fk_id_user_buyer":idUser, "fk_id_user_seller":localStorage.getItem('token')})
  this.WebSocketsService.listen("newchatresponse").subscribe((data:any)=>{
    if (data.status=='200'||data.status=='202') this.router.navigate([`navigationProducts/chats/${data.id_chat}`])
  })
}
}



interface BookInfo {
  status : string ;
  msg: string;
}

interface after{
  "status": string,
  "msg": string
}