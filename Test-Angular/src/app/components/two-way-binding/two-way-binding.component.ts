import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  title = "2 way binding";
  public testInput:String = "";
  public sex:Number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
