import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';
import { RouterLink } from '@angular/router';
import { AdminFormValuesInterface } from '../../../shared/components/adminForm/types/adminFormValues.interface';
import { AdminFormComponent } from '../../../shared/components/adminForm/adminForm.component';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { ProductRequestInterface } from '../../types/productRequest.interface';
import { adminProductsActions } from '../../store/actions';

@Component({
  selector: 'eCommerce-admin-create-product',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    FormatPricePipe,
    RouterLink,
    AdminFormComponent,
  ],
  templateUrl: './admin-create-product.component.html',
})
export class AdminCreateProductComponent {
  initialValues = {
    name: '',
    company: '',
    category: '',
    description: '',
    price: 0,
  };

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private store: Store) {}

  onSubmit(adminFormValues: AdminFormValuesInterface): void {
    this.store.dispatch(
      adminProductsActions.createProduct({
        request: adminFormValues,
      })
    );
  }
}
