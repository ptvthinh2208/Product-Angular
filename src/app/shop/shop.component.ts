import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/Products';
import { Icategory } from '../shared/Categories';
import { ShopParams } from '../shared/Shopparams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{

  products: IProduct[];
  categories: Icategory[];
  ShopParams = new ShopParams;

  constructor(private shopservice:ShopService){

  }
  ngOnInit(): void {
    
    this.getproduct();
    this.getcategory();
  }
  getproduct() {
    this.shopservice.getProducts(this.ShopParams).subscribe(
      res => {this.products = res!.data
        this.ShopParams.totalCount = res!.pageCount;
        this.ShopParams.pageNumber = res!.pageNumber;
        this.ShopParams.pageSize = res!.pageSize;
      })
  }
  getcategory() {
    this.shopservice.getCategories()
    .subscribe((res) => {this.categories = res})
  }
  //event page change
  onPageChanged(event:any)
  {
    if(this.ShopParams.pageNumber !== event){
      this.ShopParams.pageNumber = event;
      this.getproduct(); 
    }
  }
}
