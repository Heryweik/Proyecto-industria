import { Component, OnInit } from '@angular/core';
import { EquipoService, traerProducto, user, deleteProduct,Images, newProducto } from 'src/app/SERVICES/equipo.service';
import { NewProductsComponent } from '../new-products/new-products.component';
import { ProductsComponent } from '../products/products.component';
import { PageEvent } from '@angular/material/paginator';

import { FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-published-products',
  templateUrl: './published-products.component.html',
  styleUrls: ['./published-products.component.css']
})
export class PublishedProductsComponent implements OnInit {
  //newProducto[] se importa la clase
  
  productoList:traerProducto[]=[];
  categories:any[] = []

  public previsualizacion: any;
  public archivos: any = []; //Sera de tipo array
  public image: any; //Enviar una imagen a la vez al servidor
  
  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    //this.usuario.fk_id_user=localStorage.getItem('token')
    this.getProducList()
    this.equipoService.getProductCategories().subscribe(res=>{
      this.categories = <any>res
    }, error =>{
      console.log(error) 
    })
    this.cargadas.length=0
    this.eliminadas.length=0
  }

  getProducList(){
  this.equipoService.traeProd(localStorage.getItem('token')).subscribe(res=>{
    this.productoList=<any>res
    console.log(this.productoList)
  }, error =>{
    console.log(error)
})
  }
  
  borrarProd(id_product:string){
    
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el artículo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'No',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {

        /// Llama a la funcion de borrar producto
        this.equipoService.borrarProducto(id_product).subscribe((res) =>{
          console.log('se elimino')
          this.ngOnInit()
          }, error => {
            console.log(error);
           })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Se ha eliminado el producto",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

  }


  
  srcArray: any = [];

  capturarFile(event: any) {
    if (event.target.files.length > 0) {
      if (event.target.files.length <= 10) {
        let files = event.target.files;

        let file;
        for (let i = 0; i < files.length; i++) {
          if (this.archivos.length < 10) {
            file = files[i];
            this.archivos.push(file);
            const reader = new FileReader();
            reader.onload = (file) => {
              this.srcArray.push({
                img: reader.result,
                id: this.srcArray.length == 0 ? 0 : this.srcArray.length,
              });
            };
            reader.readAsDataURL(file);
          } else {
            window.alert('No mas de 10 imagenes');
          }
        }
      }else{
        window.alert('No mas de 10 imagenes');
      }
    }
  }
  deleteFile(id: number) {
    this.srcArray.splice(id, 1);
    this.archivos.splice(id, 1);

    for (let i = 0; i < this.srcArray.length; i++) {
      this.srcArray[i].id = i;
    }
  }
  

/////////////////////////////////////MODIFICAR


  //agregar el formGrup
  productoForm = new FormGroup({
    // nombre: new FormControl('',[Validators.required, Validators.minLength(2) ]),
    titulo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    precio: new FormControl('', [Validators.required, Validators.minLength(2)]),
    categoria: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    decripcion: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    ubicacion: new FormControl('', [Validators.required]),
  });
  /*
get nombreControl():FormControl{
  return this.loginForm.get('nombre') as FormControl
}*/

  get tituloControl(): FormControl {
    return this.productoForm.get('titulo') as FormControl;
  }
  get precioControl(): FormControl {
    return this.productoForm.get('precio') as FormControl;
  }
  get categoriaControl(): FormControl {
    return this.productoForm.get('categoria') as FormControl;
  }
  get estadoControl(): FormControl {
    return this.productoForm.get('estado') as FormControl;
  }
  get descripcionControl(): FormControl {
    return this.productoForm.get('decripcion') as FormControl;
  }
  get ubicacionControl(): FormControl {
    return this.productoForm.get('ubicacion') as FormControl;
  }
public fotos=[]
 
    setItem(id_product:string){
      localStorage.setItem("idProductoModal",id_product) //lo usamos despues para cargar el producto y actualizarlo
      this.equipoService.getUnProducto(localStorage.getItem("idProductoModal")).subscribe(res=>{
          this.producto = res[0]
          console.log(typeof this.producto)
          console.log(this.producto)
      }, err=>console.log(err))
    }

    guardarCambios(){
        this.equipoService.updateProduct(localStorage.getItem("idProductoModal"), this.producto).subscribe(res=>{
            console.log(res)
        })
    }

  public eliminadas:any[]=[]
  public imag=[]
  public cargadas:any=[]

    imagenes(){
        this.equipoService.getimg(localStorage.getItem('idProductoModal')).subscribe(res=>{
          this.imag=<any>res
          for( let i=0; i<this.imag.length;i++){
            this.cargadas.push({id: i, nm: this.imag[i]})
          }
          console.log(this.cargadas)
        })
    }

    eliminar(id:string, _nm:string){
      this.cargadas.splice(id,1)
      for (let i = 0; i < this.cargadas.length; i++) {
        this.cargadas[i].id = i;
      }

      this.eliminadas.push({id:id, nm:_nm })
      console.log(this.cargadas)
      console.log(this.eliminadas)  
    }

   deleteImages(){
    this.equipoService.deleteFiles(this.eliminadas).subscribe(res=>{

    })
   }


/* Para subir Archivo*/
subirArchivo(): any {
  //Sube el producto
  this.equipoService.updateProduct(localStorage.getItem("idProductoModal"), this.producto).subscribe(res=>{
    
   // var info: BookInfo2 = <any>res;
   
    

    //Recorre el arreglo de archivos
    this.archivos.forEach((archivo: any) => {
      const formularioDeDatos = new FormData();
      formularioDeDatos.append('image', archivo);
      console.log(archivo);

      //Sube archivo uno por uno
      this.equipoService.productoFoto(formularioDeDatos, localStorage.getItem("idProductoModal")).subscribe((res) => {
          console.log('Respuesta ', res);
        });
    });

     //delete files
     if(this.eliminadas.length!=0){
      this.deleteImages()
    }

    this.archivos.length=0
    this.srcArray.length=0
    this.ngOnInit()
    
  });
}
  
  usuario: user = {
    fk_id_user: ''
  }
  producto: newProducto = {
    fk_id_user: '',
    fk_id_department: '',
    fk_id_product_category: '',
    fk_id_product_status: '',
    var_name: '',
    text_description: '',
    dou_price: 0,
  };
  
////////////////////PAGINACION////////////////
pageSize=8;
desde:number= 0;
hasta:number=8;

cambiarPagina(e:PageEvent){
  console.log(e)
  this.desde=e.pageIndex*e.pageSize;
  this.hasta=this.desde+e.pageSize;
}

}

interface BookInfo {
  status : string ;
  msg: string;
}

interface BookInfo2 {
  status: string;
  id: string;
}

