import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SearchContainer } from '../searchContainer/searchContainer.component';
import { ProductContainer } from '../productContainer/productContainer.component';

@Component({
  selector: 'eCommerce-products',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, SearchContainer, ProductContainer],
  templateUrl: './products.component.html',
})
export class ProductsComponent {}
