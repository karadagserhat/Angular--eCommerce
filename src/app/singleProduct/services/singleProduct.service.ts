import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GetSingleProductResponseInterface } from '../types/getSingleProductResponseInterface.interface';
import { ProductInterface } from '../types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class SingleProductService {
  constructor(private http: HttpClient) {}

  getSingleProduct(id: string): Observable<GetSingleProductResponseInterface> {
    const fullUrl = `${environment.apiUrl}/products/${id}`;
    return this.http.get<GetSingleProductResponseInterface>(fullUrl);
  }
}
