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
import { OrderService } from '../../order/services/order.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormatPricePipe } from '../../shared/pipes/formatPrice.pipe';

@Component({
  selector: 'eCommerce-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, FormatPricePipe],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  cartService = inject(CartService);
  cart: any;

  order: Order = new Order();

  checkoutForm!: FormGroup;
  currentUser!: any;

  currentUser$ = this.store.select(selectCurrentUser);

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private orderService: OrderService,
    private router: Router
  ) {
    this.cart = this.cartService.getCart();
    this.order.items = this.cart.items;
    this.order.total = this.cart.totalPrice;
    this.order.tax = this.cart.tax;
  }

  ngOnInit(): void {
    this.currentUser$.subscribe((r) => (this.currentUser = r));

    this.checkoutForm = this.fb.nonNullable.group({
      email: [this.currentUser.email, Validators.required],
      address: [this.order.address, Validators.required],
    });
  }

  createOrder() {
    // this.currentUser.email = this.checkoutForm.controls['email'].value;
    // this.order.address = this.checkoutForm.controls['address'].value;

    this.order = { ...this.checkoutForm.getRawValue(), ...this.order };

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl('/order');
        this.cartService.clearCart();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log('err*********', errorResponse);
        // toastService
      },
    });
  }
}
