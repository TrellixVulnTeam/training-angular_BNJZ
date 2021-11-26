import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName !: string;
  userAge !: number;
  //Chuyen du lieu ra lop' Cha bang OutPut va EventEmiiter
  @Output("userName") 
  onHandleUserName = new EventEmitter<string>();
  onSubmit(){
    this.onHandleUserName.emit(this.userName)
  }
   @Output("userAge") 
  onHandleUserAge = new EventEmitter<number>();
  onSubmitAge(){
    this.onHandleUserAge.emit(this.userAge)
  }
}
