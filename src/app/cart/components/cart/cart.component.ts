import { Component, OnInit, inject } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'eCommerce-cart',
  standalone: true,
  imports: [CommonModule, FormatPricePipe, RouterLink],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);

  formatPrice: any;
  cart!: Cart;

  ngOnInit(): void {
    this.cartService
      .getCartObservable()
      .subscribe((cart) => (this.cart = cart));
  }

  removeFromCart(cartItem: CartItem) {
    console.log(cartItem);
    this.cartService.removeFromCart(cartItem.bookcase.id);
  }

  changeQuantity(cartItem: CartItem, quantityString: string) {
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.bookcase.id, quantity);
  }
}
