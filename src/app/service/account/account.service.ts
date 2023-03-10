import {Injectable, OnInit} from '@angular/core';
import {Account} from "../../models/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountToken} from "../../models/AccountToken";

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit{

  private url = 'http://localhost:8080/admin/accounts';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAllAccount(page: number) :Observable<any>{
    return this.http.get<any>(this.url + '?page=' + page);
  }

  blockAccount(id: number) :Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`http://localhost:8080/admin/accounts/block/${id}`);
  }

  search(stringSearch: String) :Observable<any> {
    return this.http.get<any>(`http://localhost:8080/admin/search/${stringSearch}`)
  }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/admin/accounts/${id}`)
  }

  upVip(id: number): Observable<any> {
    // @ts-ignore
    return this.http.post <any>(`http://localhost:8080/admin/accounts/vip/${id}`);
  }

  login(account: any): Observable<AccountToken> {
    return this.http.post<AccountToken>("http://localhost:8080/login", account)
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken() {
    return localStorage.getItem("token")
  }


  setAccountToken(accountToken: AccountToken) {
    localStorage.setItem("accountToken", JSON.stringify(accountToken))
  }

  getAccountToken() {
    // @ts-ignore - nghĩa là không su dụng cú pháp của TS
    return JSON.parse(localStorage.getItem("accountToken"))
  }


}
