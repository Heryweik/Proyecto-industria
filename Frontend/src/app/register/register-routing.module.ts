import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './view-register/register.component';
//import { LayoutRegisterComponent } from "./layout-register/layout-register.component";

const routes: Routes = [
  { 
    path: '', 
    component: RegisterComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
