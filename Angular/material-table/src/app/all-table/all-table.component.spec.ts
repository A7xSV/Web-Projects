import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTableComponent } from './all-table.component';

describe('AllTableComponent', () => {
  let component: AllTableComponent;
  let fixture: ComponentFixture<AllTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
