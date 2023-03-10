import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provider} from "../../model/Provider";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providers: Provider[] = []
  private url = "http://localhost:8080/providers";

  constructor(private http: HttpClient) {
  }

  getAllProviderAcc(page: number): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url+"?page"+page);
  }
}
