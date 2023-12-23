import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroments/enviroment';
import { ParamsGetCustomerByIdAdvancedAsync, ParamsOpenNewCurrentAccount } from '../DTOs/APIParams';
import { APIResponseGetCustomerByIdAdvancedAsync, APIResponseGetCustomersByEntryUserIdAdvancedAsync, APIResponseOpenNewCurrentAccount, APIResponseSubmitCustomerAsync } from '../DTOs/APIResponses';
import { Observable } from 'rxjs';
import { Customer } from '../DTOs/Models/Models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string =  enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  openNewCurrentAccount(param: ParamsOpenNewCurrentAccount): Observable<APIResponseOpenNewCurrentAccount> {
    return this.http.post<APIResponseOpenNewCurrentAccount>(`${this.baseUrl}/Data/OpenNewCurrentAccount`, param);
  }

  submitCustomerAsync(param: Customer): Observable<APIResponseSubmitCustomerAsync> {
    return this.http.post<APIResponseSubmitCustomerAsync>(`${this.baseUrl}/Data/SubmitCustomerAsync`, param);
  }

  getCustomersByEntryUserIdAdvancedAsync(): Observable<APIResponseGetCustomersByEntryUserIdAdvancedAsync> {
    return this.http.get<APIResponseGetCustomersByEntryUserIdAdvancedAsync>(`${this.baseUrl}/Data/GetCustomersByEntryUserIdAdvancedAsync`);
  }

  getCustomerByIdAdvancedAsync(param: ParamsGetCustomerByIdAdvancedAsync): Observable<APIResponseGetCustomerByIdAdvancedAsync> {
    return this.http.post<APIResponseGetCustomerByIdAdvancedAsync>(`${this.baseUrl}/Data/GetCustomerByIdAdvancedAsync`, param);
  }
}
