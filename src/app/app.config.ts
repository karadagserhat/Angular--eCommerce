import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from '../app/auth/store/effects';
import * as productsEffects from '../app/products/store/effects';
import * as singleProductEffects from '../app/singleProduct/store/effects';
import * as adminEffects from '../app/admin/store/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from './shared/services/authInterceptor';
import { productsFeatureKey, productsReducer } from './products/store/reducers';
import { SingleProductService } from './singleProduct/services/singleProduct.service';
import {
  singleProductFeatureKey,
  singleProductReducer,
} from './singleProduct/store/reducers';
import { DeleteProductService } from './admin/services/deleteProduct.service';
import { CreateProductService } from './admin/services/createProduct.service';
import {
  createProductFeatureKey,
  createProductReducer,
} from './admin/store/reducers';
import {
  updateProductFeatureKey,
  updateProductReducer,
} from './admin/components/admin-update-product/store/reducers';
import { UpdateProductService } from './admin/services/updateProduct.service';
import { Toast, ToastrModule, provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    [
      SingleProductService,
      DeleteProductService,
      CreateProductService,
      UpdateProductService,
    ],
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(productsFeatureKey, productsReducer),
    provideState(singleProductFeatureKey, singleProductReducer),
    provideState(createProductFeatureKey, createProductReducer),
    provideState(updateProductFeatureKey, updateProductReducer),
    provideEffects(
      authEffects,
      productsEffects,
      singleProductEffects,
      adminEffects
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
