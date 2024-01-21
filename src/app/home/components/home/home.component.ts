import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { ServiceComponent } from '../service/service.component';
import { ProductsComponent } from '../products/products.component';
import { StoryComponent } from '../story/story.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
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
