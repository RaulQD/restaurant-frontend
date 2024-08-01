// import { z } from "zod";
// import { CategorySchema } from "./category";
import { type Category } from "../admin/pages/category/types/category";



export type Dishes = {
  id_dish: number;
  dishes_name: string;
  description: string;
  available: number;
  price: number;
  image_url: string | null;
  created_at: string;
  category: Category;
}



// export const DishListSchema = z.object({
//   id_dish: z.number(),
//   dishes_name: z.string(),
//   description: z.string(),
//   price: z.number(),
//   available: z.number(),
//   image_url: z.string().optional(),
//   category: CategorySchema,
// });
// export const DishesListSchema = z.array(DishListSchema);

// export type DishesList = z.infer<typeof DishesSchema>;
// export type DishesFormData = Pick<DishesList, 'dishes_name' | 'description' | 'id_category' | 'price' | 'image_url'>
