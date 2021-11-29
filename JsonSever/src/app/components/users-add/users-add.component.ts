import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit, OnDestroy {
  public user !: User
  public subscription !: Subscription
  constructor(private userService:UserserviceService, private routerSerivce : Router) { }

  ngOnInit(): void {
    this.user = new User();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  addUser(user:User){
    if(user.name && user.sexuality){
    this.subscription = this.userService.addUser(user).subscribe(data=>{
      this.routerSerivce.navigate(['users']);
    } )}
  }
}
