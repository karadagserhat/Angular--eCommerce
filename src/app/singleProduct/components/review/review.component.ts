import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'eCommerce-review',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {
  store = inject(Store);
  reviewService = inject(ReviewsService);
  reviews: any;

  @Input() product: any;

  currentUser$ = this.store.select(selectCurrentUser);

  constructor() {
    this.reviewService.getReviews().subscribe((r) => {
      console.log(r);
      this.reviews = r;
    });
  }

  ngOnInit(): void {}
}
