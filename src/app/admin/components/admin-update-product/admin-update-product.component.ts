import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdminFormValuesInterface } from '../../../shared/components/adminForm/types/adminFormValues.interface';
import { AdminFormComponent } from '../../../shared/components/adminForm/adminForm.component';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { ProductRequestInterface } from '../../types/productRequest.interface';
import { adminProductsActions } from '../../store/actions';
import { ProductInterface } from '../../types/product.interface';
import { selectIsLoading, selectProduct } from './store/reducers';

@Component({
  selector: 'eCommerce-admin-update-product',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    FormatPricePipe,
    RouterLink,
    AdminFormComponent,
  ],
  templateUrl: './admin-update-product.component.html',
})
export class AdminUpdateProductComponent implements OnInit {
  initialValues$: Observable<AdminFormValuesInterface> = this.store.pipe(
    select(selectProduct),
    filter((product): product is ProductInterface => product !== null),
    map((product: ProductInterface) => {
      return {
        name: product.name,
        company: product.company,
        category: product.category,
        description: product.description,
        price: product.price,
      };
    })
  );

  id = this.route.snapshot.paramMap.get('id') ?? '';

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
    isLoading: this.store.select(selectIsLoading),
    initialValues: this.initialValues$,
  });

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(adminProductsActions.getProduct({ id: this.id }));
  }

  onSubmit(adminFormValues: AdminFormValuesInterface): void {
    this.store.dispatch(
      adminProductsActions.updateProduct({
        request: adminFormValues,
        id: this.id,
      })
    );
  }
}
