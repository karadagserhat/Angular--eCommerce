import { Bookcase } from './Bookcase';

export class CartItem {
  constructor(public bookcase: Bookcase) {}
  name: string = this.bookcase?.name;
  category: string = this.bookcase?.category;
  company: string = this.bookcase?.company;
  image: string = this.bookcase?.image;
  price: number = this.bookcase?.price;
  id: string = this.bookcase?.id;
  quantity: number = 1;
}
