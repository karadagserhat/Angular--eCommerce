import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectProductsData,
} from '../../../products/store/reducers';
import { CommonModule } from '@angular/common';
import { productsActions } from '../../../products/store/actions';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';
import { Router, RouterLink } from '@angular/router';
import { adminProductsActions } from '../../store/actions';

@Component({
  selector: 'eCommerce-admin-dashboard',
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormatPricePipe, RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);

  products$ = this.store.select(selectProductsData);
  isLoading$ = this.store.select(selectIsLoading);

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts({ url: '/products' }));
  }
}
