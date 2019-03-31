import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transactions-month',
  templateUrl: './transactions-month.component.html',
  styleUrls: ['./transactions-month.component.css']
})
export class TransactionsMonthComponent implements OnInit {
  @Output() selectMonth: EventEmitter<null> = new EventEmitter<null>();


  constructor() {
  }

  changeMonth(e) {
    this.selectMonth.emit(e.target.value);
  }

  ngOnInit() {
  }

}
