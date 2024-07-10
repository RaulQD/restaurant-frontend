import api from '../../lib/axios';
import { DishesSchema } from '../../types/dishes';
import { DishesFormData } from "../../types/index";


export const getDishes = async () => {
  try {
    const { data } = await api.get('/dishes');
    console.log('Datos recibidos:', data);
    const result = DishesSchema.safeParse(data);
    console.log(result)
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.error(error);

  }
}

export const createDishes = async (formData: DishesFormData) => {
  try {
    const { data } = await api.post('/dishes', formData,)
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
