import { isAxiosError } from 'axios';
import api from '../../lib/axios';
import { Dish, DishFormData } from '../pages/dishes/types/dishes';

export const createDishes = async (formData: DishFormData) => {
  try {
    const { data } = await api.post('/dishes', formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al crear una plato');
    }
  }
}
export type GetDishesAPIType = {
  page: number;
  limit: number;
}

export const getDishes = async (params: GetDishesAPIType) => {
  try {
    const { data } = await api.get('/dishes', { params });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al obtener una plato');
    }
  }
}

export const getDishesById = async (id: Dish['id']) => {
  try {
    const { data } = await api.get(`/dishes/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al obtener una plato');
    }
  }
}

type UpdateAPIType = {
  formData: DishFormData;
  dishesId: Dish['id'];
}

export const updateDishes = async ({ formData, dishesId }: UpdateAPIType) => {
  try {
    const { data } = await api.put(`/dishes/${dishesId}`, formData)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al actualizar un plato');
    }
  }
}
export type UpdateImageAPIType = {
  formData: FormData;
  dishesId: Dish['id'];
}
export const updateDishesImage = async ({ formData, dishesId }: UpdateImageAPIType) => {
  try {
    const { data } = await api.put(`/uploads/dishes/${dishesId}`, formData)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al actualizar la imagen del plato');
    }

  }
}

export const deleteDishes = async (id: Dish['id']) => {
  try {
    const { data } = await api.delete(`/dishes/${id}`);
    console.log(data);
    // return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al eliminar un plato');
    }
  }
}


