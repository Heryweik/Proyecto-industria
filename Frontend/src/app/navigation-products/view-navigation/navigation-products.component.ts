import { Component, OnInit } from '@angular/core';
import { EquipoService } from "../../SERVICES/equipo.service";
import { Router} from '@angular/router';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-navigation-products',
  templateUrl: './navigation-products.component.html',
  styleUrls: ['./navigation-products.component.css']
})
export class NavigationProductsComponent implements OnInit {

  constructor(private paginator: MatPaginatorIntl, private EquipoService:EquipoService,private router: Router) {
    this.name = <any>null
    paginator.itemsPerPageLabel = "Productos por pagina:"
    paginator.firstPageLabel = "Primer página"
    paginator.lastPageLabel = "Ultima página"
    paginator.nextPageLabel = "Siguiente página"
    paginator.previousPageLabel = "Página anterior"
  }

  name:user[]//arreglo para traer el usuario
  toDisplay=true
  ruta:string = "home/termsAndConditions"//ruta para terminos y condicions
  ngOnInit(): void {
    //si se quiere que una consulta se ejecute al iniciar la pagina, colocar el suscribe aqui
    if (localStorage.getItem('token')!=null && localStorage.getItem('token') != ""){//vericamos que existe un token en localstorage
      this.EquipoService.getUser(localStorage.getItem('token')!).subscribe(
        res=>{
          this.name = <any>res;
        },
        err => console.log(err)
        );
    }else{
      this.toDisplay=false
      this.router.navigate([`/navigationProducts`])//en caso de que no exista un token se de volvera al login
    }
  }

  eliminaToken(){
    if (localStorage.getItem('token')!=null && localStorage.getItem('token') != ""){
      localStorage.removeItem('token')
    }
  }
}

interface user{
    fk_id_department:number,
    var_email:string,
    var_name:string,
    var_lastname:string,
    bit_status:number,
    var_phone:string
}
