import { Product } from './product.model';

export type ProductInCart = Product & { quantity: number };
export type Cart = {
  listProduct: ProductInCart[];
  totalAmount: number;
};
