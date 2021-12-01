import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { account } from 'src/app/models/account.class';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public account !: account
  constructor() { }

  ngOnInit(): void {
    this.account = new account()
  }
  onSubmitForm(formAccount:NgForm){
    if(formAccount.valid){
    console.log(this.account)
    }
  }
  onResetForm(formAccount:NgForm){
    formAccount.reset();
  }

}
