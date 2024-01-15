import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'E-Commerce',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log In',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign Up',
  },

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found',
  },
];
