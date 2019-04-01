import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionManagementComponent} from './transaction-management/transaction-management.component';
import {TransactionsMonthComponent} from './transaction-management/transactions-month/transactions-month.component';
import {TransactionsStatisticsComponent} from './transaction-management/transactions-statistics/transactions-statistics.component';
import {TransactionsListComponent} from './transaction-management/transactions-list/transactions-list.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [TransactionManagementComponent, TransactionsMonthComponent, TransactionsStatisticsComponent, TransactionsListComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [TransactionManagementComponent]
})
export class TransactionManagementModule {
}
