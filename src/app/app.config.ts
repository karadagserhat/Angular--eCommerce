import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from '../app/auth/store/effects';
import * as productsEffects from '../app/products/store/effects';
import * as singleProductEffects from '../app/singleProduct/store/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from './shared/services/authInterceptor';
import { productsFeatureKey, productsReducer } from './products/store/reducers';
import { SingleProductService } from './singleProduct/services/singleProduct.service';
import {
  singleProductFeatureKey,
  singleProductReducer,
} from './singleProduct/store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    [SingleProductService],
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideAnimations(),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(productsFeatureKey, productsReducer),
    provideState(singleProductFeatureKey, singleProductReducer),
    provideEffects(authEffects, productsEffects, singleProductEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
