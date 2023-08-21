import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { EquipoService,wishListProducts,deleteWishlist,getProduct,Images, qualification, reqQualify, loadComment, Comment,  promedio } from '../../SERVICES/equipo.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebSocketsService } from "../../SERVICES/web-sockets.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})

  
export class WishListComponent implements OnInit {
 
 producto: getProduct[]=[]
 images: Images[]=[]
 comments: loadComment[]=[]
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
 public cond1:boolean=false;
 public cond2:boolean=false;
 public cond3:boolean=false;
 public cond4:boolean=false;
 public cond5:boolean=false;
 

  constructor
    (
      private paginator: MatPaginatorIntl,
      private equipoService:EquipoService,
      private WebSocketsService:WebSocketsService,
      private router:Router
    ) {
    paginator.itemsPerPageLabel = "Productos por pagina:"
    paginator.firstPageLabel = "Primer página"
    paginator.lastPageLabel = "Ultima página"
    paginator.nextPageLabel = "Siguiente página"
    paginator.previousPageLabel = "Página anterior"
  }

errorDelete = false
error = false
  afterGet:after={
    status:"0",
    msg:[
      {
        id_photographs : 0,
        id_product: 0,
        var_name_photo: "null",
        var_name: "null",
        text_description: "null",
        dou_price: ""
      }
    ]
  }

  afterDelete:after={
    status:"0",
    msg:[
      {
        id_photographs : 0,
        id_product: 0,
        var_name_photo: "null",
        var_name: "null",
        text_description: "null",
        dou_price: ""
      }
    ]
  }

  user:number = 0

  ngOnInit(): void {
    this.user = Number(localStorage.getItem('token'))
    this.loadProducts()
   
    this.toggleButton=false
  }

  loadProducts(){
    this.equipoService.listWishlist(localStorage.getItem("token")).subscribe(
      res=>{
        this.afterGet = <any>res
        console.log(this.afterGet);
        
        if (this.afterGet.status == "202") {
          this.error = true
        }else if (this.afterGet.status == "201") {
          this.error = true
        }else if (this.afterGet.status != "200"){
          this.error = true
        }
      },
      err=> this.error = true
    )
  }

  pageSize = 12;
  desde: number = 0;
  hasta: number = 12;

  cambiarPagina(e: PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  removeProduct(id:string){
    let resultado = window.confirm('¿Esta seguro de eliminar el producto?')
    if (resultado) {
      let data:deleteWishlist = {
        id_user:localStorage.getItem("token"),
        id_product:id
      }
      this.equipoService.deleteWishlist(data).subscribe(
        res=>{
          this.afterDelete = <any> res
          if (this.afterDelete.status=="201" ||
            this.afterDelete.status=="202" ||
            this.afterDelete.status=="203" ||
            this.afterDelete.status=="0") {
              this.errorDelete = true
          } else{
            this.loadProducts()
          }
        }
      ) 
    }
  }
  
  
 // modal 
 cargarProducto(id_producto:string){
  this.equipoService.getOneProduct(id_producto).subscribe(res=>{
    this.producto=<any>res
    this.qlfy.fk_id_user_qualified=this.producto[0].fk_id_user
    this.qlfy.fk_id_user_review=localStorage.getItem('token')
    this.average(this.producto[0].fk_id_user);
    console.log(this.producto)
  },
  err => console.log(err))
  }

  cargarImagenes(id_producto:string){
    this.equipoService.getImages(id_producto).subscribe(res=>{
      this.images=<any>res
      this.firstImage=this.images[0].var_name
    },
    err => console.log(err))
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
    err => console.log(err))
  }
  
  sumaVista(id:string){
    this.equipoService.views(id).subscribe(res=>{
      console.log(res)
    },
    err => console.log(err))
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
      console.log(this.comments)
    })
  }

  newChat(idUser:number,idProduct:number){
    this.WebSocketsService.emit("newchat",{"fk_id_product":idProduct, "fk_id_user_buyer":idUser, "fk_id_user_seller":localStorage.getItem('token')})
    this.WebSocketsService.listen("newchatresponse").subscribe((data:any)=>{
      if (data.status=='200'||data.status=='202') this.router.navigate([`navigationProducts/chats/${data.id_chat}`])
    })
  }
}

interface after{
  "status": string,
  "msg": wishListProducts[]
}