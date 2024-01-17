import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductsComponent } from './components/products/products.component';
import { StoryComponent } from './components/story/story.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    ServiceComponent,
    ProductsComponent,
    TestimonialComponent,
    StoryComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
