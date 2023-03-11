import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './User/home/home.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { ShowProfileComponent } from './user/show-profile/show-profile.component';
import {LoginComponent} from "./User/login/login.component";
import {SupplierComponent} from "./User/supplier/supplier.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {environment} from "../environments/environment";
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomeAdminComponent,
        ShowProfileComponent,
        LoginComponent,
        SupplierComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
