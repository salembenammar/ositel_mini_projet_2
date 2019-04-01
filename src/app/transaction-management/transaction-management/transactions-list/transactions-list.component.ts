import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DataTablesModule} from 'angular-datatables';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit, AfterViewInit {
  @Input() transactionsList;

   persons = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }




}
