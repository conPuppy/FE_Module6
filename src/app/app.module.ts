import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShowComponent} from "./show/show.component";
import {HomeComponent} from './User/home/home.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { ShowProfileComponent } from './User/show-profile/show-profile.component';
import { LoginComponent } from './User/login/login.component';
import { SupplierComponent } from './User/supplier/supplier.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        ShowComponent,
        HomeAdminComponent,
        ShowProfileComponent,
        LoginComponent,
        SupplierComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
