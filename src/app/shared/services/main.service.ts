import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class MainService {

  root = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }

  getTransactions(_month) {
    return this.http.get(this.root + 'transactions/valid/' + _month);
  }
}

