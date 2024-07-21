import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/Products';
import { Icategory } from '../../shared/Categories';
import { ShopParams } from '../../shared/Shopparams';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  products: IProduct[];
  categories: Icategory[];
  ShopParams = new ShopParams;
  ngOnInit(): void {
    this.getproduct();
    this.getcategory();
  }
  constructor(private shopservice:ShopService){}
  getproduct() {
    this.shopservice.getProducts(this.ShopParams).subscribe(
      res => {
        this.products = res!.data
        this.ShopParams.totalCount = res!.pageCount;
        this.ShopParams.pageNumber = res!.pageNumber;
        this.ShopParams.pageSize = res!.pageSize;
      })
  }
  getcategory() {
    this.shopservice.getCategories()
    .subscribe((res) => {this.categories = res})
  }
  oncategoryselect(categoryid: number) {
    //   this.ShopParams.pageNumber=1;
    this.ShopParams.categoryid = categoryid;
    this.getproduct();
  }
}
