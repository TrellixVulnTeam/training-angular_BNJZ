import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case-directive',
  templateUrl: './switch-case-directive.component.html',
  styleUrls: ['./switch-case-directive.component.css']
})
export class SwitchCaseDirectiveComponent implements OnInit {
  actor : any[] = [
  {
    name: "Thien1",
    age:18
  },
  {
    name: "Thien2",
    age:19
  },
  {
    name: "Thien3",
    age:20
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
