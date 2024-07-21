import { isAxiosError } from 'axios';
import api from '../../lib/axios';
import { Dishes, DishListSchema } from '../../types/dishes';
import { DishesFormData } from "../../types/index";


export const getDishes = async () => {
  try {
    const { data } = await api.get('/dishes');
    const response = DishListSchema.safeParse(data);
    return response;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al crear una categoria');
    }
  }
}

export const createDishes = async (formData: DishesFormData) => {
  try {
    const { data } = await api.post('/dishes', formData)
    console.log(data);
    // return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
