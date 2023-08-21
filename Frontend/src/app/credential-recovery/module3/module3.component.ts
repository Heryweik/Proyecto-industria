import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';
import { updatePassword, EquipoService,status } from "../../SERVICES/equipo.service";

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.scss']
})



export class Module3Component implements OnInit {

  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&-/_|])([A-Za-z\d$@$!%*?&]|[^ ]){7,40}$/;
  credential:FormGroup;

  get passControl():FormControl{
    return this.credential.get('password') as FormControl
  }
  get passValidateControl():FormControl{
    return this.credential.get('confirmPassword') as FormControl
  }

  validate = false;

  constructor(private rutaActiva: ActivatedRoute, private fb: FormBuilder,private router: Router,private EquipoService:EquipoService) { 
    this.credential = this.fb.group({
      password: new FormControl('',[Validators.required, Validators.minLength(7), Validators.pattern(this.regex)]),
      confirmPassword: new FormControl('', [Validators.minLength(7),Validators.required])
    })
  }
  
  ngOnInit(): void {
    this.update.var_email = this.rutaActiva.snapshot.params['email']
  }

  

  match(firstControlName:any, secondControlName:any){
    return !(this.credential.get(firstControlName)?.value === this.credential.get(secondControlName)?.value); 
  };

  update:updatePassword={
      var_email:"",
      tex_password:"",
      tex_pass_ver:""
  }

  updatePassword(){
    //console.log("Esta en funcionamiento")
    if (this.update.tex_password == this.update.tex_pass_ver) {
      var status:any = [];
      let result = this.EquipoService.updatePassword(this.update).subscribe(
        res => {
          var status:BookInfo = <any>res
          //console.log(hola)
          if (status.status == '200') {
            this.router.navigate(['home/login'])
          }else{
            this.validate=true
          }
        },
        err => console.log(err)
      );
      
      
      
      //console.log(result)
    }
    //
  }
}

interface BookInfo {
  status : string ;
}

