import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from '../model/account.model';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountAPI : string = "http://localhost:3000/account"
  constructor(private httpService: HttpClient) { }
  
  getAllAccount():Observable<Account[]>{
    return this.httpService.get<Account[]>(this.accountAPI);
  }
  createAccount(account:Account):Observable<Account>{
    return this.httpService.post<Account>(this.accountAPI, account);
  }
  getAccountByName(username: any):Observable<Account[]>{
    return this.httpService.get<Account[]>(`${this.accountAPI}/?username=${username}`)
  }
  updateAccount(id:number,account: Account):Observable<Account>{
    return this.httpService.put<Account>(`${this.accountAPI}/${id}`,account)
  }
  getAccountByID(id:number):Observable<Account>{
    return this.httpService.get<Account>(`${this.accountAPI}/${id}`)
  }
}
