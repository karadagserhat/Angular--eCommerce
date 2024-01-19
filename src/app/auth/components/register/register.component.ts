import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'eCommerce-register',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './register.component.html',
  standalone: true,
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('form', this.form.getRawValue());
  }
}
