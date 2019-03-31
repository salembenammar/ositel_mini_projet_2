import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsMonthComponent } from './transactions-month.component';

describe('TransactionsMonthComponent', () => {
  let component: TransactionsMonthComponent;
  let fixture: ComponentFixture<TransactionsMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
