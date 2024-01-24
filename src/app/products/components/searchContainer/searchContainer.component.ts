import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { productsActions } from '../../store/actions';

@Component({
  selector: 'eCommerce-searchContainer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './searchContainer.component.html',
})
export class SearchContainer implements OnInit {
  search: any = '';
  category: string = '';
  company: string = '';
  url: string = '';
  sort: string = '';
  price: number = 0;
  max: number = 12.2;

  ngOnInit(): void {
    this.sort = 'a-z';
    this.category = 'all';
    this.company = 'all';
  }

  constructor(private router: Router, private store: Store) {}

  // &category=all&company=all&order=a-z&price=100000
  searchButton() {
    this.url = `/products/?search=${this.search}&category=${this.category}&company=${this.company}&sort=${this.sort}`;
    this.store.dispatch(productsActions.getProducts({ url: this.url }));
  }

  enterKeyup(search: any) {
    this.url = `/products/?search=${search}&category=${this.category}&company=${this.company}&sort=${this.sort}`;
    this.store.dispatch(productsActions.getProducts({ url: this.url }));
  }

  resetButton() {
    this.search = '';
    this.category = 'all';
    this.company = 'all';
    this.sort = 'a-z';
    this.store.dispatch(productsActions.getProducts({ url: '/products' }));
  }
}
