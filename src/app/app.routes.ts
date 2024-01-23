import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.routes),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./singleProduct/singleProduct.routes').then((m) => m.routes),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.routes').then((m) => m.routes),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.routes').then((m) => m.routes),
  },
];
