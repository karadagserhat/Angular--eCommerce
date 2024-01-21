import { GetSingleProductResponseInterface } from './getSingleProductResponseInterface.interface';

export interface SingleProductStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetSingleProductResponseInterface | null;
}
