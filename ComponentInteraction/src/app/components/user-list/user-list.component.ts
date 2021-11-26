import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  @Input("users") myUsers : any[] = [] ;
  @Input("userName") userName !: string;
   @Input("userAge")phoneNo !: number;

  showObj(){
    return "abc"
  }
  tempObj !: any[] ;


}
