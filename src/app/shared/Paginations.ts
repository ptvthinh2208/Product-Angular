import { IProduct } from "./Products"

export interface IPagination {
    pageSize: number
    pageNumber: number
    pageCount: number
    data: IProduct[] 
  }