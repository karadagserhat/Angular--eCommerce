import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eCommerce-productsGrid',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './productsGrid.component.html',
})
export class ProductsGrid {
  @Input() id?: string;
  @Input() img?: string;
  @Input() name?: string;
  @Input() price?: string;

  constructor(private router: Router) {}

  navigateSingle() {
    this.router.navigate([`/products/${this.id}`]);
  }
}
