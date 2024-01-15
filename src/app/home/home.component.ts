import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    RouterOutlet,
    FontAwesomeModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  icon = faCoffee;
}
