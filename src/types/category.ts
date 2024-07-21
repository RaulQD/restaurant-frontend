
import { z } from 'zod'


export type Category = {
  id_category: number
  category_name: string
  available?: number
}
export const CategorySchema = z.object({
  id_category: z.number(),
  category_name: z.string(),
  available: z.number().optional()
})

export const CateogoryListSchema = z.array(
  CategorySchema.pick({
    id_category: true,
    category_name: true,
    available: true
  })
)
export type CategoryList = z.infer<typeof CategorySchema>

export type CategoryFormData = Pick<Category, 'category_name'>