import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = `Lorem Ipsum isd dummy text evey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`; 
  name = "phan đình giót "
  amount = 123456789
  percentNumber = 0.89
  money = 99.99
  date : Date = new Date("12/24/2020") ;
  product :any = {
    id: 1,
    name: "Iphone 11",
    price : 200,
    status : true
  }
}
