import { StateCreator } from 'zustand';
import { DishesFormData } from '../types';
import { Dishes } from '../types/dishes';
import { getDishes } from '../services/DishesApi';

export type DishesSliceType = {
  dishes: Dishes[],
  fetchDishes: () => Promise<void>,
  addDishes: (dish: DishesFormData) => Promise<void>
}

export const createDishesSlice: StateCreator<DishesSliceType> = (set) => ({
  dishes: [],
  fetchDishes: async () => {
    const dishes = await getDishes();
    console.log('Dishes:', dishes);
    // set({ dishes });
  },
  addDishes: async (dish: DishesFormData) => {
    console.log(dish);
  }
})