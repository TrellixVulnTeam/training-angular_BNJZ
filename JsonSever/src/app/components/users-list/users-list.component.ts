import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit,OnDestroy {

  constructor(private userService: UserserviceService, private routerService:Router) { }
  subscription !: Subscription
  allUsers !: User[]
  ngOnInit(): void {
    this.subscription = this.userService.getAllUsers().subscribe(data =>{
      this.allUsers = data;
    })
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  onDelete(id:number){
    this.subscription = this.userService.deleteUser(id).subscribe(data =>{
      this.updateDataAfterDelete(id);
    })
  }
  updateDataAfterDelete(id:number){
    this.allUsers.forEach((element,index)=>{
      if(element.id == id){
        this.allUsers.splice(index,1);
      }
    })
  }
 
}
