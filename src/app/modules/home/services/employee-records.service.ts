import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeRecord } from '../models/EmployeeRecord';
@Injectable({
  providedIn: 'root'
})
export class EmployeeRecordsService {

  url = "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";
  constructor(private  http :  HttpClient) { }

  get() : Observable<EmployeeRecord[]>{
    return this.http.get<EmployeeRecord[]>(this.url);
  }
}
