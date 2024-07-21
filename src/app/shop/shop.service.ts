import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/Paginations';
import { Icategory } from '../shared/Categories';
import { IProduct } from '../shared/Products';
import { ShopParams } from '../shared/Shopparams';

import { response } from 'express';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShopService {
  BaseUrl = "https://localhost:44397/api/";
  constructor(private http:HttpClient) { }

  getProducts(ShopParams:ShopParams)
  {
    let params = new HttpParams();
    if(ShopParams.categoryid != 0)
    {
      params = params.append('CategoryId',ShopParams.categoryid.toString());
    }
    params =params.append('Sorting',ShopParams.sorting.toString());
    params =params.append('PageNumber',ShopParams.pageNumber.toString());
    params =params.append('Pagesize',ShopParams.pageSize.toString());
    return this.http.get<IPagination>(this.BaseUrl+'Product/get-all-products',
      {observe:'response',params}).pipe(map(response=>{return response.body}));
    
  }
  getCategories(){
    return this.http.get<Icategory[]>(this.BaseUrl+"Category/get-all-category");
  }
  getProduct(id:number)
  {
    //console.log(id);
    return this.http.get<IProduct>(this.BaseUrl+'Product/get-product-by-id/'+id);
  }
}
