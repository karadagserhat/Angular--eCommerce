import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'eCommerce-productsGrid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productsGrid.component.html',
})
export class ProductsGrid {
  @Input() id?: string;

  constructor(private router: Router) {}

  navigateSingle() {
    this.router.navigate([`/products/${this.id}`]);
  }
}
