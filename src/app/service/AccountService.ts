import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AccountCreate} from "../model/AccountCreate";
import {Observable} from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class AccountService{
    constructor(private http:HttpClient) { }
    createAccount(accountCreate:AccountCreate):Observable<any>{
        return this.http.post<any>('http://localhost:8080/register',accountCreate)
    }
}