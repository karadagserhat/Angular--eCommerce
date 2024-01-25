import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProductRequestInterface } from '../types/productRequest.interface';
import { ProductInterface } from '../types/product.interface';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';

export const adminProductsActions = createActionGroup({
  source: 'admin product',
  events: {
    'Get product': props<{ id: string }>(),
    'Get product success': props<{ product: ProductInterface }>(),
    'Get product failure': emptyProps(),

    'Update product': props<{ request: ProductRequestInterface; id: string }>(),
    'Update product success': props<{ product: ProductInterface }>(),
    'Update product failure': props<{ errors: BackendErrorsInterface }>(),

    'Create product': props<{ request: ProductRequestInterface }>(),
    'Create product success': props<{
      product: ProductInterface;
    }>(),
    'Create product failure': props<{ errors: BackendErrorsInterface }>(),

    'Delete product': props<{ id: string }>(),
    'Delete product success': emptyProps(),
    'Delete product failure': emptyProps(),
  },
});
