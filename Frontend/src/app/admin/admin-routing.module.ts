import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from '../navigation-products/complaint/complaint.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExpiryTimeComponent } from './expiry-time/expiry-time.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminComponent } from './view-admin/admin.component';


const routes: Routes = [{ path: '', component: AdminComponent, 
children:[
  {path: '',component:CategoriesComponent},
  {path: 'complaint',component:ComplaintComponent},
  {path: 'expiryTime',component:ExpiryTimeComponent},
  {path: 'statistics',component:StatisticsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
