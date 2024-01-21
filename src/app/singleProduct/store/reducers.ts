import { createFeature, createReducer, on } from '@ngrx/store';

import { singleProductActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState = {
  isLoading: false,
  error: null,
  data: null as any,
};

const singleProductFeature = createFeature({
  name: 'Single Product',
  reducer: createReducer(
    initialState,
    on(singleProductActions.getSingleProduct, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(singleProductActions.getSingleProductSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.product,
    })),
    on(singleProductActions.getSingleProductFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: singleProductFeatureKey,
  reducer: singleProductReducer,
  selectIsLoading,
  selectData: selectSingleProductData,
  selectError,
} = singleProductFeature;
