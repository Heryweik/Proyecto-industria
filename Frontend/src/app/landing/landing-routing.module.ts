import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LayoutLandingComponent } from './layout-landing/layout-landing.component';
import { LandingComponent } from "./view-landing/landing.component";


const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
