import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from '../home-hero/hero.component';
import { ServiceComponent } from '../home-service/service.component';
import { ProductsComponent } from '../home-products/home-products.component';
import { StoryComponent } from '../home-story/story.component';
import { TestimonialComponent } from '../home-testimonial/testimonial.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eCommerce-home',
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
    CommonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
