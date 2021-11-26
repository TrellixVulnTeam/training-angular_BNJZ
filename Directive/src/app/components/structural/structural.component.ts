import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  isShow = true;
  name = "Thien";
  valueRadio = false;
  age = 23;
  testObj = {
    name : "Thien",
    age : 23,
    sex : "Nam"
  }
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isShow = !this.isShow
  }
  onTicked(value : any){
    this.valueRadio = value;
  }
}
