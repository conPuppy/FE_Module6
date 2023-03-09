import {Injectable, OnInit} from '@angular/core';
import {Account} from "../../models/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAllAccount() :Observable<any>{
    return this.http.get<any>("http://localhost:8080/admin/accounts");
  }

  blockAccount(id: number) :Observable<any> {
    // @ts-ignore
    return this.http.put<any>(`http://localhost:8080/admin/accounts/block/${id}`);
  }

  search(stringSearch: String) :Observable<any> {
    return this.http.get<any>(`http://localhost:8080/admin/search/${stringSearch}`)
  }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/admin/accounts/${id}`)
  }

  upVip(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put<any>(`http://localhost:8080/admin/accounts/vip/${id}`);
  }
}
