import { Component, OnInit } from '@angular/core';
import { EquipoService, subscription, subscribe, requestSubscriptions} from '../../SERVICES/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})

export class SubscriptionsComponent implements OnInit {

  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    // Traer todas las categorias
    this.equipoService.getProductCategories().subscribe(res=>{
      this.categories = <any>res
    }, error =>{
      console.log(error) 
    })

    // Suscripción
    this.suscripcion.fk_id_user = localStorage.getItem('token');
    this.updateSubscriptionList()

  }

  categories:any[] = []
  UserSubscription:subscription[] = []
  UserSubscriptionID:number[] = []

  suscripcion: subscribe = {
    fk_id_user: "",
    fk_id_product_category: ""
  }

  // Traer lista de suscripciones del usuario
  private updateSubscriptionList(){
    if(this.suscripcion.fk_id_user != null){
         
      this.equipoService.getSubscriptions("" + this.suscripcion.fk_id_user).subscribe(res=>{
        var request:requestSubscriptions = <any>res
        if(request.status == "200"){
          this.UserSubscription = request.msg
        }else{
          this.UserSubscription = []
        }
    

        this.UserSubscriptionID = []
        for(var index in this.UserSubscription){
          this.UserSubscriptionID.push(this.UserSubscription[index].id_product_category)
        }

      }, error =>{
        console.log(error) 
      })

    } 

  }
  suscribirse(fk_id_product_category:string){

    this.suscripcion.fk_id_product_category = fk_id_product_category
    this.equipoService.addsubscription(this.suscripcion).subscribe(res=>{
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

      this.updateSubscriptionList()
    }, error =>{
      console.log(error)
    })

    
  }

  anularSuscripcion(fk_id_product_category:string){

    this.suscripcion.fk_id_product_category = fk_id_product_category
    /// Alerta cancelar sub
    Swal.fire({
      title: '¿Anular la suscripción de ' + this.UserSubscription[this.UserSubscriptionID.indexOf(+this.suscripcion.fk_id_product_category)].var_name + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'No',
      confirmButtonText: 'Anular'
    }).then((result) => {
      if (result.isConfirmed) {

        /// Llama a la funcion de borrar suscripción
        this.equipoService.deleteSubscription(this.suscripcion).subscribe(res=>{
          var info:BookInfo = <any>res
          console.log(info.msg)
  
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

interface BookInfo {
  status : string ;
  msg: string;
}