import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'eCommerce-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
