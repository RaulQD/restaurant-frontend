

export type Categories = {
  id: string
  name: string
  available: boolean
}

export type CategoryFormData = Pick<Categories, 'name'>
