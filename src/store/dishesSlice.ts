import { StateCreator } from 'zustand';
import { getDishes } from '../admin/services/DishesApi';
import type { Dishes, DishesFormData } from '../types/dishes';

export type DishesSliceType = {
  dishes: Dishes[],
  fetchDishes: () => Promise<void>
  addDishes: (dish: DishesFormData) => Promise<void>
}

export const createDishesSlice: StateCreator<DishesSliceType> = (set) => ({
  dishes: [],
  fetchDishes: async () => {
    const dishes = await getDishes();
    console.log('Dishes:', dishes);
    set({ dishes });
  },
  addDishes: async (dish: DishesFormData) => {
    console.log(dish);
  }
})