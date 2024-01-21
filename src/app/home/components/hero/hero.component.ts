import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'eCommerce-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
