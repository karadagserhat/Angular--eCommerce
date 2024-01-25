import { createFeature, createReducer, on } from '@ngrx/store';

import { adminProductsActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { CreateProductStateInterface } from '../types/createProductState.interface';

const initialState: CreateProductStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createProductFeature = createFeature({
  name: 'createProduct',
  reducer: createReducer(
    initialState,
    on(adminProductsActions.createProduct, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(adminProductsActions.createProductSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
    })),
    on(adminProductsActions.createProductFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: createProductFeatureKey,
  reducer: createProductReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = createProductFeature;
