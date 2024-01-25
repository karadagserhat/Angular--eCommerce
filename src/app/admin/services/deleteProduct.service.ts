import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeleteProductService {
  constructor(private http: HttpClient) {}

  deleteProduct(id: string): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/products/${id}`;

    return this.http.delete(fullUrl);
  }
}
