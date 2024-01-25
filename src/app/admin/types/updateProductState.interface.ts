import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { ProductInterface } from './product.interface';

export interface UpdateProductStateInterface {
  product: ProductInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
