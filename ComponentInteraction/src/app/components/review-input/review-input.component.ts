import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-input',
  templateUrl: './review-input.component.html',
  styleUrls: ['./review-input.component.css']
})
export class ReviewInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input("riName") getName !: string;
  @Input("riUserArray") getUserArray !: any[];
}
