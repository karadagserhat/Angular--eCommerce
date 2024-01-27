import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private http: HttpClient) {}

  getReviews(url: string) {
    const fullUrl = environment.apiUrl + url;
    return this.http.get(fullUrl);
  }
  // getReviews() {
  //   const fullUrl = `${environment.apiUrl}/reviews`;
  //   return this.http.get(fullUrl);
  // }

  getSingleProductReviews(id: string) {
    const fullUrl = `${environment.apiUrl}/products/${id}/reviews`;
    return this.http.get(fullUrl);
  }

  createReviews(review: any) {
    const fullUrl = environment.apiUrl + '/reviews';
    return this.http.post(fullUrl, review);
  }
}
