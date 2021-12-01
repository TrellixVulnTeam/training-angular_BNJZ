import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,OnDestroy {

  constructor(private formBuilderService:FormBuilder,private accountService:AccountService,private routerService:Router) { }
  formUserUpdate !: FormGroup
  subscription !: Subscription
  account!:Account[]
  idAccount!:number
  accountUpdate !: Account
  ngOnInit(): void {
    this.createForm();
  }
  ngOnDestroy(){

  }
  createForm(){
    this.formUserUpdate = this.formBuilderService.group({
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
        this.formUserUpdate.setValue({
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
      this.formUserUpdate.value.username,
      this.formUserUpdate.value.password,
      "User",
      this.formUserUpdate.value.name,
      this.formUserUpdate.value.email,
    )
    this.subscription = this.accountService.updateAccount(this.idAccount,this.accountUpdate).subscribe(data=>{
      alert("Update thanh cong")
      this.routerService.navigate(['login']);
    })
  }
}
