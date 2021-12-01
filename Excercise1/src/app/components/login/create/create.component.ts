import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit,OnDestroy {
  account !: Account
  subscription!:Subscription
  formAccount !: FormGroup
  constructor(private accountService:AccountService, private routerService: Router, private formBuilderService:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  createForm(){
    this.formAccount = this.formBuilderService.group({
      username : [''],
      password : [''],
      name : [''],
      email : ['']
    })
  }

  onSubmitForm(): void{
    this.getFullValue(this.formAccount);
    this.subscription = this.accountService.createAccount(this.account).subscribe(data=>{
      if(data && data.id){
      this.routerService.navigate(['/login'])
      }
    })
  }
  onResetForm(){
    this.formAccount.reset()
  }
  getFullValue(formAccount:any){
    this.account.username = formAccount.controls.username.value;
    this.account.password = formAccount.controls.password.value;
    this.account.roles = "user"
    this.account.name = formAccount.controls.name.value;
    this.account.email = formAccount.controls.email.value;
  }
}
