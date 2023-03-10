import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./User/home/home.component";
import {HomeAdminComponent} from "./admin/home-admin/home-admin.component";
import {LoginComponent} from "./User/login/login.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"admin", component: HomeAdminComponent},
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
