import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit,OnDestroy {
  subscription!:Subscription
  user!:User
  subscriptionParam !: Subscription
  constructor(private userService: UserserviceService, private routerService:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User()
    this.getData();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
    if(this.subscriptionParam){
      this.subscriptionParam.unsubscribe()
    }
  }
  onUpdate(user:User){
    if(user.name && user.sexuality){
    this.subscription = this.userService.updateUser(user).subscribe(data=>{
        this.routerService.navigate(["/users"])
    })}
  }
  getData(){
    this.subscriptionParam = this.activatedRoute.params.subscribe(data=>{
      this.subscription = this.userService.getByID(data['id']).subscribe((user:User)=>{
        this.user = user
      })
    });
  }
}
