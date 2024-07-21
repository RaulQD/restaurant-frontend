import { StateCreator } from "zustand";
import { createCategory, getCategories } from "../admin/pages/category/services/CategoryApi";
import type { Category, CategoryFormData } from "../types/category";
import { toast } from "react-toastify";


export type CategorySliceType = {
  categories: Category[],
  fetchCategories: () => Promise<void>
  addCategory: (category: CategoryFormData) => Promise<void>
}
const createCategories = (category: CategoryFormData): Category => {
  return {
    ...category,
    id_category: 0
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
      toast.success(response.message);
    } else if (response.status === 400) {
      toast.error(response.data.error);
    }
  }
})