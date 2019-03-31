import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsStatisticsComponent } from './transactions-statistics.component';

describe('TransactionsStatisticsComponent', () => {
  let component: TransactionsStatisticsComponent;
  let fixture: ComponentFixture<TransactionsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
