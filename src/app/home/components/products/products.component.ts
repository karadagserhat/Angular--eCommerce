import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProductsData } from '../../../products/store/reducers';
import { productsActions } from '../../../products/store/actions';

@Component({
  selector: 'eCommerce-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products$ = this.store.select(selectProductsData);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts({ url: '/products' }));
  }
}
