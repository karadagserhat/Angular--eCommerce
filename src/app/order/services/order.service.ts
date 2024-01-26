import { Injectable, inject } from '@angular/core';
import { Order } from '../../shared/models/Order';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(order: Order) {
    const url = environment.apiUrl + '/orders';
    return this.http.post<Order>(url, order);
  }

  showAllMyOrders() {
    const url = environment.apiUrl + '/orders/showAllMyOrders';
    return this.http.get<Order>(url);
  }
}
