
import { Categories } from "./category";



export type Dish = {
  id: string;
  name: string;
  description: string;
  originalPrice?: number;
  available?: boolean;
  category: string;
  images?: string;
}
export type DishFormData = Pick<Dish, 'name' | 'description' | 'originalPrice' | 'category' | 'available' | 'images'>;

export type DishesType = {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  available: boolean;
  category: Categories;
  images: string;
}

export type PaginationInfoType = {
  page: number;
  limit: number;
  totalDishes: number;
}
export type DishesResponseType = {
  result: DishesType[];
  pagination: PaginationInfoType
}

