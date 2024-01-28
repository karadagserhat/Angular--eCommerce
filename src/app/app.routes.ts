import { Routes } from '@angular/router';
import { AdminGuard } from './auth/guards/admin.guard';
import { UserGuard } from './auth/guards/user.guard';

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
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.routes').then((m) => m.routes),
    canActivate: [UserGuard],
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.routes').then((m) => m.routes),
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.routes').then((m) => m.routes),
    canActivate: [UserGuard],
  },
  {
    path: 'admin/dashboard',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminDashboardRoutes),
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/products',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminProductsRoutes),
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/create-product',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminCreateProductRoutes),
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/orders',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminOrderProductRoutes),
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/update-product/:id',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminUpdateProductRoutes),
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.routes').then((m) => m.routes),
  },
];
