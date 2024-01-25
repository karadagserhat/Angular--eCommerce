import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeleteProductService } from '../services/deleteProduct.service';
import { adminProductsActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CreateProductService } from '../services/createProduct.service';
import { ProductInterface } from '../types/product.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { GetProductService } from '../services/getProduct.service';
import { UpdateProductService } from '../services/updateProduct.service';

// DELETE
export const deleteProductEffect = createEffect(
  (
    actions$ = inject(Actions),
    deleteProductService = inject(DeleteProductService)
  ) => {
    return actions$.pipe(
      ofType(adminProductsActions.deleteProduct),
      switchMap(({ id }) => {
        return deleteProductService.deleteProduct(id).pipe(
          map(() => {
            return adminProductsActions.deleteProductSuccess();
          }),
          catchError(() => {
            return of(adminProductsActions.deleteProductFailure());
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterDeleteEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(adminProductsActions.deleteProductSuccess),
      tap(() => {
        router.navigateByUrl('/admin/dashboard');
      })
    );
  },
  { functional: true, dispatch: false }
);

// CREATE
export const createProductEffect = createEffect(
  (
    actions$ = inject(Actions),
    createProductService = inject(CreateProductService)
  ) => {
    return actions$.pipe(
      ofType(adminProductsActions.createProduct),
      switchMap(({ request }) => {
        return createProductService.createProduct(request).pipe(
          map((product: ProductInterface) => {
            return adminProductsActions.createProductSuccess({ product });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              adminProductsActions.createProductFailure({
                errors: errorResponse.error.msg,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(adminProductsActions.createProductSuccess),
      tap(() => {
        router.navigateByUrl('/admin/dashboard');
      })
    );
  },
  { functional: true, dispatch: false }
);

// GET
export const getProductEffect = createEffect(
  (
    actions$ = inject(Actions),
    getProductService = inject(GetProductService)
  ) => {
    return actions$.pipe(
      ofType(adminProductsActions.getProduct),
      switchMap(({ id }) => {
        return getProductService.getProduct(id).pipe(
          map((product: ProductInterface) => {
            return adminProductsActions.getProductSuccess({ product });
          }),
          catchError(() => {
            return of(adminProductsActions.getProductFailure());
          })
        );
      })
    );
  },
  { functional: true }
);

// UPDATE
export const updateProductEffect = createEffect(
  (
    actions$ = inject(Actions),
    updateProductService = inject(UpdateProductService)
  ) => {
    return actions$.pipe(
      ofType(adminProductsActions.updateProduct),
      switchMap(({ request, id }) => {
        return updateProductService.updateProduct(id, request).pipe(
          map((product: ProductInterface) => {
            return adminProductsActions.updateProductSuccess({ product });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              adminProductsActions.updateProductFailure({
                errors: errorResponse.error.msg,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterUpdateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(adminProductsActions.updateProductSuccess),
      tap(({ product }) => {
        router.navigateByUrl('/admin/dashboard');
      })
    );
  },
  { functional: true, dispatch: false }
);
