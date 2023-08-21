import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CredentialRecoveryRoutingModule } from './credential-recovery-routing.module';
import { CredentialRecoveryComponent } from './view-recovery/credential-recovery.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { ComponentsModule } from "../components/components.module";


@NgModule({
  declarations: [
    CredentialRecoveryComponent,
    Module1Component,
    Module2Component,
    Module3Component
  ],
  imports: [
    CommonModule,
    CredentialRecoveryRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports:[
    CredentialRecoveryComponent
  ]
})
export class CredentialRecoveryModule { }
