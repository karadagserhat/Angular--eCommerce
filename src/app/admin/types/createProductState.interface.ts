import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';

export interface CreateProductStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
