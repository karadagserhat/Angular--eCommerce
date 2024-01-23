import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductsStateInterface } from '../types/productsState.interface';
import { productsActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: ProductsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialState,
    on(productsActions.getProducts, (state) => ({ ...state, isLoading: true })),
    on(productsActions.getProductsSuccess, (state, action) => ({
      ...state,
      isLoading: true,
      data: action.products,
    })),
    on(productsActions.getProductsFailure, (state) => ({
      ...state,
      isLoading: false,
    })),

    // jumping between pages, eski state'i değil, güncel state'i görmen için resetle.
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: productsFeatureKey,
  reducer: productsReducer,
  selectIsLoading,
  selectData: selectProductsData,
  selectError,
} = productsFeature;
