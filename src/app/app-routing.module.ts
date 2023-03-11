import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./User/home/home.component";
import {HomeAdminComponent} from "./admin/home-admin/home-admin.component";
import {LoginComponent} from "./User/login/login.component";
import {SupplierComponent} from "./User/supplier/supplier.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"admin", component: HomeAdminComponent},
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"supplier/: id", component: SupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
