import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOutputComponent } from './review-output.component';

describe('ReviewOutputComponent', () => {
  let component: ReviewOutputComponent;
  let fixture: ComponentFixture<ReviewOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
