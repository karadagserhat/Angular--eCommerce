import { createFeature, createReducer, on } from '@ngrx/store';

import { adminProductsActions } from '../../../store/actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { UpdateProductStateInterface } from '../../../types/updateProductState.interface';

const initialState: UpdateProductStateInterface = {
  product: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
};

const updateProductFeature = createFeature({
  name: 'updateProduct',
  reducer: createReducer(
    initialState,
    on(adminProductsActions.getProduct, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(adminProductsActions.getProductSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      product: action.product,
    })),
    on(adminProductsActions.getProductFailure, (state) => ({
      ...state,
      isLoading: false,
    })),

    // update
    on(adminProductsActions.updateProduct, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(adminProductsActions.updateProductSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(adminProductsActions.updateProductFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: updateProductFeatureKey,
  reducer: updateProductReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectIsLoading,
  selectProduct,
} = updateProductFeature;
