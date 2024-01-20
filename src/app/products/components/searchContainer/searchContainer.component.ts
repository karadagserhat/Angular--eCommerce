import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'eCommerce-searchContainer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './searchContainer.component.html',
})
export class SearchContainer {}
