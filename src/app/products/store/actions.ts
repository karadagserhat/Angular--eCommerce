import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetProductsResponseInterface } from '../types/getProductsResponse.interface';

export const productsActions = createActionGroup({
  source: 'products',
  events: {
    'Get products': props<{ url: string }>(),
    'Get products success': props<{ products: GetProductsResponseInterface }>(),
    'Get products failure': emptyProps(),
  },
});
