import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectProductsData,
} from '../../../products/store/reducers';
import { productsActions } from '../../../products/store/actions';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { ErrorMessageComponent } from '../../../shared/components/errorMessage/errorMessage.component';

@Component({
  selector: 'eCommerce-products',
  standalone: true,
  imports: [RouterLink, CommonModule, LoadingComponent, ErrorMessageComponent],
  templateUrl: './home-products.component.html',
})
export class ProductsComponent {
  products$ = this.store.select(selectProductsData);
  isLoading$ = this.store.select(selectIsLoading);
  isError$ = this.store.select(selectError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts({ url: '/products' }));
  }
}
