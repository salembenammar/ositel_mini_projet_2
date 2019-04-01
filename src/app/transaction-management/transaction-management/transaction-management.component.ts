import {Component, OnInit} from '@angular/core';
import {MainService} from '../../shared/services/main.service';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css']
})
export class TransactionManagementComponent implements OnInit {
  statisticTransactions: any = {};
  transactionsList: Object[];

  constructor(private mainService: MainService) {
  }

  selectMonth(selectedMonth) {
    this.getTransactionsByMonth(selectedMonth);
  }

  ngOnInit() {
    this.getTransactionsByMonth(1);
  }

  getTransactionsByMonth(month) {
    /*this.statisticTransactions = {

    };
    this.transactionsList = [

      ];
    } else {
      this.statisticTransactions.recordsTotal = 0;
    }
*/
    this.mainService.getTransactions(month).subscribe((result: any) => {
      this.statisticTransactions.recordsTotal = result.recordsTotal;
      this.statisticTransactions.recordsFiltered = result.recordsFiltered;
      this.statisticTransactions.transactionInValue = result.transactionInValue;
      this.statisticTransactions.transactionOutValue = result.transactionOutValue;
      this.statisticTransactions.amountStartMonth = result.amountStartMonth;
      this.statisticTransactions.amountEndMonth = result.amountEndMonth;
      this.transactionsList = result.data;
      $('#myTable').DataTable().clear();
      $('#myTable').DataTable();
    }, error => {
      console.log('error', error);
    });
  }


}
