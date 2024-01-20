import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { CommonModule } from '@angular/common';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'eCommerce-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    BackendErrorMessages,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);
  backendErrors$ = this.store.select(selectValidationErrors);

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    const request: LoginRequestInterface = this.form.getRawValue();

    this.store.dispatch(authActions.login({ request }));
  }
}
