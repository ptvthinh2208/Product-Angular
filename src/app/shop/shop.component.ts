import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/Products';
import { Icategory } from '../shared/Categories';
import { ShopParams } from '../shared/Shopparams';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{

  products: IProduct[];
  categories: Icategory[];
  ShopParams = new ShopParams;

  constructor(private shopservice:ShopService, private activeroute: ActivatedRoute){

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
    this.shopservice.getCategories().subscribe(res => { this.categories = [{ id: 0, name: 'All', description: '' }, ...res] })
  }
  oncategoryselect(categoryid: number) {
    console.log(categoryid);
    this.ShopParams.categoryid = categoryid;
    this.getproduct();
  }
  //event page change
  onPageChanged(event:any)
  {
    console.log(this.ShopParams.categoryid);
    if(this.ShopParams.pageNumber !== event){
      this.ShopParams.pageNumber = event;
      this.getproduct(); 
    }
  }
}
