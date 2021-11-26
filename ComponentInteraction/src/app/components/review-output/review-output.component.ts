import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-output',
  templateUrl: './review-output.component.html',
  styleUrls: ['./review-output.component.css']
})
export class ReviewOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  roString !: string;
  @Output("roStringOP") sendingString = new EventEmitter<string>();
  onSubmitString(){
    this.sendingString.emit(this.roString);
  }
}
