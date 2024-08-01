
import { z } from 'zod'

export type Categories = {
  id: string
  name: string
  available: boolean
}
export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  available: z.boolean().optional()
})

export const categoryListSchema = z.array(
  categorySchema.pick({
    id: true,
    name: true,
    available: true
  })
)
export type CategoryList = z.infer<typeof categorySchema>
export type Category = z.infer<typeof categorySchema>

export type CategoryFormData = Pick<Category, 'name'>