import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { CommonModule } from '@angular/common';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';

@Component({
  selector: 'eCommerce-register',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    BackendErrorMessages,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);
  backendErrors$ = this.store.select(selectValidationErrors);
  // data$ = combineLatest({
  //   isSubmitting: this.store.select(selectIsSubmitting),
  //   backendErrors: this.store.select(selectValidationErrors),
  // });

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    const request: RegisterRequestInterface = this.form.getRawValue();
    // this.authService.register(request).subscribe((res) => console.log(res)); for testing
    this.store.dispatch(authActions.register({ request }));
  }
}
