import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/service/account.service';
@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit,OnDestroy {

  constructor(private formBuilderService:FormBuilder,
    private accountService:AccountService, 
    private routerService:Router,
    private activedRoute:ActivatedRoute) { }
  subscription!:Subscription
  subscriptionParams !: Subscription
  formEdit !: FormGroup
  accountEdit !: Account
  idAccount !: number
  ngOnInit(): void {
    this.createForm();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
    if(this.subscriptionParams){
      this.subscriptionParams.unsubscribe()
    }
  }
  createForm(){
    this.formEdit = this.formBuilderService.group({
      username: [''],
      password: [''],
      roles:[''],
      name: [''],
      email: ['']
    })
    this.subscriptionParams = this.activedRoute.params.subscribe(data=>{
      this.idAccount = data['id']
      this.subscription = this.accountService.getAccountByID(this.idAccount).subscribe((account:Account)=>{
        this.formEdit.setValue({
          username: account.username,
          password: account.password,
          roles: account.roles,
          name:  account.name,
          email: account.email
        })
      })
    })
  }
  onEdit(){
    this.accountEdit = new Account(
      this.formEdit.value.username,
      this.formEdit.value.password,
      this.formEdit.value.roles,
      this.formEdit.value.name,
      this.formEdit.value.email,
    )
    this.subscription = this.accountService.updateAccount(this.idAccount,this.accountEdit).subscribe(data=>{
      alert("Update thanh cong")
      this.routerService.navigate(['admin/management']);
    })
  }
}
