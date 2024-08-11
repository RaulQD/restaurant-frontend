import { StateCreator } from "zustand";
import { createCategory, getCategories } from "../services/apiCategory";
import type { Category, CategoryFormData } from "../types/category";


export type CategorySliceType = {
  categories: Category[],
  fetchCategories: () => Promise<void>
  addCategory: (category: CategoryFormData) => Promise<void>
}
const createCategories = (category: CategoryFormData): Category => {
  return {
    ...category,
    id: ''
  }
}

export const createCategorySlice: StateCreator<CategorySliceType> = (set) => ({
  categories: [],
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },

  addCategory: async (category: CategoryFormData) => {

    const response = await createCategory(category);
    if (response && response.status === 201) {
      const newCategory = createCategories(response.data);
      set((state) => ({
        categories: [...state.categories, newCategory]
      }))
    }
  }
})