import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFormValuesInterface } from './types/adminFormValues.interface';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { BackendErrorMessages } from '../backendErrorMessages/backendErrorMessages.component';

@Component({
  selector: 'eCommerce-admin-form',
  standalone: true,
  imports: [CommonModule, BackendErrorMessages, ReactiveFormsModule],
  templateUrl: './adminForm.component.html',
})
export class AdminFormComponent implements OnInit {
  @Input() initialValues?: AdminFormValuesInterface;
  @Input() isSubmitting: boolean = false;
  @Input() backendErrors: BackendErrorsInterface | null = null;

  @Output() adminSubmit = new EventEmitter<AdminFormValuesInterface>();

  form = this.fb.nonNullable.group({
    name: '',
    company: '',
    category: '',
    description: '',
    price: 0,
    image: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    if (!this.initialValues) throw new Error('Inputs are not provided');

    this.form.patchValue({
      name: this.initialValues.name,
      company: this.initialValues.company,
      category: this.initialValues.category,
      description: this.initialValues.description,
      price: this.initialValues.price,
    });
  }

  onSubmit(): void {
    this.adminSubmit.emit(this.form.getRawValue());
  }
}
