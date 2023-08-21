import { Component, OnInit } from '@angular/core';
import {EquipoService, complaint} from '../../SERVICES/equipo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor(private equipoService:EquipoService) { }

  ngOnInit(): void {
    // Traer todas las categorias
    this.equipoService.getComplaintCategories().subscribe(res=>{
      this.complaintCategories = <any>res
      console.log(this.complaintCategories)
    }, error =>{
      console.log(error) 
    })
    
    this.denuncia.fk_id_product = "" + localStorage.getItem("productToken")
  }

  denuncia:complaint = {
    fk_id_user: "",
    fk_id_product: "",
    fk_id_complaint_category: "",
    text_description: ""

  }

  complaintCategories:any[] = []
  
  complaintForm = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });

  get categoriaControl(): FormControl {
    return this.complaintForm.get('categoria') as FormControl; 
  }
  get descripcionControl(): FormControl {
    return this.complaintForm.get('descripcion') as FormControl;    
  }

  sendNewComplaint(){
    this.denuncia.fk_id_user = "" + localStorage.getItem("token")
    this.equipoService.addComplaint(this.denuncia).subscribe(res => {
      console.log(<any>res)

      const info:BookInfo = <any>res
      Swal.fire({
        icon: 'success',
        title: info.msg,
        showConfirmButton: false,
        timer: 1000
      })

    })

    this.equipoService.$modalComplaint.emit(false)

  }

  
  closeModalComplaint(){
    this.equipoService.$modalComplaint.emit(false)
  }

}

interface BookInfo {
  status : string ;
  msg: string;
}
