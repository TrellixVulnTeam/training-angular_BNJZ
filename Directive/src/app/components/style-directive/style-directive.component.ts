import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.css']
})
export class StyleDirectiveComponent implements OnInit {
  isChecked = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isChecked = !this.isChecked
  }
  onNgStyle(){
    return {'border': this.isChecked ? 'solid 2px cyan': '', 'padding.px': this.isChecked?'10':'','color':this.isChecked?'Yellow':''}
  }
}
