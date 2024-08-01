// import { z } from "zod";
import { Categories } from "../../category/types/category";

// export const ResultSchema = z.object({
//   "id": z.string(),
//   "name": z.string(),
//   "description": z.string(),
//   "originalPrice": z.number(),
//   "available": z.boolean(),
//   "category": categorySchema,
//   "images": z.string().optional(),
// })
// export const PaginationInfoSchema = z.object({
//   "page": z.number(),
//   "limit": z.number(),
//   "totalDishes": z.number(),
// });
// export type Pagination = z.infer<typeof PaginationInfoSchema>;
// export const DishesSchema = z.object({
//   result: z.array(ResultSchema),
//   info: PaginationInfoSchema,
// });
// export const DishesListSchema = z.array(DishesSchema);
// export type Result = z.infer<typeof ResultSchema>;

// export type Dishes = z.infer<typeof DishesSchema>;
// export type DishesList = z.infer<typeof DishesListSchema>

// export const DishSchema = z.object({
//   "id": z.string(),
//   "name": z.string(),
//   "description": z.string(),
//   "originalPrice": z.number(),
//   "available": z.boolean(),
//   "category": z.string(),
//   "images": z.string(),
// });
// export type Dish = z.infer<typeof DishSchema>;


export type Dish = {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  available: boolean;
  category: string;
  images: string;
}
export type DishFormData = Pick<Dish, 'name' | 'description' | 'originalPrice' | 'category' | 'images'>;
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

