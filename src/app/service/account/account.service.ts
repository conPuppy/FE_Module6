import {Injectable} from '@angular/core';
import {Account} from "../../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountCreate} from "../../model/AccountCreate";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    accounts: Account[] = [];

    constructor(private http: HttpClient) {
    }

    getAllProvider(): Observable<Account[]> {
        return this.http.get<Account[]>("http://localhost:8080/accounts");
    }
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
