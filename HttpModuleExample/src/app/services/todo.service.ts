import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../modules/todo.class';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public API : string = "https://5982b2e834e4a300116fea0d.mockapi.io/api/todos";
  public todo : Todo[] = [];
  constructor(private http:HttpClient) { }
  getAllTodo(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.API)
  }
  handleError(err: any){
    if(err.error instanceof Error){
      console.log(`Client-side error: ${err.error.message}`)
    }else{
      console.log(`Sever-side error: ${err.status}-${err.error}`)
    }
  }
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.API,todo)
  }
  updateTodo(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.API}/${todo.id}`,todo)
  }
  deleteTodo(id:number):Observable<Todo>{
    return this.http.delete<Todo>(`${this.API}/${id}`);
  }
}
