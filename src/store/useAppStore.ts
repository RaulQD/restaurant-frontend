import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CategorySliceType, createCategorySlice } from "./categorySlice";
import { createDishesSlice, DishesSliceType } from "./dishesSlice";


export const useAppStore = create<CategorySliceType & DishesSliceType>()(devtools((...a) => ({
  ...createCategorySlice(...a),
  ...createDishesSlice(...a)
})))
