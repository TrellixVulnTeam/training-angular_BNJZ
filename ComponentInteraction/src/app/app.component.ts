import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = true;
  name = "Thien";
  age = 18;
  public users : any[] = [
  {
    id: 1,
    name: "Thien1",
    phone: '0935552422'
  },{
    id: 2,
    name: "Thien2",
    phone:'0935552423'
  },{
    id: 3,
    name: "Thien3",
    phone:'0935552424'
  }

  ]
  userName !: string;
  userAge !: number;
  getUserName(value:any){
    this.userName = value;
}
 getUserAge(value:any){
    this.userAge = value;
}
riName = "Thien";
getString !: string;
getStringOP(value:any){
  this.getString = value;
}
}

