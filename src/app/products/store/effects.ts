import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersistanceService } from '../../shared/services/persistance.service';
import { authActions } from '../../auth/store/actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { productsActions } from './actions';
import { GetProductsResponseInterface } from '../types/getProductsResponse.interface';

export const getProductsEffect = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(productsActions.getProducts),
      switchMap(({ url }) => {
        return productsService.getProducts(url).pipe(
          map((products: GetProductsResponseInterface) => {
            return productsActions.getProductsSuccess({ products });
          }),
          catchError(() => {
            return of(productsActions.getProductsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
