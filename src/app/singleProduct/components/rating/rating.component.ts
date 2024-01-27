import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eCommerce-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  @Input() rating: any;
}
