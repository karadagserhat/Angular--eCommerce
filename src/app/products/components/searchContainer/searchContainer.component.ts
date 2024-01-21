import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'eCommerce-searchContainer',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './searchContainer.component.html',
})
export class SearchContainer {
  constructor(private router: Router) {}

  hey() {
    this.router.navigateByUrl(`/products`);
  }
}
