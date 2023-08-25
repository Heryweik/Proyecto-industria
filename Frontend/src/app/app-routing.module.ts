import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";
import { NavigationLayoutComponent } from "./layouts/navigation-layout/navigation-layout.component";



const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: "home/login",
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: "home/register",
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
      },
      {
        path: "home/termsAndConditions",
        loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
      },
      {
        path: "home/register/termsAndConditions",
        loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
      },
      {
        path: "home/login/termsAndConditions",
        loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
      },
      {
        path: "home/login/credential",
        loadChildren: () => import('./credential-recovery/credential-recovery.module').then(m => m.CredentialRecoveryModule)
      },
      {
        path: "navigationProducts",
        loadChildren: () => import('./navigation-products/navigation-products.module').then(m => m.NavigationProductsModule)
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  {
    path:"plazitanet",
    component: NavigationLayoutComponent,
    children:[
      {
        path: "navigationProducts",
        loadChildren: () => import('./navigation-products/navigation-products.module').then(m => m.NavigationProductsModule)
      },
      {
        path: "",
        redirectTo: "plazitanet",
        pathMatch: "full"
      }
    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
