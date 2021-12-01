import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
  @Input("active") isActive = true;
  @Input("age") myAge: any;
  private _name!:string;

  constructor() { }

  ngOnInit(): void {
    console.log("OnInit")
  }
  @Input()
  set name(myName : string){
    this._name = myName
  }
  get myName(){
    return this._name;
  }
}
