import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsToViewComponent } from './components-to-view.component';

describe('ComponentsToViewComponent', () => {
  let component: ComponentsToViewComponent;
  let fixture: ComponentFixture<ComponentsToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsToViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
