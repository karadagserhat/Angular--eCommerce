import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectSingleProductData,
} from '../../store/reducers';
import { singleProductActions } from '../../store/actions';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { CartService } from '../../../cart/services/cart.service';
import { Bookcase } from '../../../shared/models/Bookcase';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';

@Component({
  selector: 'eCommerce-singleProduct',
  standalone: true,
  imports: [RouterLink, CommonModule, FormatPricePipe],
  templateUrl: './singleProduct.component.html',
})
export class SingleProductComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cartService = inject(CartService);

  bookcase!: Bookcase;
  id: string = '';

  isLoading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectError);
  singleProduct$ = this.store
    .select(selectSingleProductData)
    .pipe(map((r) => r?.product));

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.fetchSingleProduct();
    });

    this.singleProduct$.subscribe((res) => (this.bookcase = res));
  }

  fetchSingleProduct(): void {
    this.store.dispatch(singleProductActions.getSingleProduct({ id: this.id }));
  }

  addToCart() {
    this.cartService.addToCart(this.bookcase);
    this.router.navigateByUrl('/cart');
  }
}
