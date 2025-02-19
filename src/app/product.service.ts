import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase = "http://localhost:8082/inventory/products";

  constructor(private clientHttp: HttpClient) { }

  getListOfProducts(): Observable<Product[]>{
    return this.clientHttp.get<Product[]>(this.urlBase);
  }
}
