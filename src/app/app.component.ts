import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Products';
import { IPagination } from './shared/Paginations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'Client';

}
