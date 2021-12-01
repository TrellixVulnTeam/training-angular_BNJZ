import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit,OnDestroy {

  constructor(private accountService:AccountService) { }
  subscription!:Subscription
  allAccount!:Account[]
  ngOnInit(): void {
    this.getAllAccount();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  getAllAccount(){
    this.subscription = this.accountService.getAllAccount().subscribe(data=>{
      this.allAccount = data
    })
  }
}
