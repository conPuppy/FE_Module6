import {Injectable} from '@angular/core';
import {Account} from "../../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

}
