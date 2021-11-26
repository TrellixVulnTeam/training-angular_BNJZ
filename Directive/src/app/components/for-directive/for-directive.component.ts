import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  names : String[] = ["Thien","DepTrai","VL"];
  dataSever : String[] = ["Thien","DepTrai","VL","Ahihi"];
  mate : any[]=[];
  // {
  //   id:1,
  //   name:"Thien1",
  //   age:16
  // },{
  //   id:2,
  //   name:"Thien2",
  //   age:17
  // },{
  //   id:3,
  //   name:"Thien3",
  //   age:18
  // }
  mateSever : any[]=[{
    id:1,
    name:"Thien1",
    age:16
  },{
    id:2,
    name:"Thien2",
    age:17
  },{
    id:3,
    name:"Thien3",
    age:18
  },{
    id:4,
    name:"Thien4",
    age:19
  },{
    id:5,
    name:"Thien5",
    age:20
  }];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.names = this.dataSever
    this.mate = this.mateSever
  }
  myTrackByFunction(index:any,item :any){
    return item.id;
  }
}
