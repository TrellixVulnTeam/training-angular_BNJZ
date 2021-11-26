import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  isPadding = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isPadding = !this.isPadding
  }
  setClasses(){
    return {'pd-10': this.isPadding, 'border-red': this.isPadding}
  }
}
