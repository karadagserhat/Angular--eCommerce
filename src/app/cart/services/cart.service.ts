import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Bookcase } from '../../shared/models/Bookcase';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(bookcase: Bookcase): void {
    let cartItem = this.cart.items.find(
      (item) => item.bookcase.id === bookcase.id
    );
    // bookcase can be 2 amount, but not 2 different routes
    if (cartItem) return;

    this.cart.items.push(new CartItem(bookcase));
    this.setCartToLocalStorage();
  }

  removeFromCart(bookcaseId: string): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.bookcase.id != bookcaseId
    );
    this.setCartToLocalStorage();
  }

  changeQuantity(bookcaseId: string, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.bookcase.id === bookcaseId
    );
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.bookcase.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    // If send subject outside, can be change value from outside
    // you don't want the stream source to be publicly available in every component
    // any changes to cart, should happen in cart service
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    this.cart.tax = 15;

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    // because of we set localStorage, it means we are changing cart ...
    // so anybody who's listening to cart observable should be notified...
    // notify all the listeners of cart observable
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
