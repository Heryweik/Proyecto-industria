import { Component, Input, OnInit } from '@angular/core';
import { EquipoService, traerProducto, getProduct } from 'src/app/SERVICES/equipo.service';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

@Input() id :string='0'

productoList:getProduct[]=[];
  constructor(public equipoService:EquipoService) {
   
   }

   ngOnInit(): void {
    
  }
}
