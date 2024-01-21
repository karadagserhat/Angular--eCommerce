import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetSingleProductResponseInterface } from '../types/getSingleProductResponseInterface.interface';

export const singleProductActions = createActionGroup({
  source: 'single product',
  events: {
    'Get single product': props<{ id: string }>(),
    'Get single product success': props<{
      product: GetSingleProductResponseInterface;
    }>(),
    'Get single product failure': emptyProps(),
  },
});
