import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Hyper Company | E-Commerce',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products | Hyper Company',
  },
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
    path: 'login',
    component: LoginComponent,
    title: 'Login | Hyper Company',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Register | Hyper Company',
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
