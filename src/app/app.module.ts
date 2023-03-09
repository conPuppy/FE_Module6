import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ShowAccountComponent } from './admin/show-account/show-account.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomeAdminComponent,
        ShowAccountComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
