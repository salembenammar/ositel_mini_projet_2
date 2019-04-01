import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MainService} from './services/main.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderComponent],
  providers: [MainService]
})
export class SharedModule {
}
