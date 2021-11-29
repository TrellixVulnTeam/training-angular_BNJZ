import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public API: string = 'http://localhost:3000/users'
  constructor(private http:HttpClient) { }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.API);
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.API,user)
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(`${this.API}/${id}`)
  }
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.API}/${user.id}`,user)
  }
  getByID(id:number):Observable<User>{
    return this.http.get<User>(`${this.API}/${id}`)
  }
}
