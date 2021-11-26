import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-components',
  templateUrl: './view-to-components.component.html',
  styleUrls: ['./view-to-components.component.css']
})
export class ViewToComponentsComponent implements OnInit {
  public title = "Event Binding";
  public count = 0;
  testText = "";
  onClick(){
    alert("Bấm CC")
  }
  onMinus(){
    this.count--
  }
   onPlus(){
    this.count++
  }
  onKeyUp(event:any){
    this.testText = event.target.value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
