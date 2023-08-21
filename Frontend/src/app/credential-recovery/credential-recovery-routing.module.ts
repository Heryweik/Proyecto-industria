import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialRecoveryComponent } from './view-recovery/credential-recovery.component';
import { Module1Component } from "./module1/module1.component";
import { Module2Component } from "./module2/module2.component";
import { Module3Component } from "./module3/module3.component";

const routes: Routes = [
  { 
    path: '', 
    component: CredentialRecoveryComponent, 
    children:[
      {path: '',component:Module1Component},
      {path: 'module2/:email',component:Module2Component},
      {path: 'module3/:email',component:Module3Component}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialRecoveryRoutingModule { }
