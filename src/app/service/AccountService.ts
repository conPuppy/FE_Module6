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
    findAccountByUsername(username:String):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/register/findAccountByUsername/${username}`)
    }
    findAccountByEmail(email:String):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/register/findAccountByEmail/${email}`)
    }
}