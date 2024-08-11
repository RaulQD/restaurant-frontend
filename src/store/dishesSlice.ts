import { StateCreator } from 'zustand';
import { DishesFormData } from '../types';
import { getDishes } from '../services/apiDishes';
import { Dishes } from '../types/dishes';

export type DishesSliceType = {
  dishes: Dishes[],
  fetchDishes: () => Promise<void>,
  addDishes: (dish: DishesFormData) => Promise<void>
}

export const createDishesSlice: StateCreator<DishesSliceType> = (set) => ({
  dishes: [],
  fetchDishes: async () => {
    const dishes = await getDishes({ page: 1, limit: 5 });
    set({ dishes });
  },
  addDishes: async (dish: DishesFormData) => {
    console.log(dish);
  }
})