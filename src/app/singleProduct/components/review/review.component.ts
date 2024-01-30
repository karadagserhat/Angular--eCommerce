import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReviewsService } from '../../services/reviews.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RatingComponent } from '../rating/rating.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'eCommerce-review',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    RatingComponent,
  ],
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);
  reviewService = inject(ReviewsService);
  toastrService = inject(ToastrService);
  fb = inject(FormBuilder);
  reviews: any;

  form = this.fb.nonNullable.group({
    rating: ['', Validators.required],
    comment: ['', Validators.required],
  });

  @Input() product: any;
  @Input() id!: string;

  currentUser$ = this.store.select(selectCurrentUser);

  constructor() {}

  ngOnInit(): void {
    this.reviewService.getSingleProductReviews(this.id).subscribe((r) => {
      this.reviews = r;
    });
  }

  // redirectTo(uri: string) {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([uri]);
  //   });
  // }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  createReview() {
    this.reviewService
      .createReviews({ ...this.form.getRawValue(), product: this.id })
      .subscribe({
        next: () => {
          this.router.navigateByUrl(`/products/${this.id}`);
          // this.redirectTo(`/products/${this.id}`);
          this.reloadCurrentRoute();
          this.toastrService?.success(`Review successfully created.`);
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log('err', errorResponse);
          this.toastrService?.error(errorResponse.error.msg);
        },
      });
  }
}
