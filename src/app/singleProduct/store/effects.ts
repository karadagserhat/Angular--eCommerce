import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingleProductService } from '../services/singleProduct.service';
import { singleProductActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetSingleProductResponseInterface } from '../types/getSingleProductResponseInterface.interface';

export const getSingleProductEffect = createEffect(
  (
    actions$ = inject(Actions),
    singleProductService = inject(SingleProductService)
  ): any => {
    return actions$.pipe(
      ofType(singleProductActions.getSingleProduct),
      switchMap(({ id }) => {
        return singleProductService.getSingleProduct(id).pipe(
          map((product: GetSingleProductResponseInterface) => {
            return singleProductActions.getSingleProductSuccess({
              product,
            });
          }),
          catchError(() => {
            return of(singleProductActions.getSingleProductFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
