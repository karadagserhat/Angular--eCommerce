import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { CommonModule } from '@angular/common';

const themes = {
  lemonade: 'lemonade',
  luxury: 'luxury',
};

@Component({
  selector: 'eCommerce-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  store = inject(Store);
  currentUser$ = this.store.select(selectCurrentUser);

  theme = signal<string>(this.getThemeFromLocalStorage());

  getThemeFromLocalStorage() {
    return localStorage.getItem('theme') || themes.lemonade;
  }

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
      localStorage.setItem('theme', this.theme());
    });
  }

  handleTheme() {
    const { lemonade, luxury } = themes;
    const newTheme = this.theme() === lemonade ? luxury : lemonade;

    this.theme.set(newTheme);
  }
}
