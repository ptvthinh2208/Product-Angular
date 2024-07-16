import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/Products';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent  {
  @Input() products:IProduct;
}
