
import { z } from 'zod'


export const CategorySchema = z.object({
  id_category: z.number(),
  category_name: z.string(),
  available: z.number().optional()
})

export const CategoriesSchema = z.array(CategorySchema)