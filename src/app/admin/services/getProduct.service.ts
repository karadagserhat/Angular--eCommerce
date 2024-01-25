import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

import { ProductInterface } from '../types/product.interface';
import { ProductResponseInterface } from '../types/productResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class GetProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: string): Observable<ProductInterface> {
    const fullUrl = `${environment.apiUrl}/products/${id}`;
    return this.http
      .get<ProductResponseInterface>(fullUrl)
      .pipe(map((res) => res.product));
  }
}
