import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    title: 'Register | Hyper Company',
  },
];

export const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login | Hyper Company',
  },
];
