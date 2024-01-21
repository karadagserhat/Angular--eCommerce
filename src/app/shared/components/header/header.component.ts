import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { CommonModule } from '@angular/common';
import { authActions } from '../../../auth/store/actions';

@Component({
  selector: 'eCommerce-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentUser$ = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(authActions.logout());
  }
}
