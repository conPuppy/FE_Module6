import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

import {RegisterComponent} from "./register/register.component";
import {ShowComponent} from "./show/show.component";

const routes: Routes = [
  {path:"", component: ShowComponent},
  {path:"register", component: RegisterComponent},
  {path:"home", component: HomeComponent},

//import {ShowComponent} from "./show/show.component";

//const routes: Routes = [
  //{path:"", component: ShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
