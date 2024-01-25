import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectProductsData,
} from '../../../products/store/reducers';
import { productsActions } from '../../../products/store/actions';
import { adminProductsActions } from '../../store/actions';

@Component({
  selector: 'eCommerce-admin-products',
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormatPricePipe, RouterLink],
  templateUrl: './admin-products.component.html',
})
export class AdminProductsComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);

  products$ = this.store.select(selectProductsData);
  isLoading$ = this.store.select(selectIsLoading);

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts({ url: '/products' }));
  }

  deleteButton(id: string) {
    this.store.dispatch(adminProductsActions.deleteProduct({ id }));
  }
}
