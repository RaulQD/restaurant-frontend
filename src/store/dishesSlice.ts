import { StateCreator } from 'zustand';
import { getDishes } from '../admin/services/DishesApi';
import type { Dishes } from '../types/index';

export type DishesSliceType = {
  dishes: Dishes,
  fetchDishes: () => Promise<void>
}

export const createDishesSlice: StateCreator<DishesSliceType> = (set) => ({
  dishes: [],
  fetchDishes: async () => {
    const dishes = await getDishes();
    console.log('Dishes:', dishes);
    set({ dishes });
  }
})