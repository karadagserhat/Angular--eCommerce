import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';
import { Router, RouterLink } from '@angular/router';
import { OrderService } from '../../../order/services/order.service';

@Component({
  selector: 'eCommerce-admin-order-product',
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormatPricePipe, RouterLink],
  templateUrl: './admin-order-product.component.html',
})
export class AdminOrderProductComponent {
  orderService = inject(OrderService);
  order!: any;

  constructor() {
    this.order = this.orderService.showAllOrders().subscribe((order) => {
      this.order = order;
    });
  }

  onSubmit() {
    // this.orderService.updateOrder();
  }
}
