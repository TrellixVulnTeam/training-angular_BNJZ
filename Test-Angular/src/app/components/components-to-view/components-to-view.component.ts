import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-to-view',
  templateUrl: './components-to-view.component.html',
  styleUrls: ['./components-to-view.component.css']
})
export class ComponentsToViewComponent implements OnInit {

	public name : String = 'Thien2';
	 age : Number = 300;
	 sex : Boolean = true;
	 public checkLabel : Boolean = false;
	public user : Object = { 
		name2 : 'Thien Object',
		age2 : 23,
		sex2 : true
	}
	imgLink : String = "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg";

	linkFB : String = "https://www.facebook.com/";
	showInfo(){
		return `${name}`;
	}
  constructor() {}

  ngOnInit(): void {
  }

}
