import { Component,OnInit,OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';
import { Todo } from './modules/todo.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private todoService:TodoService){}
  ngOnInit(){
    this.getData();
  }
  public subscription !: Subscription
  public todos : Todo[] = [];
  public title!:string
  public todo !: Todo
  public status!:boolean
  ngOnDestroy(): void{
    if(this.subscription){
    this.subscription.unsubscribe();
    }
  }
  getData(){
   this.subscription = this.todoService.getAllTodo().subscribe(data =>{
    this.todos = data;
   }, error =>{
    this.todoService.handleError(error);
   });
  }
  onSave(){
    let todo = new Todo(this.title,this.status);
    this.subscription = this.todoService.addTodo(todo).subscribe(data =>{
      this.todos.push(data);
    },error =>{
      this.todoService.handleError(error);
    })
  }
  onEdit(value:Todo){
    this.todo = value;
  }
  onDelete(value:number){
    this.subscription = this.todoService.deleteTodo(value).subscribe(data=>{
      let index = this.getIndex(data.id)
      this.todos.splice(index,1);
    },error =>{
      this.todoService.handleError(error);
    })
  }
  onUpdate(){
    this.subscription = this.todoService.updateTodo(this.todo).subscribe(data=>{
      let index = this.getIndex(data.id)
      this.todos[index] = data;
    },error =>{
      this.todoService.handleError(error);
    })
  }
  getIndex(id:number):number{
    let indexID !: number;
    this.todos.forEach((item,index)=>{
      if(item.id == id){
        indexID = index;
      }
    })
    return indexID;
  }
}
