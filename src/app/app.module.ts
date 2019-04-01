import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {TransactionManagementModule} from './transaction-management/transaction-management.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TransactionManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
