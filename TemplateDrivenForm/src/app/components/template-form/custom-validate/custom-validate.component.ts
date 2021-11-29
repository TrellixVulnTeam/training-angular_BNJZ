import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-validate',
  templateUrl: './custom-validate.component.html',
  styleUrls: ['./custom-validate.component.css']
})
export class CustomValidateComponent implements OnInit {
  @Input('control') control!:any;
  constructor() { }

  ngOnInit(): void {
  }
  get message(){
    for(let err in this.control.errors){
        return this.getErrorMessage(err, this.control.errors[err]);
    }
  }
  getErrorMessage(err:any,value:any){
    let messages = {
      'minlength' : "Nhập thiếu số bạn êiiii ít nhất là" +`${value.requiredLength} chữ`,
      'pattern' : "Sai định dạng bạn êiii"
    }
  }
}
