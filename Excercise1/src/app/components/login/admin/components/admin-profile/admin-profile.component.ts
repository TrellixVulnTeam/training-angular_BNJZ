import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit,OnDestroy {

  constructor(private formBuilderService:FormBuilder,private accountService:AccountService, private routerService:Router) { }
  formUpdate !: FormGroup
  account !: Account[] 
  accountUpdate !: Account
  subscription!:Subscription
  idAccount !: number
  ngOnInit(): void {
    this.createForm();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  createForm(){
    this.formUpdate = this.formBuilderService.group({
      username: [''],
      password: [''],
      name: [''],
      email: ['']
    })
    let string = localStorage.getItem("account")
    this.subscription = this.accountService.getAccountByName(string).subscribe((account:Account[])=>{
      this.account = account
      for (let index = 0; index < this.account.length; index++) {
        this.idAccount = this.account[index].id
        this.formUpdate.setValue({
          username: this.account[index].username,
          password: this.account[index].password,
          name: this.account[index].name,
          email: this.account[index].email
          })
      }
      
    })
  }
  onUpdate(){
    this.accountUpdate = new Account(
      this.formUpdate.value.username,
      this.formUpdate.value.password,
      "admin",
      this.formUpdate.value.name,
      this.formUpdate.value.email,
    )
    this.subscription = this.accountService.updateAccount(this.idAccount,this.accountUpdate).subscribe(data=>{
      alert("Update thanh cong")
      this.routerService.navigate(['login']);
    })
  }
  
}
