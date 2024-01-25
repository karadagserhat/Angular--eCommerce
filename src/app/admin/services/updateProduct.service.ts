import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRequestInterface } from '../types/productRequest.interface';
import { ProductResponseInterface } from '../types/productResponse.interface';
import { Observable, map } from 'rxjs';
import { ProductInterface } from '../types/product.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class UpdateProductService {
  constructor(private http: HttpClient) {}

  updateProduct(
    id: string,
    productRequest: ProductRequestInterface
  ): Observable<ProductInterface> {
    const fullUrl = `${environment.apiUrl}/products/${id}`;

    return this.http
      .patch<ProductResponseInterface>(fullUrl, productRequest)
      .pipe(map((res) => res.product));
  }
}
