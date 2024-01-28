import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminCreateProductComponent } from './components/admin-create-product/admin-create-product.component';
import { AdminUpdateProductComponent } from './components/admin-update-product/admin-update-product.component';
import { CreateProductService } from './services/createProduct.service';
import { DeleteProductService } from './services/deleteProduct.service';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrderProductComponent } from './components/admin-order-product/admin-order-product.component';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    title: 'Admin - Dashboard | E-Commerce',
  },
];

export const adminProductsRoutes: Routes = [
  {
    path: '',
    component: AdminProductsComponent,
    title: 'Admin - Products | E-Commerce',
  },
];

export const adminCreateProductRoutes: Routes = [
  {
    path: '',
    component: AdminCreateProductComponent,
    title: 'Admin - Create Product | E-Commerce',
  },
];

export const adminUpdateProductRoutes: Routes = [
  {
    path: '',
    component: AdminUpdateProductComponent,
    title: 'Admin - Update Product | E-Commerce',
  },
];

export const adminOrderProductRoutes: Routes = [
  {
    path: '',
    component: AdminOrderProductComponent,
    title: 'Admin - Order Product | E-Commerce',
  },
];
