import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ShowComponent } from './show/show.component';
import { NgxPaginationModule } from 'ngx-pagination';

//import {ShowComponent} from './show/show.component';
//import {HttpClientModule} from "@angular/common/http";
//import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,

        RegisterComponent,

        ShowComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
