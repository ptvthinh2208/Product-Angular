import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shared/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(private shopservice: ShopService, private activeroute: ActivatedRoute){}
  ngOnInit(): void {
    this.loadproduct();
  }
  loadproduct() {
    this.shopservice.getProduct(parseInt(this.activeroute.snapshot.paramMap.get('id')!)).subscribe
      (res => {
        this.product = res;
      });
  }

}
