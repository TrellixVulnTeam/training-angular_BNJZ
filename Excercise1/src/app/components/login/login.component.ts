import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private accountService:AccountService, private routerService: Router,private formBuilderService:FormBuilder) { }
  account !: Account[]
  formLogin !: FormGroup
  ngOnInit(): void {
    this.createForm();
    this.getAllAcount();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  subscription !: Subscription
  getAllAcount(){
    this.subscription = this.accountService.getAllAccount().subscribe(data=>{
      this.account = data;
    })
  }
  checkLogin(){
    let username = this.formLogin.controls?.['username'].value;
    let password = this.formLogin.controls?.['password'].value;
    for (let index = 0; index < this.account.length; index++) {
      if(this.account[index].username == username && this.account[index].password == password){
        if(this.account[index].roles == "Admin"){
          this.routerService.navigate(['admin']);
          localStorage.setItem("account",username)
        }
        if(this.account[index].roles == "User"){
          this.routerService.navigate(['user']);
          localStorage.setItem("account",username)
        }
      }
    }
}
createForm(){
  this.formLogin = this.formBuilderService.group({
    username: [''],
    password: ['']
  })
}
}
