import { StateCreator } from 'zustand';
import { DishesFormData } from '../types';
import { Dishes } from '../types/dishes';
import { getDishes } from '../admin/services/apiDishes';

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