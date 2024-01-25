import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
