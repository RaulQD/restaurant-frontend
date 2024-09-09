
export type CartForm = {
  userId: string;
  dishId: string;
  quantity: number;
}
export type CartDelete = Pick<CartForm, 'userId' | 'dishId'>;

export type Cart = {
  _id: string;
  userId: string;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}
export type CartUserID = Pick<Cart, 'userId'>;

export type CartItemsList = Pick<Cart, 'items'>;

export type CartItem = {
  dishId: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}
export type UpdateCartItems = Pick<CartItem, 'dishId' | 'quantity'>;


