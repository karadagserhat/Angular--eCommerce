import { Component, OnInit, inject } from '@angular/core';
import { Order } from '../../shared/models/Order';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../cart/services/cart.service';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../auth/store/reducers';
import { OrderService } from '../services/order.service';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../shared/pipes/formatPrice.pipe';

@Component({
  selector: 'eCommerce-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormatPricePipe],
  templateUrl: './order.component.html',
})
export class OrderComponent {
  order!: any;
  orderService = inject(OrderService);

  constructor() {
    this.order = this.orderService.showAllMyOrders().subscribe((order) => {
      this.order = order;
    });
  }
}
