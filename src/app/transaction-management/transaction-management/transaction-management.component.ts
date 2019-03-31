import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css']
})
export class TransactionManagementComponent implements OnInit {
  statisticTransactions: any = {};
  transactionsList: Object[];

  constructor() {
  }

  selectMonth(selectedMonth) {

    /*
        let data = {
          'draw': 1,
          'recordsTotal': 2,
          'recordsFiltered': 2,
          'transactionInValue': 122,
          'transactionOutValue': 100,
          'amountStartMonth': 0,
          'amountEndMonth': 22,
          'data': []
        };
    */

    this.statisticTransactions = {
      'recordsTotal': 2,
      'transactionInValue': 122,
      'transactionOutValue': 100,
      'amountStartMonth': 0,
      'amountEndMonth': 22,
    };

    this.transactionsList = [
      {
        titre: 'salem',
        description: 'test',
        montant: '122 \u20ac',
        category: 'Category 2',
        stock: 'IN',
        creation_date: '31-03-2019'
      },
      {
        titre: 'salem',
        description: 'test',
        montant: '122 \u20ac',
        category: 'Category 2',
        isInput: 'IN',
        createdAt: '31-03-2019'
      },
    ];
    console.log('selectedMonth===>', selectedMonth);
    if (selectedMonth === '2') {
      this.statisticTransactions.recordsTotal = 8;
      console.log('this.statisticTransactions.recordsTotal', this.statisticTransactions.recordsTotal);
    } else {
      this.statisticTransactions.recordsTotal = 0;
    }
  }

  ngOnInit() {
  }

}
