import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';
import { codigo, EquipoService,status } from "../../SERVICES/equipo.service";

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
  
})
export class Module2Component implements OnInit {

  

  expresiones = /^[0-9a-zA-Z]+$/;


  /*Variable */
  module2Form:FormGroup;

  /*El get */
  get codigoVerificacion():FormControl{
    return this.module2Form.get('codigo') as FormControl
  }
  validate =false;

 
  modulo2: codigo={
    var_email:"",
    var_code:""
    
  }
/*Constructor del codigo  */
  constructor(private rutaActiva: ActivatedRoute, private fb: FormBuilder,private router: Router,private EquipoService:EquipoService) {
    this.module2Form =this.fb.group({
      codigo: new FormControl('',[Validators.minLength(7),Validators.pattern(this.expresiones)])

    })
   }

  ngOnInit(): void {
    this.modulo2.var_email = this.rutaActiva.snapshot.params['email']
  }

  obtenerCodigo(){
    console.log(this.modulo2.var_code)
    this.EquipoService.addCodigo(this.modulo2).subscribe(
      res => {
        var status:BookInfo = <any>res
        console.log(status.status)
        if (status.status == '200') {
          this.router.navigate(['home/login/credential/module3/'+this.modulo2.var_email])
        }else{
          this.validate=true
        }
      },
      err => this.validate=true
    )
  }
 

}

interface BookInfo {
  status : string ;
}

 
