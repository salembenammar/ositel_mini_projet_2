import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transactions-statistics',
  templateUrl: './transactions-statistics.component.html',
  styleUrls: ['./transactions-statistics.component.css']
})
export class TransactionsStatisticsComponent implements OnInit {
  @Input() statisticTransactions;

  constructor() {

  }

  ngOnInit() {
  }

}
