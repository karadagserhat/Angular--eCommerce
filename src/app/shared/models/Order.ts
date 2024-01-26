import { CartItem } from './CartItem';

export class Order {
  id?: string;
  items?: CartItem[];
  total?: number;
  name?: string;
  address?: string;
  paymentId?: string;
  createdAt?: string;
  status?: string;
  tax?: number;
}
