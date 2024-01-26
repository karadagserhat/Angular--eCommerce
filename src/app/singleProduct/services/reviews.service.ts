import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private http: HttpClient) {}

  getReviews() {
    const fullUrl = `${environment.apiUrl}/reviews`;
    return this.http.get(fullUrl);
  }
}
