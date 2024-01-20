import { GetProductsResponseInterface } from './getProductsResponse.interface';

export interface ProductsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetProductsResponseInterface | null;
}
