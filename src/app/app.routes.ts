import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ProductsComponent } from './products/components/products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart | Hyper Company',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout | Hyper Company',
  },

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

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Hyper | Page Not Found',
  },
];
