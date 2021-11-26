import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToComponentsComponent } from './view-to-components.component';

describe('ViewToComponentsComponent', () => {
  let component: ViewToComponentsComponent;
  let fixture: ComponentFixture<ViewToComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewToComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewToComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
