import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProductsResponseInterface } from '../types/getProductsResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(url: string): Observable<GetProductsResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetProductsResponseInterface>(fullUrl);
  }
}
