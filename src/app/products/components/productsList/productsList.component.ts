import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormatPricePipe } from '../../../shared/pipes/formatPrice.pipe';

@Component({
  selector: 'eCommerce-productsList',
  standalone: true,
  imports: [CommonModule, FormatPricePipe],
  templateUrl: './productsList.component.html',
})
export class ProductsList {
  @Input() id?: string;
  @Input() img?: string;
  @Input() name?: string;
  @Input() price?: string;
  @Input() company?: string;

  constructor(private router: Router) {}

  navigateSingle() {
    this.router.navigate([`/products/${this.id}`]);
  }
}
