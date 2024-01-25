import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { Subscription, combineLatest, filter } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import {
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { CurrentUserRequestInterface } from '../../../shared/types/currentUserRequest.interface';
import { authActions } from '../../../auth/store/actions';

@Component({
  selector: 'eCommerce-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    ReactiveFormsModule,
    BackendErrorMessages,
  ],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  form = this.fb.nonNullable.group({
    email: '',
    password: '',
  });
  currentUser?: CurrentUserInterface;
  currentUserSubscription?: Subscription;

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.store
      .pipe(select(selectCurrentUser), filter(Boolean))
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    // if (!this.initializeForm) throw new Error('Current User is not set!');

    this.form.patchValue({
      email: this.currentUser?.email,
      password: '',
    });
  }

  submit(): void {
    if (!this.currentUser) throw new Error('Current User is not set!');

    const currentUserReq: CurrentUserRequestInterface = {
      ...this.currentUser,
      ...this.form.getRawValue(),
    };
    this.store.dispatch(authActions.updateCurrentUser({ currentUserReq }));
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }
}
