import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectIsLoading,
  selectSingleProductData,
} from '../../store/reducers';
import { singleProductActions } from '../../store/actions';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'eCommerce-singleProduct',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './singleProduct.component.html',
})
export class SingleProductComponent implements OnInit {
  store = inject(Store);
  route = inject(ActivatedRoute);

  id: string = '';

  isLoading$ = this.store.select(selectIsLoading);
  error$ = this.store.select(selectError);
  singleProduct$ = this.store
    .select(selectSingleProductData)
    .pipe(map((r) => r?.product));

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.fetchSingleProduct();
    });
  }

  fetchSingleProduct(): void {
    this.store.dispatch(singleProductActions.getSingleProduct({ id: this.id }));
  }
}
