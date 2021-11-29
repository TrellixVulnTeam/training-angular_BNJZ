import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit,OnDestroy {
  formAccount !: FormGroup
  constructor(private formBuilderService:FormBuilder) { }
  subscription !: Subscription
  ngOnInit(): void {
    this.createForm();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  createForm(){
    this.formAccount = this.formBuilderService.group({
      username : ['',[Validators.minLength(3),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      password : ['',[Validators.required,Validators.minLength(3)]]
    })
  }
  onSubmitForm(){
    console.log(this.formAccount)
  }
  onResetForm(){
    this.formAccount.reset()
  }
}
