import { StateCreator } from "zustand";
import { getCategories } from "../admin/services/CategoryApi";
import type { Categories } from "../types/index";


export type CategorySliceType = {
  categories: Categories,
  fetchCategories: () => Promise<void>
}

export const createCategorySlice: StateCreator<CategorySliceType> = (set) => ({
  categories: [],
  fetchCategories: async () => {
    const categories = await getCategories();
    console.log('Categorias:', categories);
    set({ categories });
  }
})