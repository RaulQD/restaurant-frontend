import { z } from "zod";
import { CategorySchema } from "./category";

export const DishSchema = z.object({
  id_dish: z.number(),
  dishes_name: z.string(),
  description: z.string(),
  available: z.number(),
  price: z.number(),
  image_url: z.string().nullable(),
  created_at: z.string().datetime(),
  category: CategorySchema
});

export const DishesSchema = z.array(DishSchema);
