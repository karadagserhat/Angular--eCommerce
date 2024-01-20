import { Component, Input, OnInit } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { productsActions } from '../../store/actions';
import {
  selectError,
  selectIsLoading,
  selectProductsData,
} from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../../../shared/components/errorMessage/errorMessage.component';

@Component({
  selector: 'eCommerce-productContainer',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, ErrorMessageComponent],
  templateUrl: './productContainer.component.html',
})
export class ProductContainer implements OnInit {
  @Input() apiUrl: string = '';

  isLoading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectError);
  products$ = this.store.select(selectProductsData);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts({ url: this.apiUrl }));
  }
}
