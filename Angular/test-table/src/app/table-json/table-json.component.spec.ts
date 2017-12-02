import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJsonComponent } from './table-json.component';

describe('TableJsonComponent', () => {
  let component: TableJsonComponent;
  let fixture: ComponentFixture<TableJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
